import React, {useState, useEffect, useRef, useCallback} from "react";
import {
  View,
  useWindowDimensions,
  ScrollView,
  Animated,
  LayoutAnimation,
  StatusBar,
} from "react-native";
import * as yup from "yup";
import RenderHtml from "react-native-render-html";
import {useIsFocused} from "@react-navigation/native";
import {useSelector} from "react-redux";

import HeaderDescription from "./header";
import ProductInformations from "./productInformations";
import MiddleContent from "./middleContent";
import ProductOffers from "./productOffers";

import {PriceAlertModal} from "./modal/priceAlertModal";

// API IMPORT
import {getAvgGrade} from "./api/getAvgGrade";
import {getMinPrice} from "./api/getMinPrice";
import {getOffers} from "./api/getOffers";
import {loadTargetPriceAndEmailActive} from "./api/loadTargetPriceAndEmailActive";
import {checkFavoriteAndAlert} from "./api/checkFavoriteAndAlert";

import {styles} from "./style/descriptionProductStyle";

const DescriptionProduct = ({route, navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [offers, setOffers] = useState([]);
  const [id, setId] = useState("");
  const [offerCpt, setOffetCpt] = useState(0);
  const [showText, setShowText] = useState(false);
  const [shortDescription, setShortDescription] = useState("");
  const [avgGrade, setAvgGrade] = useState([]);
  const [tmpAvgGrade, setTmpAvgGrade] = useState(0);
  const [checkFavorite, setCheckFavorite] = useState(0);
  const [checkAlert, setCheckAlert] = useState(0);
  const [alertPrice, setAlertPrice] = useState(0.0);
  const [isEnabled, setIsEnabled] = useState(false);
  const [decodedInformations, setDecoded] = useState({});
  const [timeoutId, setTimeoutId] = useState(null);
  const [minPrice, setMinPrice] = useState([]);
  const [changingText, setIsChangingText] = useState(false);

  const token = useSelector((state) => state.user);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const isFocused = useIsFocused();
  const scaleYAnim = useRef(new Animated.Value(showText ? 1 : 0)).current;

  const WebDisplay = React.memo(function WebDisplay({html}) {
    const {width: contentWidth} = useWindowDimensions();
    const tagsStyles = {
      body: {
        whiteSpace: "normal",
        color: "gray",
        width: width * 0.7,
        margin: 20,
        right: 3,
      },
      a: {
        color: "gray",
        textDecorationLine: "none",
      },
    };
    return (
      <RenderHtml
        contentWidth={contentWidth}
        source={short_description}
        tagsStyles={tagsStyles}
      />
    );
  });

  const updateOffers = (data) => {
    const existingOffer = offers.find(
      (offer) =>
        offer.id === data.id && offer.fk_boutique_id === data.fk_boutique_id
    );
    if (!existingOffer) {
      setOffers((prevOffers) => [...prevOffers, data]);
    }
  };

  const toggleText = () => {
    LayoutAnimation.configureNext({
      duration: 500,
      update: {
        type: LayoutAnimation.Types.easeOut,
      },
    });
    if (showText) {
      Animated.timing(scaleYAnim, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(scaleYAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true,
      }).start();
    }
    setShowText(!showText);
  };

  const scaleYInterpolation = scaleYAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const categories = {
    2: "E-liquide",
    248: "Cigarettes Electroniques",
    282: "Résistance",
    316: "Clearomiseur",
    335: "DIY",
    493: "CBD",
    1: "Accessoires",
    1038: "Puff",
  };

  const data = route.params.data;
  const favorite = route.params.favorite;
  const target_price = route.params.target_price;
  const category = categories[data["fk_category_id"]] || "";
  const {width} = useWindowDimensions();

  const short_description = {
    html: shortDescription,
  };

  const formSchema = yup.object({
    targetPrice: yup.number().min(1),
  });

  const loadProfile = useCallback(async () => {
    setDecoded(token);
    if (token) setId(token.id);
  }, [decodedInformations]);

  useEffect(() => {
    if (isFocused) {
      loadProfile();
      checkFavoriteAndAlert(data, setCheckFavorite, setCheckAlert, id);
    }
  }, [id, checkAlert, checkFavorite, isFocused, token]);

  useEffect(() => {
    setShortDescription(
      data["short_description"]
        .replace(/<a\b[^>]*>(.*?)<\/a>/gi, "<span>$1</span>")
        .replace(/\\| /g, " ")
    );
    getAvgGrade(data["fk_produit_id"], setAvgGrade);
    loadTargetPriceAndEmailActive(
      data["fk_produit_id"],
      id,
      setIsEnabled,
      setAlertPrice
    );
  }, [data["fk_produit_id"], id, modalVisible]);

  useEffect(() => {
    setTmpAvgGrade(avgGrade["average_rating"]);
  }, [avgGrade]);

  useEffect(() => {
    getMinPrice(data["fk_produit_id"], setMinPrice);
    getOffers(data["fk_produit_id"], setOffetCpt, updateOffers);
  }, []);

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <HeaderDescription navigation={navigation} favorite={favorite} />
      <ScrollView>
        <View style={styles.descriptionPage}>
          <ProductInformations
            navigation={navigation}
            checkAlert={checkAlert}
            checkFavorite={checkFavorite}
            data={data}
            category={category}
            favorite={favorite}
            minPrice={minPrice}
            setModalVisible={setModalVisible}
            id={id}
            setCheckFavorite={setCheckFavorite}
            setCheckAlert={setCheckAlert}
          />
          <MiddleContent
            toggleText={toggleText}
            avgGrade={avgGrade}
            id={id}
            setAvgGrade={setAvgGrade}
            timeoutId={timeoutId}
            setTimeoutId={setTimeoutId}
            data={data}
            navigation={navigation}
            setTmpAvgGrade={setTmpAvgGrade}
          />
          {showText && (
            <Animated.View
              style={[
                styles.animatedViewText,
                {transform: [{scaleY: scaleYInterpolation}]},
              ]}
            >
              <WebDisplay />
            </Animated.View>
          )}
          <ProductOffers offerCpt={offerCpt} offers={offers} />
          <PriceAlertModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            formSchema={formSchema}
            setIsChangingText={setIsChangingText}
            minPrice={minPrice}
            setAlertPrice={setAlertPrice}
            alertPrice={alertPrice}
            changingText={changingText}
            target_price={target_price}
            isEnabled={isEnabled}
            toggleSwitch={toggleSwitch}
            id={id}
            navigation={navigation}
            setCheckAlert={setCheckAlert}
            setCheckFavorite={setCheckFavorite}
            data={data}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default DescriptionProduct;
