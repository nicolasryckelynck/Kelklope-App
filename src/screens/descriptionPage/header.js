import React from "react";
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";

const {height, width} = Dimensions.get("window");

const HeaderDescription = ({navigation, favorite}) => {
  return (
    <View style={styles.header}>
      <Image
        style={styles.kelklopeLogo}
        source={require("../../../assets/images/kelklope_logo2.jpg")}
      />
      <TouchableOpacity
        style={{right: width * 0.43, top: height * 0.085}}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={30} color="#fff" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.searchBarContainer}
        onPressIn={() => {
          navigation.navigate("ResultSearchBar", {
            navigation: navigation,
          });
        }}
      >
        <Text style={{left: 10}}>Rechercher ...</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: "#436B92",
    width: width * 1.18,
    right: "10%",
    height: height * 0.2,
    zIndex: 1,
    shadowColor: "black",
    shadowOffset: {
      width: width * 0.003,
      height: height * 0.01,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  searchBarContainer: {
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F0F0F0",
    borderWidth: 1,
    top: height * 0.03,
    width: width * 0.85,
    height: height * 0.07,
    left: width * 0.07,
  },
  kelklopeLogo: {
    width: width * 0.5,
    height: height * 0.055,
    top: height * 0.05,
  },
});

export default HeaderDescription;
