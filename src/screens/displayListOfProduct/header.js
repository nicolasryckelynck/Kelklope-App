import React from "react";
import {View, TouchableOpacity, Text} from "react-native";
import {AntDesign} from "@expo/vector-icons";

import {styles} from "./styles/headerStyle";

const HeaderDisplayProduct = ({navigation}) => {
  return (
    <View style={styles.backgroundHeader}>
      <TouchableOpacity
        style={styles.goBack}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <AntDesign name="arrowleft" size={28} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.searchBarContainer}
        onPressIn={() => {
          navigation.navigate("ResultSearchBar", {
            navigation: navigation,
          });
        }}
      >
        <Text style={{left: 10}}>Rechercher ...</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderDisplayProduct;
