import * as React from "react";
import {
  View,
  Text,
  TextInput,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {Formik} from "formik";
import {MaterialIcons} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import Header from "../header/headerAccount";
import {styles} from "../styles/modifyPasswordStyle";

import {handleModifyPassword} from "./handleAction/handleUserActions";

import {formSchemaModifyPassword} from "./formSchema/formSchema";

const {height} = Dimensions.get("window");

const PasswordInput = ({visible, setVisible, ...props}) => (
  <View style={styles.inputPasswordContainer}>
    <TextInput
      style={[styles.inputText, {height: height * 0.07, paddingLeft: 15}]}
      returnKeyType="done"
      secureTextEntry={!visible}
      {...props}
    />
    <TouchableOpacity
      onPress={() => {
        setVisible(!visible);
      }}
    >
      <MaterialIcons
        name={visible ? "visibility-off" : "visibility"}
        size={27}
        color="#ff9e1f"
        style={[styles.visibilityButton, {top: height * 0.02}]}
      />
    </TouchableOpacity>
  </View>
);

const ModifiyPassword = (props) => {
  const [visible, setVisible] = React.useState([false, false, false]);
  const dispatch = useDispatch();
  const {
    password,
    id,
    email,
    firstname: firstname,
    lastname: lastname,
  } = props.route.params;

  const navigation = useNavigation();

  return (
    <View>
      <Header navigation={navigation} title="Mot de passe" />
      <Formik
        initialValues={{
          actualpassword: "",
          newPassword: "",
          newPasswordConfirmation: "",
        }}
        validateOnMount
        validationSchema={formSchemaModifyPassword}
        onSubmit={(values) => {
          handleModifyPassword(
            values,
            password,
            id,
            firstname,
            lastname,
            email,
            dispatch,
            navigation
          );
        }}
      >
        {(props) => (
          <View style={{top: height * 0.07}}>
            <PasswordInput
              visible={visible[0]}
              setVisible={(val) => setVisible([val, visible[1], visible[2]])}
              onBlur={props.handleBlur("actualpassword")}
              onChangeText={props.handleChange("actualpassword")}
              value={props.values.actualpassword}
              placeholder="Mot de passe actuel"
            />
            <PasswordInput
              visible={visible[1]}
              setVisible={(val) => setVisible([visible[0], val, visible[2]])}
              onBlur={props.handleBlur("newPassword")}
              onChangeText={props.handleChange("newPassword")}
              value={props.values.newPassword}
              placeholder="Nouveau mot de passe"
            />
            <PasswordInput
              visible={visible[2]}
              setVisible={(val) => setVisible([visible[0], visible[1], val])}
              onBlur={props.handleBlur("newPasswordConfirmation")}
              onChangeText={props.handleChange("newPasswordConfirmation")}
              value={props.values.newPasswordConfirmation}
              placeholder="Confirmez le mot de passe"
            />
            <TouchableOpacity
              style={styles.validate}
              onPress={props.handleSubmit}
            >
              <Text style={styles.textButton}>
                Sauvegarder les modifications
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </Formik>
    </View>
  );
};

export default ModifiyPassword;
