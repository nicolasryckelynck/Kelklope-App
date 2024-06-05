import React from "react";
import {View, TouchableOpacity, Text, Image} from "react-native";
import {AntDesign, Feather} from "@expo/vector-icons";

import {ModalComponent} from "../modal/modalComponent";

import {TargetPriceButton} from "./targetPriceButton";
import {PriceAlertButton} from "./priceAlertButton";

import {styles} from "../style/favoriteStyle";

const ItemView = ({
  item,
  navigation,
  routeName,
  modalAddTargetPriceVisible,
  setmodalAddTargetPriceVisible,
  modalItemInformations,
  decoded,
  formSchema,
  isEnabled,
  setAlertPrice,
  setIsChangingText,
  alertPrice,
  changingText,
  toggleSwitch,
  checkedItems,
  offsetX,
  width,
  setModalItemInformations,
  setIsEnabled,
  setCheckedItems,
  setInformations,
}) => {
  const onItemPress = (item) => {
    if (checkedItems.includes(item.fk_produit_id)) {
      setCheckedItems(checkedItems.filter((id) => id !== item.fk_produit_id));
    } else {
      setCheckedItems([...checkedItems, item.fk_produit_id]);
    }
  };

  return (
    <View style={[styles.allAlert, {transform: [{translateX: offsetX}]}]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("DescriptionProductFromFavorite", {
            data: item["item"],
            favorite: routeName,
            target_price: item["item"]["target_price"],
          });
        }}
      >
        <View style={styles.flexDirectionRow}>
          <ModalComponent
            modalAddTargetPriceVisible={modalAddTargetPriceVisible}
            setmodalAddTargetPriceVisible={setmodalAddTargetPriceVisible}
            modalItemInformations={modalItemInformations}
            decoded={decoded}
            formSchema={formSchema}
            isEnabled={isEnabled}
            setAlertPrice={setAlertPrice}
            setIsChangingText={setIsChangingText}
            alertPrice={alertPrice}
            changingText={changingText}
            toggleSwitch={toggleSwitch}
            setInformations={setInformations}
          />
          <TouchableOpacity
            style={styles.selectItemToDeleteButton}
            onPress={() => onItemPress(item.item)}
          >
            {checkedItems.includes(
              item["item"]["id"]
                ? item["item"]["id"]
                : item["item"]["fk_produit_id"]
            ) ? (
              <AntDesign name="checkcircle" size={30} color="#436B92" />
            ) : (
              <Feather name="circle" size={30} color="#262626" />
            )}
          </TouchableOpacity>
          <Image
            style={styles.imageItem}
            source={{uri: item["item"]["image_url"]}}
          />
          <View
            style={[
              styles.flexDirectionColumn,
              {top: "2%", right: width * 0.05},
            ]}
          >
            <View style={styles.itemInformationsView}>
              <Text style={styles.itemTitle} numberOfLines={2}>
                {item["item"]["titre"]}
              </Text>
              <View style={styles.actualPrice}>
                <Text style={styles.fromPriceText}>à partir de</Text>
                <Text style={styles.itemActualPrice}>
                  {Number(item["item"]["actual_price"]).toFixed(2)} €
                </Text>
              </View>
            </View>
          </View>
          {item["item"]["is_alerte_active"] > 0 ? (
            <TargetPriceButton
              item={item}
              decoded={decoded}
              setModalItemInformations={setModalItemInformations}
              setIsEnabled={setIsEnabled}
              modalItemInformations={modalItemInformations}
              setmodalAddTargetPriceVisible={setmodalAddTargetPriceVisible}
              modalAddTargetPriceVisible={modalAddTargetPriceVisible}
            />
          ) : (
            <PriceAlertButton
              decoded={decoded}
              setModalItemInformations={setModalItemInformations}
              setmodalAddTargetPriceVisible={setmodalAddTargetPriceVisible}
              item={item}
              navigation={navigation}
              modalAddTargetPriceVisible={modalAddTargetPriceVisible}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ItemView;
