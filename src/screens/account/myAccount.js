import React, {useState, useEffect, useCallback} from "react";
import {View, StatusBar} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector} from "react-redux";

import {styles} from "./styles/myAccountStyle";

import Header from "./header/headerMainMenuAccount";

import {CustomModal} from "./modal/customModal";
import ConnectionOptions from "./connectionOption";

import ModalContent from "./modal/modalConnection";

import ModifiyPassword from "./accountSetUp/modifyPassword";
import HomeScreen from "./accountSetUp/homeScreen";
import Contact from "./contact";
import NotificationsHistoric from "./notificationsHistoric";

import Parameters from "./parameters";

import {AccountMainMenuButton} from "./accountMainMenuButton";

export const MyAccount = (props) => {
  const [modal, setModal] = useState(false);
  const [modalContact, setModalContact] = useState(false);
  const [decodedInformations, setDecoded] = useState({});
  const [tokenJwt, setTokenJwt] = useState("");
  const [checkToken, setCheckToken] = useState(false);
  const token = useSelector((state) => state.user);

  const navigation = useNavigation();

  const loadProfile = useCallback(async () => {
    try {
      if (!token) {
        setTokenJwt("");
        return;
      } else {
        setDecoded(token);
        setTokenJwt(token);
      }
    } catch (error) {
      console.error(error);
    }
  }, [decodedInformations]);

  useEffect(() => {
    const intervalId = setInterval(loadProfile, 3000);
    return () => clearInterval(intervalId);
  }, [loadProfile]);

  useEffect(() => {
    if (token) {
      setDecoded(token);
      setTokenJwt(token);
    } else {
      setDecoded("");
      setTokenJwt("");
    }
  }, [token]);

  useEffect(() => {
    loadProfile();
    setCheckToken(false);
  }, [modal, checkToken]);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <View>
        <Header token={token} decodedInformations={decodedInformations} />
        <View style={styles.centeredView}>
          <CustomModal
            visible={modal}
            setVisible={setModal}
            displayReturnButton={1}
          >
            <ModalContent
              navigation={navigation}
              setModal={setModal}
              setCheckToken={setCheckToken}
            />
          </CustomModal>
          <CustomModal
            visible={modalContact}
            setVisible={setModalContact}
            displayReturnButton={0}
          >
            <Contact
              setModalContact={setModalContact}
              token={tokenJwt ? tokenJwt : ""}
            />
          </CustomModal>
        </View>
        <View style={styles.allBlock}>
          {!token && <ConnectionOptions setModal={setModal} modal={modal} />}
          <AccountMainMenuButton
            navigation={navigation}
            setModalContact={setModalContact}
            modalContact={modalContact}
            token={token}
            decodedInformations={decodedInformations}
            setCheckToken={setCheckToken}
          />
        </View>
      </View>
    </View>
  );
};

const MyAccountSetUpStack = createNativeStackNavigator();

function MyAccountSetUp() {
  return (
    <MyAccountSetUpStack.Navigator>
      <MyAccountSetUpStack.Screen
        name="MyAccount"
        component={MyAccount}
        options={{headerShown: false}}
        initialRouteName="MyAccount"
      ></MyAccountSetUpStack.Screen>
      <MyAccountSetUpStack.Screen
        name="Parameters"
        component={Parameters}
        options={{headerShown: false}}
        initialRouteName="MyAccount"
      ></MyAccountSetUpStack.Screen>
      <MyAccountSetUpStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{headerShown: false}}
      ></MyAccountSetUpStack.Screen>
      <MyAccountSetUpStack.Screen
        name="Contact"
        component={Contact}
        options={{headerShown: false}}
      ></MyAccountSetUpStack.Screen>
      <MyAccountSetUpStack.Screen
        name="NotificationsHistoric"
        component={NotificationsHistoric}
        options={{headerShown: false}}
      ></MyAccountSetUpStack.Screen>
      <MyAccountSetUpStack.Screen
        name="ModifiyPassword"
        component={ModifiyPassword}
        options={{headerShown: false}}
      ></MyAccountSetUpStack.Screen>
    </MyAccountSetUpStack.Navigator>
  );
}

export default MyAccountSetUp;
