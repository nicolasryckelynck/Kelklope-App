import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#FEFEFE",
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
    margin: 10,
    borderColor: "grey",
    borderWidth: 1,
    width: width * 0.8,
    left: width * 0.13,
  },

  goBackButton: {top: height * 0.055, left: width * 0.04},
  container: {height: height * 2, backgroundColor: "#fff"},
  inputSearchBar: {
    flex: 1,
    fontSize: 16,
    padding: 10,
  },
  goBackArrow: {
    height: height * 0.2,
    width: width * 0.5,
    right: height * 0.05,
    top: height * 0.3,
  },
  resultView: {
    display: "flex",
    flexDirection: "row",
    borderWidth: 1,
    borderTopColor: "#F0F0F0",
    borderBottomColor: "#F0F0F0",
  },
  itemTitle: {
    fontSize: 17,
    paddingLeft: 10,
    paddingTop: 10,
    width: "70%",
  },
  itemImage: {
    width: 60,
    height: 60,
    justifyContent: "flex-end",
    borderRadius: 10,
    left: "50%",
  },
  noneResult: {textAlign: "center", top: height * 0.03},
  deleteEnterTextButton: {
    right: width * 0.05,
    width: width * 0.07,
    height: height * 0.03,
  },
  deleteEnterText: {fontWeight: "bold", textAlign: "center", paddingTop: 5},
  historicResearchView: {
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
  },
  historicResearchText: {color: "grey", left: 7},
  searchHistoricList: {
    margin: 5,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#666666",
  },
  searchHistoricName: {
    textAlign: "center",
    color: "#666666",
    padding: 5,
  },
  allResultText: {
    color: "#324160",
    fontFamily: "ManropeRegular",
    left: width * 0.4,
    bottom: height * 0.022,
  },
});
