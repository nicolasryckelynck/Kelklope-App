import React from "react";
import {View, Modal, Pressable, Text, TouchableOpacity} from "react-native";
import {Formik} from "formik";
import {useSelector} from "react-redux";

import {styles} from "../style/favoriteStyle";

import AlertInput from "../components/setAlertComponent";

import {updatePrice} from "../api/updateTargetPrice";
import {fetchFavorites} from "../api/fetchFavorites";

export const ModalComponent = ({
  modalAddTargetPriceVisible,
  setmodalAddTargetPriceVisible,
  modalItemInformations,
  decoded,
  formSchema,
  isEnabled,
  setAlertPrice,
  setIsChangingText,
  alertPrice,
  changingText,
  toggleSwitch,
  setInformations,
}) => {
  const token = useSelector((state) => state.user);
  const productFavorite = useSelector((state) => state.productFavorite);

  const receiveFavoriteUpdate = React.useCallback(() => {
    fetchFavorites(token, productFavorite, setInformations);
  }, [token, productFavorite, setInformations]);

  const handleUpdateAlertPrice = React.useCallback(() => {
    updatePrice(
      token.id,
      alertPrice > 0 ? alertPrice : modalItemInformations.target_price,
      modalItemInformations,
      1,
      isEnabled ? 1 : 0
    );
    setmodalAddTargetPriceVisible((prev) => !prev);
    receiveFavoriteUpdate();
    setAlertPrice("");
    setIsChangingText(false);
  }, [token, alertPrice, modalItemInformations, receiveFavoriteUpdate]);

  const handleDeletePriceAlert = React.useCallback(() => {
    updatePrice(token.id, 0, modalItemInformations, 0, 0);
    setmodalAddTargetPriceVisible((prev) => !prev);
    receiveFavoriteUpdate();
  }, [token, modalItemInformations, receiveFavoriteUpdate]);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalAddTargetPriceVisible}
        onRequestClose={() =>
          setmodalAddTargetPriceVisible(!modalAddTargetPriceVisible)
        }
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Pressable
              style={styles.pressableAbort}
              onPress={() =>
                setmodalAddTargetPriceVisible(!modalAddTargetPriceVisible)
              }
            >
              <Text style={styles.abortText}>Annuler</Text>
            </Pressable>
            {modalItemInformations.is_alerte_active > 0 && decoded.id ? (
              <Text style={styles.modifyAlertPriceText}>
                Modifier une alerte de prix
              </Text>
            ) : (
              <Text style={styles.activateAlertPriceTextModal}>
                Activer une alerte de prix
              </Text>
            )}
            <Formik
              initialValues={{
                targetPrice: "",
              }}
              validationSchema={formSchema}
              onSubmit={() => handleUpdateAlertPrice()}
            >
              {(props) => (
                <AlertInput
                  modalItemInformations={modalItemInformations}
                  alertPrice={alertPrice}
                  changingText={changingText}
                  setIsChangingText={setIsChangingText}
                  setAlertPrice={setAlertPrice}
                  props={props}
                  isEnabled={isEnabled}
                  toggleSwitch={toggleSwitch}
                />
              )}
            </Formik>
          </View>
          {modalItemInformations.is_alerte_active > 0 && decoded.id && (
            <TouchableOpacity
              style={styles.deleteAlertButton}
              onPress={() => handleDeletePriceAlert()}
            >
              <Text style={styles.deleteAlertText}>Supprimer l'alerte</Text>
            </TouchableOpacity>
          )}
        </View>
      </Modal>
    </View>
  );
};
