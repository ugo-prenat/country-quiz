import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles/login';

const CountryCard = ({ country, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate('infoCountry', {
          countryName: country.name.common
        })
      }
    >
      <View style={styles.viewCardAllCountry}>
        <Image
          style={styles.imageAllCountryFlags}
          source={{ uri: country.flags.png }}
          resizeMode="contain"
        />
        <Text style={styles.textAllCountryFlags}>
          {country.translations.fra.common}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default CountryCard;
