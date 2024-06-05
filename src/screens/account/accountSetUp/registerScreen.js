import React, {useState} from "react";
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Dimensions,
  Switch,
  Platform,
} from "react-native";
import {Formik} from "formik";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useDispatch} from "react-redux";

import {handleRegisterUser} from "./handleAction/handleUserActions";

import {styles} from "../styles/registerStyle";

const {height, width} = Dimensions.get("window");

import Facebook from "../../../connectionConfiguration/facebook";

import {formSchema} from "./formSchema/formSchema";

const RegisterScreen = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const dispatch = useDispatch();

  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const CustomTextInput = ({
    placeholder,
    onChangeText,
    value,
    onBlur,
    secureTextEntry = false,
    keyboardType = "default",
  }) => {
    return (
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        textAlign="center"
        placeholderTextColor="#436B92"
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        value={value}
        onBlur={onBlur}
        keyboardType={keyboardType}
      />
    );
  };

  return (
    <ScrollView
      scrollEnabled={false}
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: "#fff"}}
    >
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === "ios" ? "height" : "padding"}
      >
        <Formik
          initialValues={{
            fullName: "",
            email: "",
            password: "",
          }}
          validationSchema={formSchema}
          onSubmit={(values) => {
            handleRegisterUser(values, navigation, dispatch);
          }}
        >
          {(props) => (
            <View style={styles.container}>
              <View style={styles.header}>
                <TouchableOpacity
                  style={{right: width * 0.1}}
                  onPress={() => {
                    navigation.goBack();
                  }}
                >
                  <Text style={styles.abortText}>Annuler</Text>
                </TouchableOpacity>
                <Text style={styles.newAccountText}>Nouveau compte</Text>
                <TouchableOpacity
                  onPress={isEnabled ? props.handleSubmit : null}
                >
                  <Text style={styles.saveText}>Sauvegarder</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.body}>
                <Text style={styles.idDefine}>Définir vos identifiants</Text>
                <View>
                  <CustomTextInput
                    placeholder="Nom d'utilisateur"
                    onChangeText={props.handleChange("fullName")}
                    value={props.values.fullName}
                    onBlur={props.handleBlur("fullName")}
                  />
                  <Text style={styles.error}>
                    {props.touched.fullName && props.errors.fullName}
                  </Text>
                  <CustomTextInput
                    placeholder="E-mail"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                    onBlur={props.handleBlur("email")}
                    keyboardType="email-address"
                  />
                  <Text style={styles.error}>
                    {props.touched.email && props.errors.email}
                  </Text>
                  <CustomTextInput
                    placeholder="Mot de passe"
                    onChangeText={props.handleChange("password")}
                    value={props.values.password}
                    onBlur={props.handleBlur("password")}
                    secureTextEntry={true}
                  />
                  <Text style={styles.error}>
                    {props.touched.password && props.errors.password}
                  </Text>
                  <View style={styles.acceptGeneralsConditionsView}>
                    <Text style={styles.activeNotificationsText}>
                      J'accepte les conditions générales d'utilisation
                    </Text>
                    <Switch
                      style={styles.switchAcceptConditons}
                      trackColor={{
                        false: "#767577",
                        true: "#ff9e1f",
                      }}
                      thumbColor={isEnabled ? "#fff" : "#f4f3f4"}
                      ios_backgroundColor="#F0F0F0"
                      onValueChange={toggleSwitch}
                      value={isEnabled}
                    />
                  </View>
                  {!isEnabled && (
                    <Text style={styles.mandatoryText}>
                      * Il est nécessaire d'accepter les conditions générales
                      d'utilisation afin de créer son compte
                    </Text>
                  )}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={isEnabled ? props.handleSubmit : null}
                  >
                    <Text style={styles.buttonText}>Créer son compte</Text>
                  </TouchableOpacity>
                  <View style={styles.registerContainer}>
                    <Text style={styles.registerText}>Déjà un compte ? </Text>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                      <Text style={styles.registerButton}> Connectez-vous</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={styles.otherConnectionOptions}>
                  <View style={styles.lineOr} />
                  <Text style={styles.orText}>Ou</Text>
                  <View style={styles.lineOr} />
                </View>

                <View
                  style={{
                    top: height * 0.1,
                    height: height * 0.2,
                  }}
                >
                  <Facebook largeur={width * 0.93} />
                </View>
                <View style={{height: height * 0.4}} />
              </View>
            </View>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const RegisterStack = createNativeStackNavigator();

function RegisterNavigator() {
  return (
    <RegisterStack.Navigator>
      <RegisterStack.Screen
        name="register"
        component={RegisterScreen}
        options={{headerShown: false}}
      ></RegisterStack.Screen>
    </RegisterStack.Navigator>
  );
}

export default RegisterNavigator;
