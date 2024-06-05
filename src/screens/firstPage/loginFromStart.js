import React, {useState} from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {Formik} from "formik";
import {MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";

import {loginUser} from "../../redux/actions/authAction";

import Header from "../account/header/headerAccount";

import {formSchemaLogin} from "../account/accountSetUp/formSchema/formSchema";

import {styles} from "./style/loginFromStartStyle";

const LoginScreenFromStart = () => {
  const [visiblePassword, setVisiblePassword] = useState(false);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = async (values) => {
    dispatch(loginUser(values))
      .then((response) => {
        if (response.success) navigation.navigate("firstPage");
      })
      .catch((error) => {
        throw new Error(error);
      });
  };

  return (
    <KeyboardAvoidingView>
      <Header navigation={navigation} title="Se connecter" />
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={formSchemaLogin}
        onSubmit={(values) => {
          handleLogin(values);
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View>
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

              <Text style={styles.error}>
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
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default LoginScreenFromStart;
