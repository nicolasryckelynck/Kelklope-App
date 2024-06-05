import React from "react";
import {View, Text, TextInput} from "react-native";

import {styles} from "../styles/getAllProductStyles";

const PriceInput = ({multiSliderValue}) => {
  return (
    <View style={styles.priceInput}>
      <TextInput
        onChangeText={(text) => (multiSliderValue[0] = text)}
        placeholder="Prix"
        style={styles.inputText1}
      >
        <Text style={{color: "grey"}}>{multiSliderValue[0]}</Text>
      </TextInput>
      <Text style={styles.AndWord}>et</Text>
      <TextInput
        onChangeText={(text) => (multiSliderValue[1] = text)}
        placeholder="Prix"
        style={styles.inputText2}
      >
        <Text style={{color: "grey"}}>{multiSliderValue[1]}</Text>
      </TextInput>
    </View>
  );
};

export default PriceInput;
