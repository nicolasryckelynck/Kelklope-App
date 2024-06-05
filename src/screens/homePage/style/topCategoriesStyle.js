import {StyleSheet, Dimensions} from "react-native";

const {width} = Dimensions.get("window");
const height = width * 0.4;

export const styles = StyleSheet.create({
  topCategoriesContainer: {
    height: height * 1.5,
    bottom: height * 2.8,
    marginHorizontal: 10,
  },
  categories: {
    marginLeft: 15,
    height: "70%",
  },
  touchableOpacityImage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 110,
    width: 110,
    borderWidth: 0.3,
    borderRadius: (height * 0.8) / 2,
    borderColor: "#A1A1A1",
  },
  imageTopCategories: {
    width: 70,
    height: 70,
  },
  topCategoriesText: {
    top: height * 0.2,
    fontSize: 22,
    left: width * 0.05,
    zIndex: 1,
    fontWeight: "bold",
    color: "#436B92",
  },
  itemLabel: {
    top: height * 0.05,
    textAlign: "center",
  },
  flatlistItem: {
    top: height * 0.4,
    right: width * 0.018,
  },
});
