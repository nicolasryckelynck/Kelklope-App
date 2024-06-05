import React from "react";
import {View, Text, Dimensions, TouchableOpacity} from "react-native";
import {useFonts} from "expo-font";

import {styles} from "./style/connectToKelklopePropositionStyle.js";

const ConnectToKelklopeProposition = ({navigation}) => {
  const fontRegular = require("../../../assets/Manrope-Regular.ttf");
  const fontBold = require("../../../assets/Manrope-Bold.ttf");

  const [fontsLoaded] = useFonts({
    ManropeRegular: fontRegular,
    ManropeBold: fontBold,
  });

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.MainContainer}>
      <View style={styles.container}>
        <Text style={styles.titleCreateAccount}>Créer un compte Kelklope</Text>
        <Text style={styles.presentation}>
          Avec un compte Kelklope, profitez entièrement de notre outil pour
          comparer les prix sur tout vos appareils, partout, tout le temps.
        </Text>
        <TouchableOpacity
          style={styles.inscriptionButton}
          onPress={() => navigation.navigate("registerFromAccountSetUp")}
        >
          <Text style={styles.inscriptionText}>S'inscrire</Text>
        </TouchableOpacity>
        <View style={styles.connectOrNot}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginFromStart")}
          >
            <Text style={styles.connectionText}>Se connecter</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("firstPage")}>
            <Text style={styles.skipText}>Passer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ConnectToKelklopeProposition;
