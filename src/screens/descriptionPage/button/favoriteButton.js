import React, {useRef} from "react";
import {TouchableOpacity, Animated, Alert} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {addInFavorite} from "../api/handleFavorite";
import {styles} from "../style/productInformations";

export const FavoriteButton = ({
  id,
  data,
  dispatch,
  setCheckFavorite,
  productFavorite,
  checkFavorite,
  setCheckAlert,
}) => {
  const translateY = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    Animated.parallel([
      Animated.timing(translateY, {
        toValue: 400,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateX, {
        toValue: -1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start(({finished}) => {
      if (finished) {
        translateY.stopAnimation();
        translateX.stopAnimation();
        translateY.setValue(0);
        translateX.setValue(0);
      }
    });
  };

  const handleAddFavorite = () => {
    if (id) {
      addInFavorite(id, data, dispatch, setCheckFavorite, setCheckAlert);
      startAnimation();
    } else Alert.alert("Veuillez vous connecter pour ajouter un favori");
  };

  return (
    <TouchableOpacity style={styles.favorite} onPress={handleAddFavorite}>
      <AntDesign
        name={
          productFavorite.includes(data["fk_produit_id"]) ? "heart" : "hearto"
        }
        size={30}
        color="#436B92"
        style={{zIndex: 15}}
      />
      <Animated.View
        style={{
          transform: [{translateY: translateY}, {translateX: translateX}],
          zIndex: 15,
        }}
      >
        <AntDesign
          name={checkFavorite > 0 ? "heart" : "hearto"}
          size={30}
          color="#436B92"
          style={{bottom: 30, opacity: 0.8}}
        />
      </Animated.View>
    </TouchableOpacity>
  );
};
