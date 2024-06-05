import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  Dimensions,
  Linking,
} from "react-native";

import {styles} from "./style/productOfferStyle";

const {width} = Dimensions.get("window");
const height = width * 0.4;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toISOString().split("T")[0];
};

const OfferItem = ({item, index}) => {
  const dateOnly = formatDate(item["updated_at"]);
  return (
    <View key={index} style={styles.eachOffer}>
      {index === 0 ? (
        <View key={index} style={styles.firstOffer}>
          <View style={styles.bestPriceTextView}>
            <Text style={styles.bestPriceText}>Meilleur prix</Text>
          </View>
          <Text style={[styles.offerPrice, {top: 17}]}>{item["prix"]} €</Text>
          <Text style={[styles.tva, {top: 12}]}>TVA incl.</Text>
          <Image
            style={styles.shopLogo}
            source={{uri: item["logo"]}}
            resizeMode="contain"
          />
          <Text style={styles.avalaible}>
            Annonce valable aujourd'hui, mise à jour le : {dateOnly}
          </Text>
        </View>
      ) : (
        <View key={index} style={styles.allOffer}>
          <Text style={[styles.offerPrice, {top: 5}]}>{item["prix"]} €</Text>
          <Text style={[styles.tva, {top: 6}]}>TVA incl.</Text>

          <View style={styles.imageShopContainer}>
            <Image
              style={styles.logoShop}
              source={{uri: item["logo"]}}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.validity}>
            Annonce valable aujourd'hui, mise à jour le : {dateOnly}
          </Text>
        </View>
      )}

      <TouchableOpacity
        onPress={() => Linking.openURL(item["url"])}
        style={styles.redirectionToOfferSite}
      >
        <Text style={styles.checkOfferText}>Voir l'offre</Text>
      </TouchableOpacity>
    </View>
  );
};

const ProductOffers = ({offerCpt, offers}) => {
  return (
    <View style={{backgroundColor: "#F0F0F0"}}>
      <View style={styles.cptOfferView}>
        <Text style={styles.cptOfferText}>
          {offerCpt} {offerCpt <= 1 ? "offre" : "offres"}
        </Text>
      </View>
      {offers.map((item, index) => (
        <OfferItem key={index} item={item} index={index} />
      ))}
      <View style={{height: height * 1.7}} />
    </View>
  );
};

export default ProductOffers;
