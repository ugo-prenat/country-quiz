import React, { useCallback, useState } from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView
} from 'react-native';
import { styles } from '../../styles/styles';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [isEmailValidate, setIsEmailValidate] = useState(true);

  const [username, setUsername] = useState('');
  const [isUsernameValidate, setIsUsernameValidate] = useState(true);

  const [password, setPassword] = useState('');
  const [isPwdValidate, setIsPwdValidate] = useState(true);

  const checkEmailFormat = useCallback(() => {
    const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!regExpEmail.test(email)) {
      Alert.alert('Email invalide');
    }
  }, [email, setEmail]);

  const validateEmail = useCallback(() => {
    setIsEmailValidate(email.length > 5);
    checkEmailFormat();
  }, [email, setIsEmailValidate]);

  const validateUsername = useCallback(() => {
    setIsUsernameValidate(username.length > 3);
  }, [username, setIsUsernameValidate]);

  const checkPwdFormat = useCallback(() => {
    let regExpPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regExpPwd.test(password)) {
      Alert.alert('Mot de passe invalide');
    }
  }, [password, setPassword]);

  const onSubmit = useCallback(() => {
    if (
      !email ||
      !username ||
      !password ||
      !isEmailValidate ||
      !isUsernameValidate ||
      !isPwdValidate
    ) {
      Alert.alert('Votre inscription est incomplète.');
      return;
    }

    Alert.alert(
      'Bienvenue ' +
        username +
        '.\n' +
        'Votre inscription a \n bien été prise en compte !'
    );
  }, [
    email,
    username,
    password,
    isEmailValidate,
    isUsernameValidate,
    isPwdValidate
  ]);

  return (
    <View style={styles.safeArea}>
      <ImageBackground
        source={require('../../assets/bg_gradient.png')}
        resizeMode="cover"
        style={styles.background_image}
      >
        <ScrollView style={styles.safeArea}>
          <View style={styles.container}>
            <Image
              source={require('../../assets/logo_app.png')}
              style={styles.logo}
            ></Image>
            <Text style={styles.label}>Inscription</Text>

            <View style={styles.inputBox}>
              <Text
                style={[
                  styles.inputLabel,
                  !isEmailValidate && styles.errorInputLabel
                ]}
              >
                Email
              </Text>
              <TextInput
                style={[styles.input, !isEmailValidate && styles.errorInput]}
                value={email}
                onChangeText={setEmail}
                onEndEditing={validateEmail}
              ></TextInput>
            </View>

            <View style={styles.inputBox}>
              <Text
                style={[
                  styles.inputLabel,
                  !isUsernameValidate && styles.errorInputLabel
                ]}
              >
                Nom d'utilisateur
              </Text>
              <TextInput
                style={[styles.input, !isUsernameValidate && styles.errorInput]}
                value={username}
                onChangeText={setUsername}
                onEndEditing={validateUsername}
              ></TextInput>
            </View>

            <View style={styles.inputBox}>
              <Text
                style={[
                  styles.inputLabel,
                  !isPwdValidate && styles.errorInputLabel
                ]}
              >
                Mot de Passe
              </Text>
              <TextInput
                style={[styles.input, !isPwdValidate && styles.errorInput]}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={true}
                onEndEditing={checkPwdFormat}
              ></TextInput>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
              <Text style={styles.inputLabel}>S'inscrire</Text>
            </TouchableOpacity>

            <View style={styles.connexionBox}>
              <Text style={styles.connexionText}>Déjà un compte ?</Text>
              <TouchableOpacity>
                <Text style={styles.connexion}> Connexion</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
