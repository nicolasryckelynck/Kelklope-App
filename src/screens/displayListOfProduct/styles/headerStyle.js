import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  backgroundHeader: {
    width: width * 1,
    height: height * 0.15,
    borderRadius: 2,
    borderWidth: 1,
    borderColor: "#436B92",
    backgroundColor: "#436B92",
    zIndex: 6,
  },
  searchBarContainer: {
    zIndex: 2,
    backgroundColor: "#F0F0F0",
    borderRadius: 20,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#F0F0F0",
    borderWidth: 1,
    top: height * 0.025,
    left: width * 0.2,
    width: width * 0.75,
    height: height * 0.06,
  },
  kelklopeLogo: {
    width: width * 0.45,
    height: height * 0.05,
    left: width * 0.25,
    top: height * 0.06,
  },
  goBack: {
    top: height * 0.09,
    left: width * 0.05,
    width: width * 0.1,
    height: height * 0.05,
  },
});
