import { Icon } from '@rneui/themed';
import React, { useCallback, useEffect, useState } from 'react';
import {
  Image,
  ImageBackground,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { styles } from '../../styles/infoCountry';
import { getDistance } from 'geolib';
import GetLocation from 'react-native-get-location';
import {
  addFavourite,
  isFavourite,
  removeFavourite
} from '../asyncStorageHelper';

const Info = ({ route, navigation }) => {
  const { countryName } = route.params;
  const [data, setData] = useState({});
  const [distance, setDistance] = useState(0);
  const [hasLoad, setHasLoad] = useState(false);
  const [isCountryFavourite, setIsCountryFavourite] = useState();

  const loadData = useCallback(async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const json = await res.json();

    if (json instanceof Array) {
      const country = json[0];
      setData(country);
      setDistance(await getDistanceBetweenUserAndCountry(country.latlng));
      setIsCountryFavourite(await isFavourite(country));
    }

    setHasLoad(json instanceof Array);
  }, [countryName]);

  useEffect(() => {
    loadData();
  }, []);

  const getAllCurrencies = (currencies) => {
    let str = '';
    for (const properties in currencies) {
      if (Object.hasOwnProperty.call(currencies, properties)) {
        const element = currencies[properties];
        str += `${element.name} (${element.symbol}), `;
      }
    }
    return str.substring(0, str.length - 2);
  };

  const handleFavouriteClick = async () => {
    if (isCountryFavourite) {
      setIsCountryFavourite(false);
      await removeFavourite(data.name.common);
    } else {
      setIsCountryFavourite(true);
      await addFavourite(data);
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
      source={require('../../assets/bg_gradient.png')}
      resizeMode='cover'
      style={styles.background_image}>

        <View style={styles.containerCountry}>

        <View style={styles.header_bar}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={require('../../assets/logo_header.png')}
                style={styles.logo_appBar}>
            </Image>
          </TouchableOpacity>
        </View>

          <Image source={{
                  uri: hasLoad
                  ? data.flags.png
                  : 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png'}}
                style={styles.flag}
                resizeMode="contain"/>
                
              <Text style={[styles.title]}>
                {hasLoad && data.name
                  ? `${data.translations.fra.common} (${data.cca3})`
                  : ''}
              </Text>

              <View style={[styles.container]}>
                <View style={[styles.col]}>
                  <View style={[styles.data]}>
                    <Icon style={styles.dataIcon} name="users" type="font-awesome" color="#fff" />
                    <Text style={styles.textData}> {hasLoad ? data.population : '---'}</Text>
                  </View>
                  <View style={[styles.data]}>
                    <Icon style={styles.dataIcon} name="house" type="" color="#fff" />
                    <Text style={styles.textData}>{hasLoad && data.capital ? data.capital.join(', ') : '---'}</Text>
                  </View>
                </View>
              <View style={[styles.col]}>
                <View style={[styles.data]}>
                  <Icon style={styles.dataIcon} name="map" type="" color="#fff" />
                  <Text style={styles.textData}>{hasLoad ? data.subregion : '---'}</Text>
                </View>
                <View style={[styles.data]}>
                  <Icon style={styles.dataIcon} name="euro" type="font-awesome" color="#fff" />
                  <Text style={styles.textData}>{hasLoad && data.currencies ? getAllCurrencies(data.currencies) : '---'}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={[styles.distance]}>
              Vous vous situez à {distance} km de ce pays
            </Text>
            <View style={styles.favBtnContainer}>
              <Pressable
                style={[
                  styles.favBtn,
                  !isCountryFavourite ? styles.deleteFavBtn : ''
                ]}
                onPress={handleFavouriteClick}>
                <Text
                  style={[
                    styles.favBtnText,
                    !isCountryFavourite ? styles.deleteFavBtnText : ''
                  ]}>
                  {isCountryFavourite
                    ? 'Supprimer des favoris'
                    : 'Ajouter aux favoris'}
                </Text>
              </Pressable>
            </View>
          </View>
        </ImageBackground>
    </SafeAreaView>
  );
};

const getDistanceBetweenUserAndCountry = async (country) => {
  // First get user location
  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000
  });
  const { latitude, longitude } = location;

  // Then calcul distance between user and country
  var dis = getDistance(
    { latitude, longitude },
    { latitude: country[0], longitude: country[1] }
  );
  return Math.round(dis / 1000);
};

export default Info;


