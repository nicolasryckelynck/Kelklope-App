import {StyleSheet, Dimensions} from "react-native";

const {width} = Dimensions.get("window");
const height = width * 0.4;

export const styles = StyleSheet.create({
  listItemStyles: {
    left: "1.5%",
    height: height * 1.4,
    marginBottom: 50,
    width: width * 0.4,
    top: height * 0.1,
    borderColor: "#A1A1A1",
    borderRadius: 20,
    borderWidth: 0.4,
    marginRight: 10,
    backgroundColor: "#fff",
    shadowColor: "black",
    shadowOffset: {
      width: width * 0.003,
      height: height * 0.002,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  imageTouchable: {
    top: "2%",
    marginRight: "7%",
    height: "7%",
  },
  imageProduct: {
    width: "95%",
    height: height * 0.9,
    left: 10,
  },
  informationsProduct: {
    top: "70%",
    display: "flex",
    flexDirection: "column",
    left: "10%",
  },
  allLinePriceProduct: {
    display: "flex",
    flexDirection: "row",
    top: "15%",
  },
  textPrice: {
    bottom: "4%",
    color: "orange",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  itemTitle: {
    fontWeight: "500",
    bottom: "20%",
    height: height * 0.1,
  },
});
