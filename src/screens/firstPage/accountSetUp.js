import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Dimensions,
  Modal,
  Animated,
  Pressable,
  StatusBar,
} from "react-native";
import {useFonts} from "expo-font";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";

import {useAnimation} from "./animation/animation";
import {styles} from "./style/accountSetUpStyle";
import loginFromAccountSetUp from "../account/accountSetUp/loginScreen";
import Register from "../account/accountSetUp/registerScreen";
import BottomTabNavigator from "../../navigation/bottomTabNavigator";
import ConnectToKelklopeProposition from "./ConnectToKelklopeProposition";
import LoginScreenFromStart from "./loginFromStart";

// IMAGES IMPORT
const LEFT_ARROW = require("../../../assets/images/fleche-gauche.jpg");
const KELKLOPE_LOGO = require("../../../assets/images/kelklope_logo2.jpg");
const EINSTEIN = require("../../../assets/images/logo.jpg");
const RIGHT_ARROW = require("../../../assets/images/fleche-droite.jpg");

const {height, width} = Dimensions.get("window");

const AccountSetUpNav = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    optionsConnection,
    discoverButtonMovement,
    YRightArrow,
    YLeftArrow,
    YLogo,
    YEinstein,
    Y,
    YWhite,
    YBlue,
    handleDiscoverPress,
  } = useAnimation();

  const [fontsLoaded] = useFonts({
    ManropeRegular: require("../../../assets/Manrope-Regular.ttf"),
    ManropeBold: require("../../../assets/Manrope-Bold.ttf"),
    ManropeSemiBold: require("../../../assets/Manrope-SemiBold.ttf"),
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.MainContainer}>
      <Animated.View
        style={[
          styles.whiteCircleView,
          {transform: [{scaleX: 1.7}, {translateY: YWhite}]},
        ]}
      />
      <Animated.View
        style={[
          styles.orangeCircleView,
          {transform: [{scaleX: 1.7}, {translateY: Y}]},
        ]}
      />
      <Animated.View
        style={[
          styles.blueCircleView,
          {transform: [{scaleX: 1.7}, {translateY: YBlue}]},
        ]}
      />
      <Animated.Image
        style={[styles.leftArrow, {transform: [{translateY: YLeftArrow}]}]}
        source={LEFT_ARROW}
      />
      <Animated.Image
        style={[styles.kelklopeLogo, {transform: [{translateY: YLogo}]}]}
        source={KELKLOPE_LOGO}
      />
      <Animated.Image
        style={[styles.einsteinImage, {transform: [{translateY: YEinstein}]}]}
        source={EINSTEIN}
      />
      <Animated.Image
        style={[styles.rightArrow, {transform: [{translateY: YRightArrow}]}]}
        source={RIGHT_ARROW}
      />

      <View style={styles.secondPartView}>
        <Animated.View
          style={{
            backgroundColor: "red",
            top: height * 1.05,
            zIndex: 8,
            left: width * 0.01,
            transform: [{translateY: optionsConnection}],
          }}
        >
          <ConnectToKelklopeProposition navigation={navigation} />
        </Animated.View>
        <Text style={styles.slogan}>Vapez malin !</Text>
        <Text style={styles.presentationText}>
          Comparez les prix de vos cigarettes électroniques, e-liquides, et
          puffs préférés et faites des économies !
        </Text>
        <Animated.View
          style={{transform: [{translateY: discoverButtonMovement}]}}
        >
          <Pressable
            style={styles.discoverButton}
            onPress={handleDiscoverPress}
          >
            <Text style={styles.discoverText}>Découvrir</Text>
          </Pressable>
        </Animated.View>
        <Animated.View
          style={[
            styles.OtherModules,
            {transform: [{translateY: YRightArrow}]},
          ]}
        ></Animated.View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          ></Modal>
        </View>
      </View>
    </View>
  );
};

const AccountSetUpStack = createNativeStackNavigator();

function AccountSetUp() {
  return (
    <NavigationContainer>
      <StatusBar barStyle={"light-content"} />
      <AccountSetUpStack.Navigator>
        <AccountSetUpStack.Screen
          name="AccountSetUpNav"
          component={AccountSetUpNav}
          options={{headerShown: false}}
          initialRouteName="AccountSetUpNav"
        ></AccountSetUpStack.Screen>
        <AccountSetUpStack.Screen
          name="registerFromAccountSetUp"
          component={Register}
          options={{headerShown: false}}
        ></AccountSetUpStack.Screen>
        <AccountSetUpStack.Screen
          name="Login"
          component={loginFromAccountSetUp}
          options={{headerShown: false}}
        ></AccountSetUpStack.Screen>
        <AccountSetUpStack.Screen
          name="firstPage"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        ></AccountSetUpStack.Screen>
        <AccountSetUpStack.Screen
          name="LoginFromStart"
          component={LoginScreenFromStart}
          options={{headerShown: false}}
        ></AccountSetUpStack.Screen>
      </AccountSetUpStack.Navigator>
    </NavigationContainer>
  );
}

export default AccountSetUp;
