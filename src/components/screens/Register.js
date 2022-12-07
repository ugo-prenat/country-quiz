import React from 'react';
import { Pressable, SafeAreaView, Text } from 'react-native';
import { styles } from '../../styles/styles';

const Register = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text>Register</Text>
      <Pressable onPress={() => navigation.push('home')}>
        <Text>go to home</Text>
      </Pressable>
    </SafeAreaView>
  );
};
export default Register;
