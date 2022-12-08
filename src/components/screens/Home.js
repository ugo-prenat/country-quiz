import React from 'react';
import { SafeAreaView, View, Text, Pressable } from 'react-native';
import { styles } from '../../styles/styles';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <Text>Home</Text>
        <Pressable onPress={() => navigation.push('register')}>
          <Text>go to register</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};
export default Home;
