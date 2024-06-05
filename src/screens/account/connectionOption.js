import React from "react";
import {View, Text, TouchableOpacity, Dimensions} from "react-native";

import Facebook from "../../connectionConfiguration/facebook";
import Apple from "../../connectionConfiguration/appleSetUp";
import Google from "../../connectionConfiguration/googleSetUp";

import {styles} from "./styles/myAccountStyle";

const {width, height} = Dimensions.get("window");

const ConnectionOptions = ({setModal, modal}) => (
  <View style={{height: height * 0.15}}>
    <TouchableOpacity
      style={styles.inscriptionButton}
      onPress={() => {
        setModal(!modal);
      }}
    >
      <Text style={styles.inscriptionText}>Se connecter / S'inscrire</Text>
    </TouchableOpacity>
    <View style={styles.optionsConnectionButton}>
      <Facebook largeur={width * 0.92} />
    </View>
    <View style={styles.middleLine} />
  </View>
);

export default ConnectionOptions;
