import React from "react";
import {Alert, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {styles} from "../style/productInformations";

export const AlertButton = ({id, setModalVisible, checkAlert}) => (
  <TouchableOpacity
    onPress={() => {
      id
        ? setModalVisible(true)
        : Alert.alert("Veuillez vous connecter pour mettre une alerte de prix");
    }}
    style={styles.notifications}
  >
    <Ionicons
      name={checkAlert > 0 ? "notifications-sharp" : "notifications-outline"}
      size={35}
      color="#436B92"
    />
  </TouchableOpacity>
);
