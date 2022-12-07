import React from 'react';
import { Pressable, SafeAreaView, Text, ImageBackground, View, Image, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../../styles/styles';


const Register = ({ navigation }) => {
  return (
    <View style={styles.safeArea}>
        <ImageBackground source={require('../../assets/bg_gradient.png')} resizeMode="cover" style={styles.background_image}>
            <View style={styles.container}>
              <Image source={require('../../assets/logo_app.png')} style={styles.logo}></Image>
              <Text style={styles.label}>Inscription</Text>
              
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Email</Text>
                <TextInput style={styles.input}>

                </TextInput>
              </View>
              
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Nom d'utilisateur</Text>
                <TextInput style={styles.input}></TextInput>
              </View>
              
              <View style={styles.inputBox}>
                <Text style={styles.inputLabel}>Mot de Passe</Text>
                <TextInput style={styles.input}></TextInput>
              </View>

              <TouchableOpacity style={styles.submitButton}>
                <Text style={styles.inputLabel}>S'inscrire</Text>
              </TouchableOpacity>

            </View>
        </ImageBackground>
    </View>
  );
};
export default Register;

/*

<Pressable onPress={() => navigation.push('home')}>
        <Text>go to home</Text>
      </Pressable>

*/