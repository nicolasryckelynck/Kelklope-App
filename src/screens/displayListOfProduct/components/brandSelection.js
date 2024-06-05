import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from "react-native";

import GetBrandName from "../action/getBrandName";

import {styles} from "../styles/getAllProductStyles";

const {height} = Dimensions.get("window");

const getBrandStyle = (brandName, selectedBrands) => {
  const isSelected = selectedBrands.includes(brandName);
  return {
    marginTop: 10,
    marginRight: 5,
    top: "3%",
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: isSelected ? "#436B92" : "#EEEEEE",
    backgroundColor: isSelected ? "#436B92" : "#EEEEEE",
  };
};

const BrandSelection = ({
  brands,
  selectedBrands,
  totalNameBrand,
  setSelectedBrands,
  setTotalNameBrand,
  hide,
  setHide,
}) => {
  const handleBrandName = (element) => {
    GetBrandName(
      element.name,
      element.id,
      selectedBrands,
      totalNameBrand,
      setSelectedBrands,
      setTotalNameBrand
    );
  };

  return (
    <View>
      <SafeAreaView style={styles.allBrands}>
        {brands.map((element, index) => {
          const isSelected = selectedBrands.includes(element.name);
          return (
            <View
              style={getBrandStyle(element.name, selectedBrands)}
              key={element.id}
            >
              <TouchableOpacity onPress={() => handleBrandName(element)}>
                <Text
                  numberOfLines={1}
                  style={[
                    styles.elementBrandName,
                    {
                      color: isSelected ? "#fff" : "#262626",
                    },
                  ]}
                >
                  {element.name}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </SafeAreaView>
      <TouchableOpacity
        style={styles.seeLessButton}
        onPress={() => setHide(!hide)}
      >
        <Text style={styles.seeLessText}>Voir moins</Text>
      </TouchableOpacity>
      <View style={{height: height * 0.3}} />
      <TouchableOpacity
        style={styles.seeMoreButton}
        onPress={() => setHide(!hide)}
      >
        <Text style={styles.seeMoreText}>Voir plus</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BrandSelection;
