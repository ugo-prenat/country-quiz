import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { styles } from '../../styles/home';

import CountryCard from '../CountryCard';

const CountryList = ({ navigation }) => {
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
        <ImageBackground 
            source={require('../../assets/bg_gradient.png')}
            resizeMode="cover"
            style={styles.background_image}>

            <View style={styles.container}>

                <View style={styles.header_bar}>
                    <TouchableOpacity onPress={() => navigation.push('home')}>
                        <Image
                            source={require('../../assets/logo_header.png')}
                            style={styles.logo_appBar}>
                        </Image>
                    </TouchableOpacity>
                </View>

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
        </ImageBackground>
    </SafeAreaView>
  );
};

export default CountryList;