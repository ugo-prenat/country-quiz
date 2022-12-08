import { Icon } from "@rneui/themed";
import React, { useCallback, useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "../../styles/infoCountry";

const Info = ({ route, navigation }) => {
  const { countryName } = route.params;
  const [data, setData] = useState({});
  const [hasLoad, setHasLoad] = useState(false);

  const distance = 0;

  const loadData = useCallback(async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    const json = await res.json();

    //console.log(res[0].name);

    if (json instanceof Array) setData(json[0]);
    setHasLoad(json instanceof Array);
  }, [countryName]);

  useEffect(() => {
    loadData();
  }, []);

  const getAllCurrencies = (currencies) => {
    let str = "";
    console.log(currencies);
    for (const properties in currencies) {
      if (Object.hasOwnProperty.call(currencies, properties)) {
        const element = currencies[properties];
        str += `${element.name} (${element.symbol}), `;
      }
    }
    return str.substring(0, str.length - 2);
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
    </SafeAreaView>
  );
};
export default Info;
