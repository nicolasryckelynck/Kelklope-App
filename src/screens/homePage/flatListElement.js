import React, {useCallback} from "react";
import {View, Text, FlatList, TouchableOpacity, Image} from "react-native";

import {styles} from "./style/flatlistStyle";

const FlatListElement = ({data, navigation}) => {
  const renderItem = useCallback(
    ({item, key}) => (
      <View style={styles.listItemStyles}>
        <TouchableOpacity
          style={styles.imageTouchable}
          onPress={() =>
            navigation.navigate("descriptionProduct", {
              data: item,
            })
          }
        >
          <Image
            source={{uri: item.image_url && item.image_url}}
            style={styles.imageProduct}
          />
          <View style={styles.informationsProduct}>
            <View style={{width: "80%", height: "55%"}}>
              <Text numberOfLines={2} style={styles.itemTitle}>
                {item.titre}
              </Text>
            </View>
            <View style={styles.allLinePriceProduct}>
              <Text style={{color: "grey", fontSize: 12}}>à partir de </Text>
              <Text style={styles.textPrice}>{item.prix}€</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    ),
    []
  );
  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      data={data}
      renderItem={renderItem}
    />
  );
};

export default FlatListElement;
