import {StyleSheet, Dimensions, Platform} from "react-native";

const {width, height} = Dimensions.get("window");

export const styles = StyleSheet.create({
  MainContainer: {
    paddingTop: Platform.OS === "ios" ? 20 : 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#436B92",
    height: height * 0.7,
  },
  container: {
    display: "flex",
    flexDirection: "column",
    width: width * 0.8,
    bottom: height * 1.2,
  },
  whiteCircleView: {
    width: width * 0.75,
    height: height * 2.5,
    borderRadius: 150,
    backgroundColor: "#F0F0F0",
    transform: [{scaleX: 1.7}],
  },
  orangeCircleView: {
    width: width * 0.75,
    height: height * 0.6,
    bottom: height * 2.4,
    borderRadius: 150,
    backgroundColor: "#ff8D26",
    transform: [{scaleX: 1.7}],
  },
  logoEinstein: {
    width: width * 0.5,
    height: height * 0.35,
    left: width * 0.18,
    bottom: height * 0.01,
  },
  titleCreateAccount: {
    fontFamily: "ManropeBold",
    fontSize: 20,
    marginBottom: 15,
  },
  presentation: {
    fontFamily: "ManropeRegular",
    fontSize: 14,
  },

  inscriptionButton: {
    marginTop: 20,
    width: width * 0.8,
    height: height * 0.055,
    color: "#436B92",
    borderWidth: 1,
    backgroundColor: "#436B92",
    borderColor: "#436B92",
    borderRadius: 6,
  },
  inscriptionText: {
    textAlign: "center",
    paddingVertical: height * 0.014,
    color: "#FFF",
    fontFamily: "ManropeSemiBold",
    fontSize: 17,
  },
  connectOrNot: {
    top: height * 0.075,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  connectionText: {
    color: "#436B92",
    right: width * 0.1,
    bottom: height * 0.03,
    fontFamily: "ManropeRegular",
    fontSize: 15,
  },
  skipText: {
    color: "#436B92",
    left: width * 0.1,
    bottom: height * 0.03,
    fontFamily: "ManropeRegular",
    fontSize: 15,
  },
});
