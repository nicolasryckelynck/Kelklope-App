// ProductFilterModal.js
import React from "react";
import {
  View,
  Modal,
  Alert,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";

import {styles} from "./styles/getAllProductStyles";

import FilteredModalHeader from "./components/filteredModalHeader";

import PriceInput from "./components/priceInput";
import BrandSelection from "./components/brandSelection";

const {width} = Dimensions.get("window");

const ProductFilterModal = ({
  modalVisible,
  setModalVisible,
  selectedBrands,
  multiSliderValue,
  trie,
  setTrie,
  brands,
  totalNameBrand,
  setSelectedBrands,
  setTotalNameBrand,
  hide,
  setHide,
  eliquideValues,
  handelEndReached,
  setOffset,
  setinformationsBySort,
}) => {
  const handleSortButtonPress = () => {
    handelEndReached();
    setOffset(0);
    setModalVisible(!modalVisible);
    setinformationsBySort([]);
  };

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ScrollView style={styles.filterView}>
              <FilteredModalHeader
                setModalVisible={setModalVisible}
                modalVisible={modalVisible}
                selectedBrands={selectedBrands}
                width={width}
              />
              <Text style={styles.titlePrice}>Prix</Text>
              <PriceInput multiSliderValue={multiSliderValue} />
              <View style={{top: 50}}>
                <View style={{top: 25, left: 30}}>
                  <View style={styles.viewBrand}>
                    <Text style={styles.brandText}>Marques</Text>
                  </View>
                  {!hide && (
                    <BrandSelection
                      brands={brands}
                      selectedBrands={selectedBrands}
                      totalNameBrand={totalNameBrand}
                      setSelectedBrands={setSelectedBrands}
                      setTotalNameBrand={setTotalNameBrand}
                      hide={hide}
                      setHide={setHide}
                    />
                  )}
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
        <TouchableOpacity
          onPress={handleSortButtonPress}
          style={styles.applicate}
        >
          <Text style={styles.applicateFilter}>Appliquer</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default ProductFilterModal;
