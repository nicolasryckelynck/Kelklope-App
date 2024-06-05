import {Dimensions} from "react-native";
import Toast from "react-native-root-toast";

const {height} = Dimensions.get("window");

export const CustomToast = ({message, backgroundColor}) => {
  Toast.show(message, {
    duration: Toast.durations.SHORT,
    position: Toast.positions.BOTTOM,
    shadow: true,
    animation: true,
    hideOnPress: true,
    delay: 10,
    opacity: 1,
    color: "#fff",
    backgroundColor: backgroundColor,
    containerStyle: {
      width: "90%",
      bottom: height * 0.7,
    },
  });
};
