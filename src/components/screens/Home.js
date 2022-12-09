import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import { styles } from '../../styles/styles';
import { resetFavourites } from '../asyncStorageHelper';
import CountryCard from '../CountryCard';

const Home = ({ navigation }) => {
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
    <SafeAreaView style={styles.safeArea}>
      <View>
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

export default Home;
