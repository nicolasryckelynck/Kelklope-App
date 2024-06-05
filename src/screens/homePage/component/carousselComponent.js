import React from "react";
import {
  View,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Dimensions,
} from "react-native";

const {width} = Dimensions.get("window");

import {styles} from "../style/firstPageStyle";

const CarouselComponent = (props) => {
  const {images, setActive, active} = props;

  const handleScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const activeIndex = Math.round(scrollPosition / width);
    setActive(activeIndex);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.body}>
        <View style={styles.backgroundHeader2} />
        <ScrollView
          pagingEnabled
          horizontal
          onScroll={handleScroll}
          showsHorizontalScrollIndicator={false}
          style={[styles.scroll, styles.carousselContainer]}
        >
          {images.map((image, index) => (
            <View key={index} style={{overflow: "hidden", borderRadius: 20}}>
              <Image source={{uri: image}} style={styles.imageCarousel} />
            </View>
          ))}
        </ScrollView>
        <View style={styles.pagination}>
          {images.map((i, k) => (
            <View
              key={k}
              style={k == active ? styles.pagingActiveText : styles.pagingText}
            />
          ))}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default CarouselComponent;
