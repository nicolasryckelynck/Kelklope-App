import React from "react";
import {Modal, View, Text, TouchableOpacity} from "react-native";

import {styles} from "../styles/myAccountStyle";

export const CustomModal = ({
  visible,
  setVisible,
  children,
  displayReturnButton,
}) => (
  <Modal animationType="slide" transparent={true} visible={visible}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        {displayReturnButton === 1 && (
          <TouchableOpacity
            style={styles.abordTouchable}
            onPress={() => setVisible(!visible)}
          >
            <Text style={styles.abortText}>Annuler</Text>
          </TouchableOpacity>
        )}
        {children}
      </View>
    </View>
  </Modal>
);
