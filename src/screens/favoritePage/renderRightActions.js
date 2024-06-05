import React, {useCallback} from "react";
import {View, Animated, Text, TouchableOpacity} from "react-native";
import {useDispatch} from "react-redux";

import {styles} from "./style/renderRightActionsStyle";

import {REMOVE_FAVORITE_PRODUCT} from "../../redux/actions/authAction";
import {deleteFavorite} from "../descriptionPage/api/handleFavorite";

const RenderRightActions = ({progress, dragX, item, idClient}) => {
  const dispatch = useDispatch();

  const onDelete = useCallback(
    (item) => {
      if (idClient) {
        deleteFavorite(idClient, item);
        dispatch({
          type: REMOVE_FAVORITE_PRODUCT,
          payload: item["fk_produit_id"],
        });
      }
    },
    [dispatch]
  );

  const opacity = dragX.interpolate({
    inputRange: [-150, 0],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  return (
    <View style={styles.swipedRow}>
      <View style={styles.swipedConfirmationContainer}>
        <Text style={styles.deleteConfirmationText}>Êtes-vous sûr ?</Text>
      </View>
      <TouchableOpacity
        style={[styles.deleteButton, {opacity}]}
        onPress={() => onDelete(item)}
      >
        <Animated.View>
          <Text style={styles.deleteButtonText}>Supprimer</Text>
        </Animated.View>
      </TouchableOpacity>
    </View>
  );
};

export default RenderRightActions;
