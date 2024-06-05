import React from "react";
import {View, Text, Image, Pressable} from "react-native";
import TopCategories from "../topCategories";
import FlatListElement from "../flatListElement";

import {styles} from "../style/firstPageStyle";

const BodyComponent = (props) => {
  const {topCategories, categories, images} = props;

  const handleSeeMoreButton = (id) => {
    props.navigation.navigate("GetAllProducts", {
      itemId: id,
      items: "",
    });
  };

  return (
    <View style={{top: 80}}>
      <View style={styles.halfCircle} />
      <TopCategories data={topCategories} navigation={props.navigation} />

      {categories.map((category) => {
        return (
          <View style={styles.eachElement} key={category.title}>
            <View style={styles.seeMoreContainer}>
              <Text style={styles.title}>{category.title}</Text>
              {category.fk_category_id && (
                <Pressable
                  style={styles.seeMoreButton}
                  onPress={() => handleSeeMoreButton(category.fk_category_id)}
                >
                  <Text style={styles.seeMoreText}>Voir plus</Text>
                </Pressable>
              )}
            </View>
            <FlatListElement
              data={category?.data}
              navigation={props.navigation}
            />
          </View>
        );
      })}

      <View style={styles.banneerPartner}>
        <Text style={[styles.title, {bottom: 30, left: 20}]}>
          Nos partenaires
        </Text>
        {images.map(
          (image, index) =>
            index < 3 && (
              <Image
                key={index}
                source={{uri: image}}
                style={styles.imageBannerPartner}
              />
            )
        )}
      </View>
    </View>
  );
};

export default BodyComponent;
