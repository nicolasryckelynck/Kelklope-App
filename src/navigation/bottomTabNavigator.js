import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import React, {useEffect, useRef} from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon, {Icons} from "../Icon";

const {height, width} = Dimensions.get("window");

import FirstPageScreen from "../screens/homePage/firstPage";
import LoginScreen from "../screens/account/myAccount";
import FavoriteScreen from "../screens/favoritePage/favorite";

const TabArr = [
  {
    route: "Accueil",
    label: "Accueil",
    component: FirstPageScreen,
  },
  {
    route: "Ma sélection",
    label: "Ma sélection",
    component: FavoriteScreen,
  },
  {
    route: "Mon compte",
    label: "Mon compte",
    component: LoginScreen,
  },
];

const Tab = createBottomTabNavigator();

const animate1 = {
  0: {scale: 0.5, translateY: height * -0.003},
  0.92: {translateY: height * -0.003},
  1: {scale: 1.2, translateY: height * -0.003},
};
const animate2 = {
  0: {scale: 1.2, translateY: height * 0.005},
  1: {scale: 1, translateY: height * 0.005},
};

const circle1 = {
  0: {scale: 0},
  0.3: {scale: 0.3},
  0.5: {scale: 0.7},
  0.8: {scale: 0.9},
  1: {scale: 1},
};
const circle2 = {0: {scale: 1}, 1: {scale: 0}};

const TabButton = (props) => {
  const {item, onPress, accessibilityState} = props;
  const focused = accessibilityState.selected;
  const viewRef = useRef(null);
  const circleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({scale: 1});
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({scale: 1});
    }
  }, [focused]);

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={600} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          {item.label === "Accueil" &&
            (focused ? (
              <Image
                source={require("../../assets/images/accueilWhite.jpg")}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            ) : (
              <Image
                source={require("../../assets/images/accueil.jpg")}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            ))}
          {item.label === "Ma sélection" &&
            (focused ? (
              <Image
                source={require("../../assets/images/coeurWhite.jpg")}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            ) : (
              <Image
                source={require("../../assets/images/coeur.jpg")}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            ))}
          {item.label === "Mon compte" &&
            (focused ? (
              <Image
                source={require("../../assets/images/monCompteWhite.jpg")}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            ) : (
              <Image
                source={require("../../assets/images/monCompte.jpg")}
                resizeMode="contain"
                style={{width: 25, height: 25}}
              />
            ))}
        </View>
        <Animatable.Text
          ref={textRef}
          style={[
            styles.text,
            focused
              ? {color: "#436B92", top: 2}
              : {color: "#262626", bottom: 5},
          ]}
        >
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  );
};

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tabBar: {
    height: height * 0.07,
    position: "absolute",
    bottom: height * 0.02,
    right: width * 0.04,
    left: width * 0.04,
    borderRadius: 25,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  btn: {
    width: width * 0.1,
    height: height * 0.046,
    borderRadius: 100,
    borderColor: "#fff",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#436B92",
    borderColor: "#436B92",
    borderRadius: 120,
  },
  text: {
    fontSize: 10,
    textAlign: "center",
  },
});
