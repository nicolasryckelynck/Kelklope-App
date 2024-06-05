import React, {useState} from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Platform,
} from "react-native";
import {Formik} from "formik";
import {Entypo, MaterialIcons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {formSchemaLogin} from "./formSchema/formSchema";

import {handleLogin} from "./handleAction/handleUserActions";

import {styles} from "../styles/loginStyle";

const LoginScreen = ({navigation, setModal, setCheckToken}) => {
  const [visiblePassword, setVisiblePassword] = useState(false);
  const dispatch = useDispatch();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formSchemaLogin}
        onSubmit={(values) => {
          handleLogin(values, setModal, dispatch);
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <TextInput
              style={styles.input}
              placeholder="Adresse e-mail"
              textAlign="center"
              placeholderTextColor="#436B92"
              keyboardType="email-address"
              onChangeText={props.handleChange("email")}
              value={props.values.email}
              onBlur={props.handleBlur("email")}
            />

            <Text style={[styles.error, {top: 1}]}>
              {props.touched.email && props.errors.email}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Mot de passe"
              textAlign="center"
              placeholderTextColor="#436B92"
              secureTextEntry={!visiblePassword}
              onChangeText={props.handleChange("password")}
              value={props.values.password}
              onBlur={props.handleBlur("password")}
            />
            <TouchableOpacity
              onPress={() => {
                setVisiblePassword(!visiblePassword);
              }}
            >
              <MaterialIcons
                name={visiblePassword ? "visibility-off" : "visibility"}
                size={27}
                color="#ff9e1f"
                style={styles.visibilityButton}
              />
            </TouchableOpacity>
            <Text style={styles.error}>
              {props.touched.password && props.errors.password}
            </Text>
            <TouchableOpacity
              style={styles.button}
              onPress={props.handleSubmit}
            >
              <Text style={styles.buttonText}>Se connecter</Text>
            </TouchableOpacity>
            <View style={styles.registerContainer}>
              <TouchableOpacity
                onPress={() => navData.navigation.navigate("registerFromLogin")}
              >
                <Text style={styles.registerText}>Mot de passe oublié ? </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[styles.createNewAccount, {fontFamily: props.fontRegular}]}
              onPress={() => {
                navigation.navigate("registerFromAccountSetUp", {
                  navigation: navigation,
                  setModal: setModal,
                  setCheckToken: setCheckToken,
                });
                setModal(false);
              }}
            >
              <Text style={styles.createNewAccountText}>
                Créer un nouveau compte
              </Text>
              <Entypo
                name="chevron-thin-right"
                size={24}
                color="#9999A1"
                style={styles.entypoButton}
              />
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
