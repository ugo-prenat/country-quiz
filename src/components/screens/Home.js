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

const Home = ({ navigation }) => {
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground 
        source={require('../../assets/bg_gradient.png')}
        resizeMode="cover"
        style={styles.background_image}>
        
        <View style = {styles.container}>

          <TouchableOpacity style={styles.coutryButton} onPress={() => navigation.push('countryList', {region: 'all'})}>
            <Text>Tous les pays</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.coutryButton} onPress={() => navigation.push('countryList',{ region: 'europe'})}>
            <Text>Europe</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.coutryButton} onPress={() => navigation.push('countryList',{ region: 'america'})}>
            <Text>Amériques</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.coutryButton} onPress={() => navigation.push('countryList', {region: 'africa'})}>
            <Text>Afrique</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.coutryButton} onPress={() => navigation.push('countryList', {region: 'asia'})}>
            <Text>Asie</Text>
          </TouchableOpacity>

        </View>
        
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
