import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Dimensions,
  Platform,
} from "react-native";
import {Formik} from "formik";
import {useSelector, useDispatch} from "react-redux";
import {useNavigation, useIsFocused} from "@react-navigation/native";
import {Entypo} from "@expo/vector-icons";
import {formSchemaHomeScreen} from "./formSchema/formSchema";
import Header from "../header/headerAccount";
import {styles} from "../styles/homeScreenStyle";
import {handleUpdateInfoUser} from "./handleAction/handleUserActions";
import {logout} from "./handleAction/logout";

const {height, width} = Dimensions.get("window");

const CustomTextInput = ({placeholder, handleChange, value, ...props}) => (
  <TextInput
    style={[styles.inputText, {padding: 10}]}
    placeholder={placeholder}
    keyboardType="default"
    returnKeyType="done"
    onChangeText={handleChange}
    value={value}
    {...props}
  />
);

const HomeScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user);

  const [user, setUser] = useState({
    email: "",
    lastname: "",
    firstname: "",
    password: "",
    id: "",
  });

  const loadProfile = async () => {
    if (!token) return;
    setUser({
      email: token.email,
      lastname: token.lastname,
      firstname: token.firstname,
      password: token.password,
      id: token.id,
    });
  };

  useEffect(() => {
    if (isFocused) loadProfile();
  }, [isFocused]);

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "height" : "padding"}
    >
      <Header navigation={navigation} title="Gestion du compte" />
      <Formik
        initialValues={{
          lastname: user.lastname,
          firstname: user.firstname,
          password: user.password,
        }}
        validationSchema={formSchemaHomeScreen}
        validateOnMount
        onSubmit={(values) => {
          handleUpdateInfoUser(
            values,
            user.id,
            user.email,
            user.password,
            dispatch
          );
        }}
      >
        {(props) => (
          <View style={styles.container}>
            <View>
              <Text style={styles.title}>Informations du profil</Text>
            </View>
            <View style={{bottom: 17}}>
              <View style={styles.alignItem}>
                <Text style={[styles.textAboveInput, {bottom: 10}]}>Nom </Text>
              </View>
              <CustomTextInput
                placeholder={user.lastname}
                handleChange={props.handleChange("lastname")}
                value={props.values.lastname}
              />
              <Text style={styles.error}>
                {props.touched.lastname && props.errors.lastname}
              </Text>
              <View style={{bottom: 20}}>
                <View style={styles.alignItem}>
                  <Text style={[styles.textAboveInput, {bottom: 3}]}>
                    Prénom{" "}
                  </Text>
                </View>
                <CustomTextInput
                  placeholder={user.firstname}
                  handleChange={props.handleChange("firstname")}
                  value={props.values.firstname}
                />
                <Text style={styles.error}>
                  {props.touched.firstname && props.errors.firstname}
                </Text>
              </View>
              <View style={{bottom: 33}}>
                <View style={styles.alignItem}>
                  <Text style={[styles.textAboveInput, {bottom: 3}]}>
                    Email{" "}
                  </Text>
                </View>
                <TextInput
                  style={[styles.inputText, {padding: 5}]}
                  placeholder={"  " + user.email}
                  keyboardType="email-address"
                  returnKeyType="done"
                  value={props.values.email}
                  editable={false}
                />
                <Text style={styles.error}>
                  {props.touched.email && props.errors.email}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              style={styles.modifyPasswordButton}
              onPress={() => {
                navigation.navigate("ModifiyPassword", {
                  password: user.password,
                  props: props,
                  id: user.id,
                  email: user.email,
                  firstname: user.firstname,
                  lastname: user.lastname,
                });
              }}
            >
              <View style={{display: "flex", flexDirection: "row"}}>
                <Text style={styles.modifyPasswordText}>
                  Modifier le mot de passe
                </Text>
                <Entypo
                  name="chevron-thin-right"
                  size={22}
                  color="#9999A1"
                  style={{left: width * 0.27, paddingVertical: 10}}
                />
              </View>
            </TouchableOpacity>
            <View style={{top: height * 0.17}}>
              <TouchableOpacity
                style={styles.validate}
                onPress={props.handleSubmit}
              >
                <Text
                  style={[
                    styles.textButton,
                    {fontSize: 15, paddingVertical: 6},
                  ]}
                >
                  Sauvegarder les modifications
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.logout}
                onPress={() => logout(dispatch, navigation)}
              >
                <Text
                  style={[
                    styles.textButton,
                    {paddingVertical: 8, color: "#CB0000"},
                  ]}
                >
                  Déconnexion
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Formik>
    </KeyboardAvoidingView>
  );
};

export default HomeScreen;
