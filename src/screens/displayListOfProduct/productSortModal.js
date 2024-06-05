import React, {useCallback} from "react";
import {View, Modal, Alert, Text, TouchableOpacity} from "react-native";
import {styles} from "./styles/getAllProductStyles";

const SORT_OPTIONS = [
  {label: "Prix croissant", id: 1},
  {label: "Prix décroissant", id: 2},
  {label: "Pertinence", id: 3},
];

const ProductSortModal = ({
  modalVisibleFilter,
  setModalFilterVisible,
  trie,
  setTrie,
  handleSortButtonPress,
  setOffset,
}) => {
  const handleSortOptionPress = useCallback(
    (sortId) => {
      setTrie(trie === sortId ? 0 : sortId);
    },
    [trie, setTrie]
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisibleFilter}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalFilterVisible(!modalVisibleFilter);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalViewFilter}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => {
                setModalFilterVisible(false);
              }}
            >
              <Text style={styles.cancelButtonText}>Annuler</Text>
            </TouchableOpacity>
            <View style={styles.sortContainer}>
              {SORT_OPTIONS.map((sort) => (
                <TouchableOpacity
                  key={sort.id}
                  onPress={() => handleSortOptionPress(sort.id)}
                  style={[
                    styles.touchableSort,
                    {
                      borderColor: trie == sort.id ? "#436B92" : "lightgray",
                    },
                  ]}
                >
                  <Text style={styles.sortLabel}>{sort.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ProductSortModal;
