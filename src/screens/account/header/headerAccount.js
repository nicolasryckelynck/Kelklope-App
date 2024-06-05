import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const {height, width} = Dimensions.get("window");

const Header = ({navigation, title}) => {
  return (
    <View>
      <View style={styles.header}>
        <TouchableOpacity
          style={{top: height * 0.09, left: width * 0.06}}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={30} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.myAccountText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: height * 0.15,
    width: width * 1,
    backgroundColor: "#436B92",
    borderColor: "#436B92",
    borderWidth: 1,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  myAccountText: {
    fontFamily: "ManropeBold",
    color: "#fff",
    fontSize: 28,
    left: width * 0.2,
    top: height * 0.045,
  },
});

export default Header;
