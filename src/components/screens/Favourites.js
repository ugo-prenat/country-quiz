import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
  Image
} from 'react-native';
import { styles } from '../../styles/login';
import { getUserFavourites } from '../asyncStorageHelper';
import CountryCard from '../CountryCard';

const Favourites = ({ navigation }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [favourites, setFavourites] = useState();
  const isFocused = useIsFocused();

  useEffect(() => {
    const loadFavouritesUserCountries = async () => {
      const favourites = await getUserFavourites();
      setFavourites(favourites);
      setIsLoading(false);
    };
    loadFavouritesUserCountries();
  }, [isFocused]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <ImageBackground
        source={require('../../assets/bg_gradient.png')}
        resizeMode="cover"
        style={styles.background_image}
      >
        <View style={styles.container}>
          <View style={styles.header_bar}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../../assets/logo_header.png')}
                style={styles.logo_appBar}
              ></Image>
            </TouchableOpacity>
          </View>
          <View>
            {isLoading ? (
              <ActivityIndicator />
            ) : favourites.length === 0 ? (
              <Text style={styles.emptyFavourites}>Aucun favoris trouvé</Text>
            ) : (
              <FlatList
                style={{ width: Dimensions.get('window').width }}
                data={favourites}
                key={favourites.id}
                renderItem={(favourite) => (
                  <CountryCard
                    country={favourite.item}
                    navigation={navigation}
                  />
                )}
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};
export default Favourites;
