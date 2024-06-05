import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  swipedRow: {
    borderRadius: 10,
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    paddingLeft: 5,
    backgroundColor: "#BBB6B4",
    margin: 20,
    minHeight: 50,
  },
  swipedConfirmationContainer: {
    flex: 1,
  },
  deleteConfirmationText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    textAlign: "center",
  },
  deleteButton: {
    borderRadius: 10,
    backgroundColor: "#F24333",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
    width: "40%",
  },
  deleteButtonText: {
    color: "#fcfcfc",
    fontWeight: "bold",
    padding: 3,
    textAlign: "center",
  },
});
