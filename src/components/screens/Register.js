import { Icon } from "@rneui/themed";
import React, { useCallback, useState, useEffect } from "react";
import {
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { styles } from "../../styles/styles";
import {
  isEmailExists,
  isUsernameExists,
  registerUser,
} from "../asyncStorageHelper";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isEmailValidate, setIsEmailValidate] = useState(true);
  const [errorEmailMsg, setErrorEmailMsg] = useState("");

  const [username, setUsername] = useState("");
  const [isUsernameValidate, setIsUsernameValidate] = useState(true);
  const [errorUsernameMsg, setErrorUsernameMsg] = useState("");

  const [password, setPassword] = useState("");
  const [isPwdValidate, setIsPwdValidate] = useState(true);
  const [errorPwdMsg, setErrorPwdMsg] = useState("");
  const [hidePwd, setHidePwd] = useState(true);

  const [errorForm, setErrorForm] = useState("");

  const checkEmailFormat = useCallback(() => {
    const regExpEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (!regExpEmail.test(email)) {
      setErrorEmailMsg("Votre email est invalide");
    }
  }, [email, setEmail]);

  const validateEmail = useCallback(() => {
    setIsEmailValidate(email.length > 5);
    checkEmailFormat();
  }, [email, setIsEmailValidate]);

  const validateUsername = useCallback(() => {
    if (username.length < 3) {
      setErrorUsernameMsg("Votre pseudo doit contenir au moins 5 caractères.");
    }
  }, [username, setIsUsernameValidate]);

  const checkPwdFormat = useCallback(() => {
    let regExpPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regExpPwd.test(password)) {
      setErrorPwdMsg(
        "Votre mot de passe doit contenir 8 caractères dont 1 lettre, 1 nombre et un caractère spécial."
      );
    }
  }, [password, setPassword]);

  const onSubmit = useCallback(async () => {
    if (
      !email ||
      !username ||
      !password ||
      !isEmailValidate ||
      !isUsernameValidate ||
      !isPwdValidate
    ) {
      setErrorForm("Veuillez renseigner tous les champs.");
      return;
    }

    if (await isEmailExists(email))
      return setErrorForm("Cet email est déjà utilisé.");
    if (await isUsernameExists(username))
      return setErrorForm("Ce nom d'utilisateur est déjà utilisé.");

    await registerUser(email, username, password);
    navigation.push("home");

    /* Alert.alert(
      'Merci de votre inscription ' +
        username +
        '!\n' +
        'Bienvenue sur Country Quiz !'
    ); */
  }, [
    email,
    username,
    password,
    isEmailValidate,
    isUsernameValidate,
    isPwdValidate,
  ]);

  return (
    <View style={styles.safeArea}>
      <ImageBackground
        source={require("../../assets/bg_gradient.png")}
        resizeMode="cover"
        style={styles.background_image}
      >
        <ScrollView style={styles.safeArea}>
          <View style={styles.container}>
            <Image
              source={require("../../assets/logo_app.png")}
              style={styles.logo}
            ></Image>
            <Text style={styles.label}>Inscription</Text>

            <Text style={styles.errorMsgGlobal}>{errorForm}</Text>

            <View style={styles.inputBox}>
              <Text
                style={[
                  styles.inputLabel,
                  !isEmailValidate && styles.errorInputLabel,
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
              <Text style={styles.errorMsg}>{errorEmailMsg}</Text>
            </View>
            <View style={styles.inputBox}>
              <Text
                style={[
                  styles.inputLabel,
                  !isUsernameValidate && styles.errorInputLabel,
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
              <Text style={styles.errorMsg}>{errorUsernameMsg}</Text>
            </View>

            <View style={styles.inputBox}>
              <Text
                style={[
                  styles.inputLabel,
                  !isPwdValidate && styles.errorInputLabel,
                ]}
              >
                Mot de Passe
              </Text>
              <View
                style={[
                  styles.input,
                  {
                    flexDirection: "row",
                    alignItems: "center",
                  },
                ]}
              >
                <TextInput
                  style={[styles.pwdInput, !isPwdValidate && styles.errorInput]}
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={hidePwd}
                  onEndEditing={checkPwdFormat}
                />
                <Icon
                  name="eye"
                  type="material-community"
                  onPress={() => setHidePwd(!hidePwd)}
                />
              </View>
              <Text style={styles.errorMsg}>{errorPwdMsg}</Text>
            </View>

            <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
              <Text style={styles.inputLabel}>S'inscrire</Text>
            </TouchableOpacity>

            <View style={styles.connexionBox}>
              <Text style={styles.connexionText}>Déjà un compte ?</Text>
              <TouchableOpacity onPress={() => navigation.push("login")}>
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
