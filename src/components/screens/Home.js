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
          
        <View style={styles.container}>

          <View style={styles.header_bar}>
            <Image
              source={require('../../assets/logo_header.png')}
              style={styles.logo_appBar}>
            </Image>
          </View>
 
          <Text style={styles.home_label}>Découvrez les pays du monde sur Country Quiz !</Text>

          <TouchableOpacity style={styles.countryAllButton} onPress={() => navigation.push('countryList', {region: 'all'})}>
            <Text style={styles.textAllCountry}>Tous les pays</Text>
          </TouchableOpacity>

        
            <View style={styles.countryBox}>
              <TouchableOpacity style={styles.countryButton} onPress={() => navigation.push('countryList',{ region: 'europe'})}>
                <Image style={styles.imageCountry} source={require('../../assets/europe.png')}  resizeMode='contain'></Image>
                <Text style={styles.textCountry}>Europe</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.countryButton} onPress={() => navigation.push('countryList',{ region: 'america'})}>
                <Image style={styles.imageCountry} source={require('../../assets/america.png')} resizeMode='contain'></Image>
                <Text style={styles.textCountry}>Amériques</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.countryBox}>
              <TouchableOpacity style={styles.countryButton} onPress={() => navigation.push('countryList', {region: 'africa'})}>
                <Image style={styles.imageCountry} source={require('../../assets/africa.png')}  resizeMode='contain'></Image>
                <Text style={styles.textCountry}>Afrique</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.countryButton} onPress={() => navigation.push('countryList', {region: 'asia'})}>
                <Image style={styles.imageCountry} source={require('../../assets/asia.png')}  resizeMode='contain'></Image>
                <Text style={styles.textCountry}>Asie & Océanie</Text>
              </TouchableOpacity>
            </View>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;
