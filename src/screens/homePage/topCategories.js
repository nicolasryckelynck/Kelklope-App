import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";

import {styles} from "./style/topCategoriesStyle";

const TopCategories = ({data, navigation}) => {
  return (
    <View style={styles.topCategoriesContainer}>
      <Text style={[styles.topCategoriesText, {fontFamily: "ManropeSemiBold"}]}>
        Top catégories
      </Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data}
        renderItem={({item}) => (
          <View style={styles.categories}>
            <TouchableOpacity
              style={styles.touchableOpacityImage}
              onPress={() =>
                navigation.navigate("GetAllProducts", {
                  itemId: item.itemId,
                  items: "",
                })
              }
            >
              <Image style={styles.imageTopCategories} source={item.image} />
            </TouchableOpacity>
            <Text style={styles.itemLabel}>{item.label}</Text>
          </View>
        )}
        style={styles.flatlistItem}
      />
    </View>
  );
};

export default TopCategories;
