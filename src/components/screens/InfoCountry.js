import { Icon } from "@rneui/themed";
import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/infoCountry";
import { getDistance } from "geolib";
import GetLocation from "react-native-get-location";
import {
  addFavourite,
  isFavourite,
  removeFavourite,
} from "../asyncStorageHelper";

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
    let str = "";
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
      <TouchableOpacity
        style={[styles.goBack]}
        onPress={() => navigation.goBack()}
      >
        <Icon name="arrow-left" type="font-awesome" color="#888" />
        <Text> Retour</Text>
      </TouchableOpacity>
      <Image
        source={{
          uri: hasLoad
            ? data.flags.png
            : "https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-1-scaled-1150x647.png",
        }}
        style={{
          height: 175,
          marginVertical: 20,
        }}
        resizeMode="contain"
      />
      <Text style={[styles.title]}>
        {hasLoad && data.name
          ? `${data.translations.fra.common} (${data.cca3})`
          : ""}
      </Text>
      <View style={[styles.container]}>
        <View style={[styles.col]}>
          <Text style={[styles.data]}>
            <Icon style={styles.dataIcon} name="users" type="font-awesome" />
            <Text> {hasLoad ? data.population : "---"}</Text>
          </Text>
          <Text style={[styles.data]}>
            <Icon style={styles.dataIcon} name="house" type="" />
            <Text>
              {hasLoad && data.capital ? data.capital.join(", ") : "---"}
            </Text>
          </Text>
        </View>
        <View style={[styles.col]}>
          <Text style={[styles.data]}>
            <Icon style={styles.dataIcon} name="map" type="" />
            <Text>{hasLoad ? data.subregion : "---"}</Text>
          </Text>
          <Text style={[styles.data]}>
            <Icon style={styles.dataIcon} name="euro" type="font-awesome" />
            <Text>
              {hasLoad && data.currencies
                ? getAllCurrencies(data.currencies)
                : "---"}
            </Text>
          </Text>
        </View>
      </View>
      <Text style={[styles.distance]}>
        Vous vous situez à {distance} km de ce pays
      </Text>
      {hasLoad && (
        <View style={styles.favBtnContainer}>
          <Pressable
            style={[
              styles.favBtn,
              !isCountryFavourite ? styles.deleteFavBtn : "",
            ]}
            onPress={handleFavouriteClick}
          >
            <Text
              style={[
                styles.favBtnText,
                !isCountryFavourite ? styles.deleteFavBtnText : "",
              ]}
            >
              {isCountryFavourite
                ? "Supprimer des favoris"
                : "Ajouter aux favoris"}
            </Text>
          </Pressable>
        </View>
      )}
    </SafeAreaView>
  );
};

const getDistanceBetweenUserAndCountry = async (country) => {
  // First get user location
  const location = await GetLocation.getCurrentPosition({
    enableHighAccuracy: true,
    timeout: 15000,
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
