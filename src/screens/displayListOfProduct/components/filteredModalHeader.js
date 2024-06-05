import React from "react";
import {View, Text, Pressable, Button} from "react-native";

import {styles} from "../styles/getAllProductStyles";

const FilteredModalHeader = ({
  setModalVisible,
  modalVisible,
  selectedBrands,
  width,
}) => {
  return (
    <View style={styles.headerFilterModal}>
      <Text style={styles.filterTitle}>Filtrer</Text>
      <Text style={styles.cptSelected}>{selectedBrands.length}</Text>
      <Pressable style={{left: width * 0.6}}>
        <Button
          onPress={() => setModalVisible(!modalVisible)}
          title="X"
          color={"#ff7b0d"}
        />
      </Pressable>
    </View>
  );
};

export default FilteredModalHeader;
