import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ActivityIndicator,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles } from "../../styles/styles";

const Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all");
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
      <View>
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
    </SafeAreaView>
  );
};

const CountryCard = ({ country, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("infoCountry", {
          countryName: country.name.common,
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

export default Home;
