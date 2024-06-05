import React from "react";
import {View, TextInput, Text, Pressable, Switch, Alert} from "react-native";

import {formatPrice} from "../formatPrice";

import {styles} from "../style/favoriteStyle";

const AlertInput = ({
  modalItemInformations,
  alertPrice,
  changingText,
  setIsChangingText,
  setAlertPrice,
  props,
  isEnabled,
  toggleSwitch,
}) => {
  return (
    <View style={styles.modalModifiyAlertView}>
      <TextInput
        style={[styles.input, {paddingVertical: 5}]}
        placeholderTextColor="#436B92"
        keyboardType="numeric"
        returnKeyType="done"
        maxLength={5}
        onChangeText={(text) => {
          setIsChangingText(true);
          if (parseFloat(text) > modalItemInformations.actual_price) {
            Alert.alert("Renseignez un prix inférieur au prix de l'article");
            setAlertPrice(modalItemInformations.target_price);
          } else {
            props.handleChange("targetPrice", text);
            setAlertPrice(text);
          }
        }}
        value={
          alertPrice <= 0 &&
          !changingText &&
          modalItemInformations.target_price > 0
            ? modalItemInformations.target_price.toString()
            : alertPrice.toString()
        }
      />
      <Text style={styles.modalModifyAlertEuroSign}>€</Text>
      <Text style={styles.modalModifiyEconomizeText}>
        Économisez{" "}
        {modalItemInformations.target_price || alertPrice
          ? (
              parseFloat(modalItemInformations.actual_price) -
              formatPrice(alertPrice)
            ).toFixed(2)
          : "N/A"}{" "}
        €
      </Text>
      <Pressable
        style={styles.modalModifiyPressableSave}
        onPress={props.handleSubmit}
      >
        <Text style={styles.modalModifiyAlertSaveText}>Sauvegarder</Text>
      </Pressable>
      <View style={styles.activateEmailAlertView}>
        <Text style={styles.receiveEmailAlertText}>
          Recevoir les alertes par mail
        </Text>
        <Switch
          style={styles.switchActiveEmail}
          trackColor={{
            false: "#767577",
            true: "#436B92",
          }}
          ios_backgroundColor="#F0F0F0"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
    </View>
  );
};

export default AlertInput;
