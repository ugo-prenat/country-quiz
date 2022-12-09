import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/home';
import CountryCard from '../CountryCard';
import { Icon } from '@rneui/themed';

const CountryList = ({ navigation, route }) => {
  const { region } = route.params;
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

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

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <TouchableOpacity
          style={[styles.goBack]}
          onPress={() => navigation.goBack()}
        >
          <Icon name="arrow-left" type="font-awesome" color="#888" />
          <Text> Retour</Text>
        </TouchableOpacity>
        <Text>{region === 'all' ? 'Tous les pays' : region}</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{ padding: 24 }}
            data={data}
            keyExtractor={({ altSpellings }) => altSpellings}
            renderItem={({ item }) => (
              <CountryCard country={item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default CountryList;
