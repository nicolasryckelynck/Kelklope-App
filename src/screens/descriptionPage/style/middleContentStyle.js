import {StyleSheet, Dimensions} from "react-native";

const {width} = Dimensions.get("window");
const height = width * 0.4;

export const styles = StyleSheet.create({
  descriptionImage: {
    height: height * 0.17,
    width: width * 0.06,
    left: width * 0.19,
    top: height * 0.02,
  },
  descriptionText: {
    left: width * 0.09,
    top: height * 0.01,
    color: "#262626",
    fontSize: 13,
    fontFamily: "ManropeRegular",
  },
  middleView: {
    display: "flex",
    flexDirection: "row",
    borderRadius: 40,
    borderColor: "#fff",
    borderWidth: 5,
    backgroundColor: "#F0F0F0",
    height: height * 0.4,
    width: width * 0.85,
    zIndex: 2,
    bottom: 30,
    left: width * 0.05,
  },
  ovaleMiddle: {
    borderWidth: 0.5,
    borderColor: "#A1A1A1",
    borderRadius: 10,
    height: height * 0.25,
    top: height * 0.05,
    left: width * 0.17,
  },
  starRating: {right: width * 0.03, top: height * 0.04},
  gradeText: {
    left: width * 0.04,
    fontSize: 12,
    fontFamily: "ManropeRegular",
  },
  noneGrade: {left: width * 0.04},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F0F0F0",
    width: "90%",
    height: height * 0.8,
    borderRadius: 30,
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
  pressableAbortText: {right: width * 0.33, bottom: height * 0.1},
  abortText: {
    fontFamily: "ManropeRegular",
    fontSize: 15,
    color: "#436B92",
  },
  setOpinionText: {
    fontSize: 20,
    fontFamily: "ManropeBold",
    textAlign: "center",
    bottom: height * 0.26,
    left: width * 0.03,
  },
});
