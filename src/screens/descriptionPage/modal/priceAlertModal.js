import React from "react";
import {
  View,
  Modal,
  Alert,
  Pressable,
  Text,
  TextInput,
  Switch,
} from "react-native";
import {Formik} from "formik";
import {styles} from "../style/descriptionProductStyle";
import {useDispatch} from "react-redux";

import {updatePrice} from "../api/updateTargetPrice";

export const PriceAlertModal = ({
  modalVisible,
  setModalVisible,
  formSchema,
  setIsChangingText,
  minPrice,
  setAlertPrice,
  alertPrice,
  changingText,
  target_price,
  isEnabled,
  toggleSwitch,
  id,
  navigation,
  setCheckAlert,
  setCheckFavorite,
  data,
}) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.pressableAbortText}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.abortText}>Annuler</Text>
            </Pressable>
            <Text style={styles.activeAlertPriceText}>
              Activer une alerte de prix
            </Text>
            <Formik
              initialValues={{
                targetPrice: "",
              }}
              validationSchema={formSchema}
              onSubmit={() => {
                alertPrice > data["prix"]
                  ? null
                  : updatePrice(
                      id,
                      alertPrice,
                      data["fk_produit_id"],
                      1,
                      isEnabled ? 1 : 0,
                      data,
                      setModalVisible,
                      modalVisible,
                      setCheckAlert,
                      setCheckFavorite,
                      dispatch
                    );
                setIsChangingText(false);
              }}
            >
              {(props) => (
                <View style={styles.viewModalContent}>
                  <TextInput
                    style={styles.input}
                    placeholderTextColor="#fff"
                    keyboardType="numeric"
                    returnKeyType="done"
                    maxLength={5}
                    onChangeText={(text) => {
                      setIsChangingText(true);
                      if (parseFloat(text) > minPrice) {
                        Alert.alert(
                          "Renseignez un prix inférieur au prix de l'article"
                        );
                        setAlertPrice("");
                      } else {
                        props.handleChange("targetPrice", text);
                        setAlertPrice(text);
                      }
                    }}
                    value={
                      alertPrice <= 0 && !changingText && target_price > 0
                        ? target_price.toString()
                        : alertPrice.toString()
                    }
                  />
                  <Text style={styles.euroSignText}>€</Text>
                  <Text style={styles.economizeText}>
                    Économisez{" "}
                    {alertPrice || target_price
                      ? (
                          parseFloat(minPrice) -
                          (alertPrice > 0 ? alertPrice : target_price)
                        ).toFixed(2)
                      : "N/A"}{" "}
                    €
                  </Text>
                  <Pressable
                    style={styles.pressableSave}
                    onPress={props.handleSubmit}
                  >
                    <Text style={styles.saveText}>Sauvegarder</Text>
                  </Pressable>
                  <View style={styles.activeEmailAlertView}>
                    <Text style={styles.receiveEmailAlertText}>
                      Recevoir les alertes par mail
                    </Text>
                    <Switch
                      style={styles.switchEmailActive}
                      trackColor={{
                        false: "#767577",
                        true: "#436B92",
                      }}
                      ios_backgroundColor="#F0F0F0"
                      onValueChange={
                        id
                          ? toggleSwitch
                          : Alert.alert(
                              "Veuillez vous connecter afin de déposer un avis",
                              "",
                              [
                                {
                                  text: "Annuler",
                                  onPress: () => console.log("Cancel Pressed"),
                                  style: "Annuler",
                                },
                                {
                                  text: "Se connecter",
                                  onPress: () => {
                                    navigation.navigate("Login");
                                  },
                                },
                              ]
                            )
                      }
                      value={isEnabled}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </View>
        </View>
      </Modal>
    </View>
  );
};
