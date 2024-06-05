import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {Ionicons} from "@expo/vector-icons";

import {styles} from "../style/favoriteStyle";

export const TargetPriceButton = ({
  item,
  decoded,
  setModalItemInformations,
  setIsEnabled,
  modalItemInformations,
  setmodalAddTargetPriceVisible,
  modalAddTargetPriceVisible,
}) => {
  const handleModal = () => {
    setModalItemInformations(item["item"]);
    if (decoded.id) {
      setIsEnabled(modalItemInformations.email_active > 0 ? true : false);
      setmodalAddTargetPriceVisible(!modalAddTargetPriceVisible);
    }
  };

  return (
    <TouchableOpacity onPress={() => handleModal()}>
      <View style={{top: 10}}>
        <View style={styles.targetPriceOrAlert}>
          <Text style={styles.desiredPrice}>Prix souhaité</Text>
          <Text style={styles.targetPrice}>
            {" "}
            {item["item"]["target_price"]} €
          </Text>
        </View>
        <View style={styles.notificationActiveView}>
          <View
            style={[
              styles.notificationLogo,
              {
                borderColor: "#436B92",
                backgroundColor: "#436B92",
              },
            ]}
          >
            <Ionicons
              name="notifications-outline"
              size={28}
              color="white"
              style={styles.notificationsActiveLogo}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
