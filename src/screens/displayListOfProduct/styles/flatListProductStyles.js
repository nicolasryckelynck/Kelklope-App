import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  Products: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 10,
    left: "5%",
    height: 120,
    width: "90%",
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  imageProduct: {
    width: width * 0.3,
    height: height * 0.13,
    top: "7%",
    left: "3%",
  },
  productInformations: {
    display: "flex",
    flexDirection: "row",
    bottom: height * 0.03,
  },
  productInfos: {
    display: "flex",
    flexDirection: "column",
    left: "40%",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ff9e1f",
    bottom: "1.5%",
  },
  titre: {
    height: height * 0.05,
    width: width * 0.5,
    fontSize: 15,
    bottom: height * 0.08,
  },
});
