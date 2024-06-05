import React from "react";
import {View, Text, TouchableOpacity, Alert} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {styles} from "../style/favoriteStyle";

export const PriceAlertButton = ({
  decoded,
  setModalItemInformations,
  setmodalAddTargetPriceVisible,
  item,
  navigation,
  modalAddTargetPriceVisible,
}) => {
  const hanldeClick = () => {
    if (decoded.id) {
      setModalItemInformations(item["item"]);
      setmodalAddTargetPriceVisible(!modalAddTargetPriceVisible);
    } else {
      Alert.alert("Veuillez vous connecter", [
        {
          text: "Se connecter !",
          onPress: () => navigation.navigate("myAccount"),
        },
        {
          text: "Annuler",
          onPress: () => console.log("Annuler sélectionné!"),
          style: "cancel",
        },
      ]);
    }
  };

  return (
    <View style={{top: 10}}>
      <TouchableOpacity onPress={hanldeClick}>
        <View style={styles.targetPriceOrAlert}>
          <Text style={styles.activateAlertPriceText}>
            Activer une alerte de prix
          </Text>
        </View>
        <View style={styles.inactiveNotificationsLogoView}>
          <View
            style={[
              styles.notificationLogo,
              {
                borderColor: "#B2B2B2",
                backgroundColor: "#fff",
              },
            ]}
          >
            <Ionicons
              name="notifications-outline"
              size={28}
              color="#262626"
              style={styles.inactiveNotificationsLogo}
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
