import React from "react";
import {View, Image, TouchableOpacity, Text} from "react-native";
import {useDispatch, useSelector} from "react-redux";

import {AlertButton} from "./button/alertButton";
import {FavoriteButton} from "./button/favoriteButton";

import {styles} from "./style/productInformations";

const ProductInformations = ({
  navigation,
  checkAlert,
  checkFavorite,
  data,
  category,
  favorite,
  minPrice,
  setModalVisible,
  id,
  setCheckFavorite,
  setCheckAlert,
}) => {
  const productFavorite = useSelector((state) => state.productFavorite);

  const dispatch = useDispatch();

  return (
    <View style={styles.productInformationsStyle}>
      <View style={styles.setAlertOrFavorite}>
        <AlertButton
          id={id}
          setModalVisible={setModalVisible}
          checkAlert={checkAlert}
        />
        <FavoriteButton
          id={id}
          data={data}
          dispatch={dispatch}
          setCheckFavorite={setCheckFavorite}
          productFavorite={productFavorite}
          checkFavorite={checkFavorite}
          setCheckAlert={setCheckAlert}
        />
      </View>
      <Image style={styles.imageProduct} source={{uri: data["image_url"]}} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("GetAllProducts", {
            itemId: data["fk_category_id"],
          });
        }}
      >
        <Text style={styles.category}>{category}</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{data["titre"]} </Text>
      <View style={styles.minPrice}>
        <Text style={styles.fromText}>à partir de </Text>
        <Text style={styles.price}>
          {favorite > 0
            ? Math.round(data["actual_price"] * 100) / 100
            : Math.round(minPrice * 100) / 100}{" "}
          €
        </Text>
      </View>
    </View>
  );
};

export default ProductInformations;
