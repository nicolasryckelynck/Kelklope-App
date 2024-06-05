import React, {useEffect, useState, useCallback, useRef} from "react";
import {View, StatusBar, Animated} from "react-native";
import {useDispatch} from "react-redux";

import HeadHeaderDisplayProduct from "./header";

import ProductFilterModal from "./productFilteredModal";
import ProductSortModal from "./productSortModal";
import AnimatedFilterSortView from "./animatedFilterSortView";

import {setListSort} from "./setListSort";
import {onPressSortButton} from "./onPressSortHelper";

import ProductList from "./flatListProduct";
import GetBrandName from "./action/getBrandName";
import {GetBrands} from "./action/getBrandName";
import LoadProduct from "./action/loadProduct";

import {
  Eliquide,
  clero,
  DIY,
  puff,
  resistance,
  CigaretteElec,
  accessoires,
  CBD,
} from "./productBrand";

const GetAllProducts = ({route, navigation}) => {
  const [informations, setInformations] = useState([]);
  const [informationsBySort, setinformationsBySort] = useState([]);
  const [checkSort, setCheckSort] = useState(false);
  const [brands, setBrands] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalVisibleFilter, setModalFilterVisible] = useState(false);
  const [hide, setHide] = useState(false);
  const [cptValue, setCptValue] = useState(0);
  const [brandIds, setBrandIds] = useState([]);
  const [multiSliderValue, setmultiSliderValue] = useState([1, 150]);
  const [offset, setOffset] = useState(0);
  const [localOffset, setLocalOffset] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [tmpBrands, setTmpBrands] = useState([]);
  const [totalNameBrand, setTotalNameBrand] = useState([]);
  const [isHeaderVisible, setHeaderVisible] = useState(true);
  const [firstRender, setFirstRender] = useState(true);

  const currentOffset = useRef(0);
  const translateY = useRef(new Animated.Value(0)).current;
  let [trie, setTrie] = useState();
  let [listOfSort, setListOfSort] = useState("");
  let multiSliderValuesChange = (values) => setmultiSliderValue(values);
  let check = 0;
  let arrayBestBrands = {
    2: Eliquide,
    248: CigaretteElec,
    282: resistance,
    316: clero,
    335: DIY,
    493: CBD,
    1: accessoires,
    1038: puff,
  };
  arrayBestBrands = arrayBestBrands[itemId] || [];
  var eliquideValues = Object.values(arrayBestBrands);
  const dispatch = useDispatch();
  const {itemId, items, search} = route.params;

  const handleScroll = (event) => {
    const {contentOffset} = event.nativeEvent;
    if (
      contentOffset.y > currentOffset.current &&
      contentOffset.y >= currentOffset.current + 10
    ) {
      setHeaderVisible(false);
      Animated.timing(translateY, {
        toValue: -100,
        duration: 300,
        useNativeDriver: true,
      }).start(() => translateY.setValue(-100));
    } else if (
      (contentOffset.y < currentOffset.current &&
        !isHeaderVisible &&
        contentOffset.y >= currentOffset.current - 25) ||
      contentOffset.y <= 150
    ) {
      setHeaderVisible(true);
      Animated.timing(translateY, {
        toValue: -15,
        duration: 300,
        useNativeDriver: true,
      }).start(() => translateY.setValue(-15));
    }
    currentOffset.current = contentOffset.y;
  };

  const brand = (id) => {
    let copieBrandId = brandIds;
    if (copieBrandId.includes(id)) {
      var index = copieBrandId.indexOf(id);
      copieBrandId.splice(index, 1);
    } else {
      copieBrandId.push(id);
    }
    setBrandIds(copieBrandId);
    setCptValue(brandIds.length);
  };

  useEffect(() => {
    setListSort(trie, setListOfSort);
  }, [trie]);

  useEffect(() => {
    setCptValue(brandIds.length);
    if (selectedBrands.length <= 0) {
      setCheckSort(false);
      setTrie(null);
    }
  }, [selectedBrands]);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    if (itemId === 9) {
      setIsLoading(false);
      setInformations(items);
    }
    GetBrands(itemId, dispatch, setTmpBrands, setBrands);
    items
      ? setInformations(items)
      : LoadProduct(
          itemId,
          check,
          multiSliderValue,
          offset,
          dispatch,
          informations,
          setInformations,
          setIsLoading,
          brand
        );
  }, [dispatch]);

  const handleSortButtonPress = useCallback(() => {
    onPressSortButton(
      trie,
      selectedBrands,
      itemId,
      search,
      totalNameBrand,
      multiSliderValue,
      isLoading,
      check,
      offset,
      dispatch,
      setInformations,
      setinformationsBySort,
      setLocalOffset,
      setIsLoading,
      setCheckSort,
      informations,
      setOffset,
      informationsBySort
    );
  }, [
    trie,
    selectedBrands,
    itemId,
    search,
    totalNameBrand,
    multiSliderValue,
    isLoading,
    check,
    offset,
    dispatch,
  ]);

  const handelEndReached = () => {
    if (!firstRender) {
      onPressSortButton(
        trie,
        selectedBrands,
        itemId,
        search,
        totalNameBrand,
        multiSliderValue,
        isLoading,
        check,
        offset,
        dispatch,
        setInformations,
        setinformationsBySort,
        setLocalOffset,
        setIsLoading,
        setCheckSort,
        informations,
        setOffset,
        informationsBySort
      );
    } else {
      setFirstRender(false);
    }
  };

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <HeadHeaderDisplayProduct navigation={navigation} />
      <View>
        <ProductSortModal
          modalVisibleFilter={modalVisibleFilter}
          setModalFilterVisible={setModalFilterVisible}
          trie={trie}
          setTrie={setTrie}
          handleSortButtonPress={handleSortButtonPress}
          setOffset={setOffset}
        />
        <Animated.View>
          <AnimatedFilterSortView
            selectedBrands={selectedBrands}
            setModalVisible={setModalVisible}
            setModalFilterVisible={setModalFilterVisible}
            GetBrandName={GetBrandName}
            totalNameBrand={totalNameBrand}
            setSelectedBrands={setSelectedBrands}
            setTotalNameBrand={setTotalNameBrand}
            handleSortButtonPress={handleSortButtonPress}
            translateY={translateY}
            setCheckSort={setCheckSort}
            setOffset={setOffset}
            setInformationsBySort={setinformationsBySort}
          />

          <ProductList
            navigation={navigation}
            handelEndReached={handelEndReached}
            checkSort={checkSort}
            selectedBrands={selectedBrands}
            items={items}
            informations={informations}
            informationsBySort={informationsBySort}
            itemId={itemId}
            handleScroll={handleScroll}
            trie={trie}
            setOffset={setOffset}
          />
        </Animated.View>

        <ProductFilterModal
          modalVisible={modalVisible}
          setModalVisible={setModalVisible}
          selectedBrands={selectedBrands}
          multiSliderValue={multiSliderValue}
          trie={trie}
          setTrie={setTrie}
          brands={brands}
          totalNameBrand={totalNameBrand}
          setSelectedBrands={setSelectedBrands}
          setTotalNameBrand={setTotalNameBrand}
          hide={hide}
          setHide={setHide}
          eliquideValues={eliquideValues}
          handelEndReached={handelEndReached}
          setOffset={setOffset}
          setinformationsBySort={setinformationsBySort}
        />
      </View>
    </View>
  );
};

export default GetAllProducts;
