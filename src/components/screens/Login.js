import { Icon } from "@rneui/themed";
import React, { useCallback, useState } from "react";
import {
  Text,
  ImageBackground,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { styles } from "../../styles/styles";
import { isEmailExists, isPwdCorrects, loginUser } from "../asyncStorageHelper";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [isEmailValidate, setIsEmailValidate] = useState(true);
  const [errorEmailMsg, setErrorEmailMsg] = useState("");

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

  const checkPwdFormat = useCallback(() => {
    let regExpPwd = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!regExpPwd.test(password)) {
      setErrorPwdMsg(
        "Votre mot de passe doit contenir 8 caractères dont 1 lettre, 1 nombre et un caractère spécial."
      );
    }
  }, [password, setPassword]);

  const onSubmit = useCallback(async () => {
    if (!email || !password || !isEmailValidate || !isPwdValidate) {
      setErrorForm("Veuillez renseigner tous les champs.");
      return;
    }

    if (!(await isEmailExists(email))) return setErrorForm("Email invalide");
    if (!(await isPwdCorrects(email, password)))
      return setErrorForm("Mot de passe invalide");

    await loginUser(email);
    navigation.push("home");
  }, [email, password, isEmailValidate, isPwdValidate]);

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
            <Text style={styles.label}>Connexion</Text>

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
              <Text style={styles.inputLabel}>Se connecter</Text>
            </TouchableOpacity>

            <View style={styles.connexionBox}>
              <Text style={styles.connexionText}>Pas de compte ?</Text>
              <TouchableOpacity onPress={() => navigation.push("register")}>
                <Text style={styles.connexion}> Inscription</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
export default Login;

//onPress={() => navigation.push('home')}
