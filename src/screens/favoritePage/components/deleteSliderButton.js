import React, {useCallback} from "react";
import {View, Text, TouchableOpacity} from "react-native";
import {FontAwesome} from "@expo/vector-icons";
import {useDispatch, useSelector} from "react-redux";

import {styles} from "../style/favoriteStyle";

import {REMOVE_FAVORITE_PRODUCT} from "../../../redux/actions/authAction";
import {deleteFavorite} from "../../descriptionPage/api/handleFavorite";

export const DeleteSliderButton = ({
  offsetX,
  checkedItems,
  setOffsetX,
  setCheckedItems,
}) => {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.user);

  const onDelete = useCallback(() => {
    if (token) {
      checkedItems.map((item) => {
        let itemArray = {fk_produit_id: item};
        deleteFavorite(token.id, itemArray);
        dispatch({
          type: REMOVE_FAVORITE_PRODUCT,
          payload: item,
        });

        setOffsetX(-10);
        setCheckedItems([]);
      });
    }
  }, [dispatch, checkedItems]);

  return (
    offsetX &&
    checkedItems.length > 0 && (
      <TouchableOpacity style={styles.trashButton} onPress={onDelete}>
        <FontAwesome
          style={styles.trashLogo}
          name="trash-o"
          size={35}
          color="white"
        />
        <View style={styles.cptItemSelectedToDeleteView}>
          <Text style={styles.cptItemSelectedToDeleteText}>
            {checkedItems.length}
          </Text>
        </View>
      </TouchableOpacity>
    )
  );
};
