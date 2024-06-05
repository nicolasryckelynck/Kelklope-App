import React from "react";
import {View, Text, Dimensions} from "react-native";

const {height} = Dimensions.get("window");

import {styles} from "../styles/myAccountStyle";

const Header = ({token, decodedInformations}) => {
  return (
    <View style={styles.header}>
      <Text
        style={[
          styles.myAccountText,
          {top: !token ? height * 0.13 : height * 0.1},
        ]}
      >
        {!token
          ? "Mon Compte"
          : `Bienvenue ${
              decodedInformations.pseudo
                ? decodedInformations.pseudo
                : decodedInformations.firstname + decodedInformations.lastname
            }`}
      </Text>
    </View>
  );
};

export default Header;
