import { useIsFocused } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  View,
  FlatList,
  Text
} from 'react-native';
import { styles } from '../../styles/login';
import { getUserFavourites, resetFavourites } from '../asyncStorageHelper';
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
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : favourites.length === 0 ? (
          <Text style={styles.emptyFavourites}>Aucun favoris trouvé</Text>
        ) : (
          <FlatList
            style={{ padding: 24 }}
            data={favourites}
            key={favourites.id}
            renderItem={(favourite) => (
              <CountryCard country={favourite.item} navigation={navigation} />
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
export default Favourites;
