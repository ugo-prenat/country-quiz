import React, { useState, useEffect, useMemo } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from 'react-native';
import { styles } from '../../styles/home';
import CountryCard from '../CountryCard';
import { Icon } from '@rneui/themed';

const CountryList = ({ navigation, route }) => {
  const { region } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  const getCountries = async () => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3.1/${
          region === 'all' ? 'all' : `region/${region}`
        }`
      );
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredCountries = useMemo(() => {
    return data.filter((country) =>
      country.translations.fra.common
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [data, search]);

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
        
      <View>
        
        <Text>{region === 'all' ? 'Tous les pays' : region}</Text>

        <TextInput
          defaultValue={search}
          onChangeText={setSearch}
          placeholder={'Rechercher un pays'}
        />

        {isLoading ? (
          <ActivityIndicator />
        ) : filteredCountries.length === 0 ? (
          <Text>Aucun pays trouvé</Text>
        ) : (
          <FlatList
            style={{ padding: 24 }}
            data={filteredCountries}
            keyExtractor={({ altSpellings }) => altSpellings}
            renderItem={({ item }) => (
              <CountryCard country={item} navigation={navigation}/>
            )}
            />
            )}
            </View>
        
    </SafeAreaView>
  );
};

export default CountryList;
