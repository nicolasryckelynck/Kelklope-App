import {StyleSheet, Dimensions} from "react-native";

const {height, width} = Dimensions.get("window");

export const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    width: width * 1,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: height * 0.15,
    width: width * 0.7,
    justifyContent: "space-around",
    alignItems: "center",
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
    left: width * 0.05,
    top: height * 0.03,
    marginVertical: 10,
    paddingVertical: 13,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: "ManropeSemiBold",
    color: "#fff",
    textAlign: "center",
  },
  registerContainer: {
    alignItems: "flex-end",
    justifyContent: "center",
    paddingVertical: 16,
    flexDirection: "row",
    top: height * 0.05,
  },
  registerText: {
    color: "#738289",
    fontsize: 16,
    fontFamily: "ManropeRegular",
  },
  registerButton: {
    color: "#436B92",
    fontSize: 16,
    fontFamily: "ManropeBold",
  },
  error: {
    color: "red",
    marginVertical: 5,
  },
  body: {
    backgroundColor: "#fff",
    display: "flex",
    width: width * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  idDefine: {
    right: width * 0.02,
    marginBottom: 20,
    fontFamily: "ManropeBold",
    color: "#262626",
  },
  activeNotificationsText: {
    fontFamily: "ManropeRegular",
  },
  lineOr: {
    borderWidth: 0.1,
    borderColor: "#F0F0F0",
    height: height * 0.003,
    width: width * 0.4,
    backgroundColor: "#F0F0F0",
  },
  abortText: {
    fontFamily: "ManropeRegular",
    fontSize: 16,
    color: "#436B92",
  },
  saveText: {
    fontFamily: "ManropeBold",
    fontSize: 16,
    color: "#436B92",
    left: width * 0.12,
  },
  newAccountText: {
    fontFamily: "ManropeSemiBold",
    fontSize: 16,
    left: width * 0.04,
  },
  acceptGeneralsConditionsView: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  switchAcceptConditons: {},
  mandatoryText: {
    color: "#666666",
    top: height * 0.03,
    marginBottom: 5,
    textAlign: "center",
    fontFamily: "ManropeRegular",
    fontSize: 13,
  },
  otherConnectionOptions: {
    display: "flex",
    flexDirection: "row",
    top: height * 0.07,
  },
  orText: {
    textAlign: "center",
    bottom: 8,
    paddingHorizontal: 10,
  },
});
