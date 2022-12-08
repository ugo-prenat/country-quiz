import React, { useEffect } from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles as genStyles } from '../../styles/styles';
import { styles } from '../../styles/testMap';
import GetLocation from 'react-native-get-location';
import { getDistance } from 'geolib';

const TestMap = () => {
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
    return dis;
  };

  useEffect(() => {
    (async () => {
      const dis = await getDistanceBetweenUserAndCountry(COUNTRY.latlng);
      console.log(dis);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}></View>
    </SafeAreaView>
  );
};

const COUNTRY = {
  name: {
    common: 'Peru',
    official: 'Republic of Peru',
    nativeName: {
      aym: { official: 'Piruw Suyu', common: 'Piruw' },
      que: { official: 'Piruw Ripuwlika', common: 'Piruw' },
      spa: { official: 'República del Perú', common: 'Perú' }
    }
  },
  tld: ['.pe'],
  cca2: 'PE',
  ccn3: '604',
  cca3: 'PER',
  cioc: 'PER',
  independent: true,
  status: 'officially-assigned',
  unMember: true,
  currencies: { PEN: { name: 'Peruvian sol', symbol: 'S/ ' } },
  idd: { root: '+5', suffixes: ['1'] },
  capital: ['Lima'],
  altSpellings: ['PE', 'Republic of Peru', 'República del Perú'],
  region: 'Americas',
  subregion: 'South America',
  languages: { aym: 'Aymara', que: 'Quechua', spa: 'Spanish' },
  translations: {
    ara: { official: 'جمهورية بيرو', common: 'بيرو' },
    bre: { official: 'Republik Perou', common: 'Perou' },
    ces: { official: 'Peruánská republika', common: 'Peru' },
    cym: { official: 'Republic of Peru', common: 'Peru' },
    deu: { official: 'Republik Peru', common: 'Peru' },
    est: { official: 'Peruu Vabariik', common: 'Peruu' },
    fin: { official: 'Perun tasavalta', common: 'Peru' },
    fra: { official: 'République du Pérou', common: 'Pérou' },
    hrv: { official: 'Republika Peru', common: 'Peru' },
    hun: { official: 'Perui Köztársaság', common: 'Peru' },
    ita: { official: 'Repubblica del Perù', common: 'Perù' },
    jpn: { official: 'ペルー共和国', common: 'ペルー' },
    kor: { official: '페루 공화국', common: '페루' },
    nld: { official: 'Republiek Peru', common: 'Peru' },
    per: { official: 'جمهوری پرو', common: 'پرو' },
    pol: { official: 'Republika Peru', common: 'Peru' },
    por: { official: 'República do Peru', common: 'Perú' },
    rus: { official: 'Республика Перу', common: 'Перу' },
    slk: { official: 'Peruánska republika', common: 'Peru' },
    spa: { official: 'República de Perú', common: 'Perú' },
    swe: { official: 'Republiken Peru', common: 'Peru' },
    tur: { official: 'Peru Cumhuriyeti', common: 'Peru' },
    urd: { official: 'جمہوریہ پیرو', common: 'پیرو' },
    zho: { official: '秘鲁共和国', common: '秘鲁' }
  },
  latlng: [-10.0, -76.0],
  landlocked: false,
  borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
  area: 1285216.0,
  demonyms: {
    eng: { f: 'Peruvian', m: 'Peruvian' },
    fra: { f: 'Péruvienne', m: 'Péruvien' }
  },
  flag: '\uD83C\uDDF5\uD83C\uDDEA',
  maps: {
    googleMaps: 'https://goo.gl/maps/uDWEUaXNcZTng1fP6',
    openStreetMaps: 'https://www.openstreetmap.org/relation/288247'
  },
  population: 32971846,
  gini: { 2019: 41.5 },
  fifa: 'PER',
  car: { signs: ['PE'], side: 'right' },
  timezones: ['UTC-05:00'],
  continents: ['South America'],
  flags: {
    png: 'https://flagcdn.com/w320/pe.png',
    svg: 'https://flagcdn.com/pe.svg'
  },
  coatOfArms: {
    png: 'https://mainfacts.com/media/images/coats_of_arms/pe.png',
    svg: 'https://mainfacts.com/media/images/coats_of_arms/pe.svg'
  },
  startOfWeek: 'monday',
  capitalInfo: { latlng: [-12.05, -77.05] },
  postalCode: { format: '#####', regex: '^(\\d{5})$' }
};

export default TestMap;
