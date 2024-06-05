import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    top: height * 0.03,
  },
  input: {
    width: 350,
    backgroundColor: "#F9F9F9",
    borderRadius: 10,
    borderColor: "#F9F9F9",
    padding: 16,
    fontSize: 16,
  },
  button: {
    width: 300,
    backgroundColor: "#ff9e1f",
    borderRadius: 10,
    marginVertical: 10,
    paddingVertical: 13,
    left: width * 0.05,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center",
  },
  registerContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
  },
  registerText: {
    color: "#738289",
    fontsize: 16,
  },
  registerButton: {
    color: "#738289",
    fontSize: 16,
    fontWeight: "bold",
  },
  error: {
    color: "red",
    bottom: height * 0.03,
    marginVertical: 5,
  },
  createNewAccount: {
    top: height * 0.034,
    borderColor: "#F9F9F9",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    height: height * 0.06,
  },
  createNewAccountText: {
    paddingLeft: 10,
    paddingVertical: 15,
    fontFamily: "ManropeRegular",
  },
  visibilityButton: {left: width * 0.7, bottom: height * 0.05},
  entypoButton: {left: width * 0.75, bottom: height * 0.04},
});
