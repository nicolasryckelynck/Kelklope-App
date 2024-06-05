import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  alignItem: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  textAboveInput: {
    fontFamily: "ManropeSemiBold",
    bottom: 10,
    left: 10,
    marginTop: 2,
    color: "#262626",
  },
  inputText: {
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "90%",
    height: "11%",
    left: width * 0.05,
  },
  error: {
    color: "red",
    top: height * 0.02,
    left: width * 0.04,
  },
  validate: {
    width: "60%",
    height: height * 0.05,
    backgroundColor: "#ff7c00",
    borderRadius: 10,
    paddingVertical: 4,
    left: "20%",
    top: height * 0.1,
    justifyContent: "center",
  },
  textButton: {
    fontWeight: "500",
    color: "#ffffff",
    fontSize: 16,
    paddingVertical: 4,
    textAlign: "center",
  },
  visibilityButton: {
    right: width * 0.06,
  },
  inputPasswordContainer: {flexDirection: "row", margin: 10},
});
