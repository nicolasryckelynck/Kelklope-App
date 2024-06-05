import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import LoginScreen from "../accountSetUp/loginScreen";

const {height, width} = Dimensions.get("window");

const ModalContent = ({navigation, setModal, setCheckToken}) => {
  return (
    <View>
      <View style={{flexDirection: "row", left: width * 0.06}}>
        <Text style={styles.titleConnection}>Se connecter</Text>
        <TouchableOpacity
          onPress={() => {
            setModal(false);
          }}
          style={styles.connectionButton}
        >
          <Text style={styles.connectionButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.yourIdText}>Vos identifiants</Text>
      <LoginScreen
        navigation={navigation}
        setModal={setModal}
        setCheckToken={setCheckToken}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleConnection: {
    fontFamily: "ManropeBold",
    fontSize: 17,
    bottom: height * 0.025,
    left: width * 0.25,
  },
  connectionButton: {
    bottom: height * 0.026,
    left: width * 0.33,
  },
  connectionButtonText: {
    fontSize: 16,
    color: "#436B92",
    fontFamily: "ManropeSemiBold",
  },
  yourIdText: {
    color: "#666666",
    fontFamily: "ManropeRegular",
    right: width * 0.01,
    top: height * 0.01,
  },
});

export default ModalContent;
