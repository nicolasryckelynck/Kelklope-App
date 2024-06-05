import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    padding: 40,
  },
  title: {
    fontFamily: "ManropeBold",
    fontSize: 22,
    bottom: "90%",
    textAlign: "center",
    color: "#262626",
  },
  mandatoryFields: {
    display: "flex",
    flexDirection: "row",
    bottom: "5%",
  },
  mandatoryText: {
    fontFamily: "ManropeRegular",
  },
  alignItem: {
    display: "flex",
    flexDirection: "row",
    marginTop: 15,
  },
  validate: {
    width: "80%",
    height: height * 0.05,
    backgroundColor: "#ff7c00",
    borderRadius: 10,
    paddingVertical: 4,
    left: "13%",
    bottom: height * 0.19,
  },
  logout: {
    bottom: height * 0.17,
    width: "35%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CB0000",
    height: height * 0.04,
    left: "33%",
  },
  textButton: {
    fontWeight: "500",
    color: "#fff",
    paddingVertical: 4,
    textAlign: "center",
  },
  error: {
    color: "red",
  },
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
  goBackArrow: {
    height: height * 0.05,
    width: width * 0.12,
    left: width * 0.05,
    top: height * 0.1,
  },
  inputText: {
    borderRadius: 10,
    borderColor: "#fff",
    borderWidth: 1,
    backgroundColor: "#fff",
    width: "100%",
    height: height * 0.05,
    fontFamily: "ManropeRegular",
    fontSize: 14,
    marginTop: 10,
  },
  textAboveInput: {
    fontFamily: "ManropeSemiBold",
    left: 10,
    marginTop: 2,
    color: "#262626",
    fontSize: 15,
  },
  modifyPasswordButton: {
    bottom: height * 0.05,
    width: width * 0.8,
    height: height * 0.055,
    borderRadius: 8,
  },
  modifyPasswordText: {
    paddingVertical: height * 0.014,
    color: "#262626",
    fontFamily: "ManropeRegular",
    fontSize: 15,
    left: width * 0.02,
    top: height * 0.001,
    textDecorationLine: "underline",
  },
});
