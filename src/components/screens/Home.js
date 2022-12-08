import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image
} from 'react-native';
import { styles } from '../../styles/styles';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
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
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 24 }}>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ altSpellings }) => altSpellings}
            renderItem={({ item }) => <CountryCard country={item} />}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const CountryCard = ({ country }) => {
  return (
    <View style={styles.viewCardAllCountry}>
      <Image
        style={styles.imageAllCountryFlags}
        source={{ uri: country.flags.png }}
      />
      <Text style={styles.textAllCountryFlags}>
        {country.translations.fra.common}
      </Text>
    </View>
  );
};

export default Home;
