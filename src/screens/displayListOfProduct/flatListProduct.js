import React, {useCallback} from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import {styles} from "./styles/flatListProductStyles";

const {height} = Dimensions.get("window");

const ProductItem = React.memo(({item, navigation, itemId}) => (
  <View style={styles.Products}>
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("descriptionProduct", {
          data: item,
          category: itemId,
        })
      }
    >
      <View style={{width: "40%", height: "60%"}}>
        <Image style={styles.imageProduct} source={{uri: item.image_url}} />
      </View>
      <View style={styles.productInfos}>
        <Text numberOfLines={2} style={styles.titre}>
          {item.titre}
        </Text>
        <View style={styles.productInformations}>
          <Text style={{color: "grey"}}>à partir de </Text>
          <Text style={styles.price}>{item.prix} €</Text>
          <Text style={{left: "50%", color: "grey"}}>
            {item.boutiqueCpt} offre{item.boutiqueCpt > 1 ? "s" : ""}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  </View>
));

const ProductList = ({
  navigation,
  handelEndReached,
  checkSort,
  selectedBrands,
  items,
  informations,
  informationsBySort,
  itemId,
  handleScroll,
  trie,
  setOffset,
}) => {
  const renderItem = useCallback(
    ({item, index}) => (
      <ProductItem item={item} navigation={navigation} itemId={itemId} />
    ),
    [navigation, itemId]
  );

  let data = !checkSort
    ? items
      ? items[2]
      : informations
    : informationsBySort;

  if (trie === 1) data = data.sort((a, b) => a.prix - b.prix);
  else if (trie === 2) data = data.sort((a, b) => b.prix - a.prix);
  else if (trie === 3)
    data = data.sort((a, b) => b.boutiqueCpt - a.boutiqueCpt);

  return (
    <View style={{height: "95%"}}>
      <FlatList
        ListHeaderComponent={<View style={{height: checkSort ? 80 : 25}} />}
        ListFooterComponent={<View style={{height: checkSort ? 400 : 400}} />}
        onEndReached={() => {
          setOffset((prev) => prev + 50);
          handelEndReached();
        }}
        onEndReachedThreshold={0.5}
        scrollEventThrottle={16}
        onScroll={handleScroll}
        style={[
          {
            height: !checkSort ? "10%" : "10%",
          },
          selectedBrands.length === 0
            ? {top: height * 0.01}
            : {bottom: height * 0.005},
        ]}
        data={data}
        keyExtractor={(item, index) => item.id}
        renderItem={renderItem}
      />
    </View>
  );
};

export default React.memo(ProductList);
