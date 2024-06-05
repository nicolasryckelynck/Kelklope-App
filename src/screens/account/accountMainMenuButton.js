import React from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles/myAccountStyle";
import {MaterialCommunityIcons, Entypo, Ionicons} from "@expo/vector-icons";

const Button = ({onPress, children}) => (
  <TouchableOpacity style={styles.underLineButton} onPress={onPress}>
    <View style={styles.directionRow}>{children}</View>
  </TouchableOpacity>
);

export const AccountMainMenuButton = ({
  navigation,
  setModalContact,
  modalContact,
  token,
  decodedInformations,
  setCheckToken,
}) => {
  const navigate = (screen, params) => () =>
    navigation.navigate(screen, params);
  const toggleModalContact = () => setModalContact(!modalContact);
  return (
    <View style={styles.AccountMainMenuContainer}>
      {token && (
        // ACCOUNT MANAGEMENT BUTTON
        <Button onPress={navigate("HomeScreen", {setCheckToken})}>
          <MaterialCommunityIcons
            name="account-circle-outline"
            size={30}
            color="black"
            style={styles.icon}
          />
          <Text style={styles.underLineText}>Gestion compte</Text>
          <Entypo
            name="chevron-thin-right"
            size={24}
            color="#9999A1"
            style={styles.arrowIcon}
          />
        </Button>
      )}
      {/* NOTIFICATIONS BUTTON */}
      <Button onPress={navigate("NotificationsHistoric")}>
        <Ionicons
          name="notifications-sharp"
          size={30}
          color="#262626"
          style={styles.icon}
        />
        <Text style={styles.underLineText}>Notifications</Text>
        <Entypo
          name="chevron-thin-right"
          size={24}
          color="#9999A1"
          style={styles.arrowIcon}
        />
      </Button>
      {/* PARAMETERS BUTTON */}
      <Button onPress={navigate("Parameters", {decodedInformations})}>
        <Ionicons
          name="settings-outline"
          size={30}
          color="#262626"
          style={styles.icon}
        />
        <Text style={styles.underLineText}>Paramètres</Text>
        <Entypo
          name="chevron-thin-right"
          size={24}
          color="#9999A1"
          style={styles.arrowIcon}
        />
      </Button>
      {/* CONTACT BUTTON */}
      {/* <Button onPress={toggleModalContact}>
        <MaterialCommunityIcons
          name="message-text-outline"
          size={30}
          color="#262626"
          style={styles.icon}
        />
        <Text style={styles.underLineText}>Contact</Text>
        <Entypo
          name="chevron-thin-right"
          size={24}
          color="#9999A1"
          style={styles.arrowIcon}
        />
      </Button> */}
      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.confidentialityButton}>
          <Text style={styles.bottomText}>Politique de confidentialité</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.legalMentions}>
          <Text style={styles.bottomText}>Mentions légales</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
