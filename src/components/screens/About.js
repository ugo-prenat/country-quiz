import React from "react";
import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native";
import { styles } from "../../styles/styles";

const About = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollViewContainer}>
        <Text style={styles.title}>Qu'est ce que Country Quiz ?</Text>
        <Text>
          Country Quiz est une application mobile traitant des différents pays
          du monde. Sur cette application, vous pourrez tester vos connaissances
          en géographie et les améliorer de manière ludique.
        </Text>
        <Text style={styles.title}>Mentions Légales</Text>
        <Text style={styles.subtitle}>Services utilisés</Text>
        <Text>
          Données provenant du service REST Countries
          (https://restcountries.com)
        </Text>
        <Text>Application réalisée avec React Native.</Text>
        <Text>Add-ons: "@rneui/themed"</Text>
        <Text style={styles.subtitle}>Contributeurs</Text>
        <Text>Ugo PRENAT</Text>
        <Text>Maxime PRIOLEAU</Text>
        <Text>Lubin PAULY</Text>
        <Text>Brian HO VAN CAM RICHARD</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default About;
