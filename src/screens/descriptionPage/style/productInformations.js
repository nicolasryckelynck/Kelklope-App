import {StyleSheet, Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({
  imageProduct: {
    alignSelf: "center",
    width: width * 0.45,
    height: height * 0.2,
    bottom: height * 0.05,
  },
  category: {
    fontSize: 15,
    color: "#436B92",
    bottom: height * 0.03,
    fontFamily: "ManropeSemiBold",
  },
  title: {
    fontSize: 26,
    textAlign: "center",
    fontFamily: "ManropeBold",
    width: width * 0.85,
    bottom: height * 0.02,
  },
  price: {
    color: "#ff7b0d",
    fontSize: 30,
    fontFamily: "ManropeBold",
    paddingLeft: 5,
    bottom: 5,
  },
  productInformationsStyle: {
    alignItems: "center",
    backgroundColor: "#fff",
    width: width * 1.05,
    right: width * 0.03,
    height: "auto",
    padding: 20,
  },
  setAlertOrFavorite: {
    display: "flex",
    flexDirection: "column",
    left: "37%",
  },
  notifications: {
    top: height * 0.095,
    left: width * 0.01,
  },
  favorite: {
    top: height * 0.15,
    left: width * 0.015,
  },
  minPrice: {
    display: "flex",
    flexDirection: "row",
    bottom: height * 0.01,
  },
  fromText: {color: "grey", top: "2%", fontFamily: "ManropeRegular"},
});
