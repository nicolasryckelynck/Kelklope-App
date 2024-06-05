import {StyleSheet, Dimensions} from "react-native";

const {width} = Dimensions.get("window");

const height = width * 0.4;

export const styles = StyleSheet.create({
  descriptionPage: {
    paddingLeft: "2%",
    paddingRight: "2%",
  },
  input: {
    width: width * 0.55,
    height: height * 0.4,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    borderColor: "#ff7c00",
    padding: 10,
    fontSize: 35,
    marginVertical: 10,
    left: width * 0.1,
    top: height * 0.03,
    color: "#436B92",
    textAlign: "center",
    fontFamily: "ManropeRegular",
  },
  alertButton: {
    borderWidth: 0.75,
    borderColor: "grey",
    width: "30%",
    backgroundColor: "#fff",
    color: "black",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F0F0F0",
    width: "85%",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#ff7b0d",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    right: "23%",
  },
  inputSearchBar: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  bestPriceTextView: {
    borderBottomRightRadius: 7,
    borderTopLeftRadius: 15,
    borderColor: "#ff8D26",
    borderWidth: 1,
    width: width * 0.3,
    height: height * 0.15,
    backgroundColor: "#ff8D26",
    bottom: height * 0.009,
    right: width * 0.005,
    marginBottom: -15,
  },
  animatedViewText: {
    height: "auto",
    width: width * 0.81,
    left: width * 0.065,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: "#fff",
    borderWidth: 1,
    bottom: height * 0.3,
    zIndex: 1,
  },
  activeAlertPriceText: {
    fontSize: 20,
    fontFamily: "ManropeBold",
    textAlign: "center",
  },
  abortText: {
    fontFamily: "ManropeRegular",
    fontSize: 15,
    color: "#436B92",
  },
  pressableAbortText: {right: width * 0.33, bottom: height * 0.1},
  viewModalContent: {
    backgroundColor: "#fff",
    borderRadius: 10,
    top: height * 0.1,
    width: width * 0.8,
  },
  euroSignText: {
    fontSize: 35,
    color: "#436B92",
    left: width * 0.55,
    bottom: height * 0.38,
  },
  economizeText: {
    left: width * 0.35,
    bottom: height * 0.25,
    color: "#666666",
    fontFamily: "ManropeRegular",
  },
  pressableSave: {
    bottom: height * 1.41,
    left: width * 0.54,
  },
  saveText: {
    fontFamily: "ManropeBold",
    fontSize: 15,
    color: "#436B92",
  },
  activeEmailAlertView: {
    display: "flex",
    flexDirection: "row",
    bottom: height * 0.02,
  },
  receiveEmailAlertText: {
    color: "#262626",
    fontFamily: "ManropeRegular",
    left: width * 0.05,
  },
  switchEmailActive: {
    left: width * 0.13,
    bottom: height * 0.05,
  },
});
