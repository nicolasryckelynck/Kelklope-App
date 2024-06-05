import React, {useCallback, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
import {AntDesign, MaterialCommunityIcons, Entypo} from "@expo/vector-icons";
import {styles} from "./styles/getAllProductStyles";

const {height, width} = Dimensions.get("window");

const FilterButton = ({onPress}) => (
  <TouchableOpacity style={styles.filterButton} onPress={onPress}>
    <Text style={styles.filterText}>Filtrer</Text>
    <AntDesign
      name="filter"
      size={20}
      color="#436B92"
      style={styles.filterLogo}
    />
  </TouchableOpacity>
);

const SortButton = ({onPress}) => (
  <TouchableOpacity style={styles.sortButton} onPress={onPress}>
    <Text style={styles.sortText}>Trier</Text>
    <MaterialCommunityIcons
      style={styles.sortLogo}
      name="sort-variant"
      size={20}
      color="#436B92"
    />
  </TouchableOpacity>
);

const AnimatedFilterSortView = ({
  selectedBrands,
  setModalVisible,
  setModalFilterVisible,
  GetBrandName,
  totalNameBrand,
  setSelectedBrands,
  setTotalNameBrand,
  handleSortButtonPress,
  translateY,
  setCheckSort,
  setOffset,
  setInformationsBySort,
}) => {
  const handleFilterPress = useCallback(() => {
    setModalVisible(true);
  }, [setModalVisible]);

  const handleSortPress = useCallback(() => {
    setModalFilterVisible(true);
  }, [setModalFilterVisible]);

  const handleBrandPress = useCallback(
    (element, index) => {
      GetBrandName(
        element,
        index,
        selectedBrands,
        totalNameBrand,
        setSelectedBrands,
        setTotalNameBrand
      );

      if (index === selectedBrands.length - 1) setCheckSort(false);
      setOffset(0);
      setInformationsBySort([]);
      handleSortButtonPress();
    },
    [selectedBrands, totalNameBrand, setSelectedBrands, setTotalNameBrand]
  );

  return (
    <Animated.View
      style={[
        styles.animatedView,
        {
          height: selectedBrands.length > 0 ? height * 0.085 : height * 0.05,
          width: selectedBrands.length > 0 ? width * 1.5 : width * 1,
          transform: [{translateY: translateY}],
        },
      ]}
    >
      <FilterButton onPress={handleFilterPress} />
      <SortButton onPress={handleSortPress} />
      {selectedBrands && selectedBrands.length > 0 && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={[
            styles.viewSelectedBrands,
            {width: selectedBrands.length * 1},
          ]}
        >
          {selectedBrands.map((element, index) => (
            <TouchableOpacity
              style={styles.deleteBrands}
              onPress={() => handleBrandPress(element, index)}
            >
              <View style={{flexDirection: "row"}}>
                <Text numberOfLines={2} style={styles.elementSelectedBrands}>
                  {element}
                </Text>
                <Entypo
                  name="cross"
                  size={15}
                  color="#fff"
                  style={{right: 5, top: 1}}
                />
              </View>
            </TouchableOpacity>
          ))}
          <View style={{width: width * 0.1}} />
        </ScrollView>
      )}
    </Animated.View>
  );
};

export default AnimatedFilterSortView;
