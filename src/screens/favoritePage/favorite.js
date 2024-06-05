import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import * as yup from "yup";
import {Swipeable, GestureHandlerRootView} from "react-native-gesture-handler";
import {useNavigation, useIsFocused} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {useSelector, useDispatch} from "react-redux";

import {fetchFavorites} from "./api/fetchFavorites";

import RenderRightActions from "./renderRightActions";
import DescriptionProductFromFavorite from "../descriptionPage/descriptionProductFromFavorite";
import myAccount from "../account/myAccount";

import {styles} from "./style/favoriteStyle";

import {DeleteSliderButton} from "./components/deleteSliderButton";
import ItemView from "./components/itemView";

const {width} = Dimensions.get("window");

const FavoriteScreen = (props) => {
  const [informations, setInformations] = useState([]);
  const [decoded, setDecoded] = useState({});
  const [modalAddTargetPriceVisible, setmodalAddTargetPriceVisible] =
    useState(false);
  const [checkedItems, setCheckedItems] = useState([]);
  const [offsetX, setOffsetX] = useState(-10);
  const [alertPrice, setAlertPrice] = useState(0.0);
  const [modalItemInformations, setModalItemInformations] = useState([]);
  const [isEnabled, setIsEnabled] = useState();
  const [changingText, setIsChangingText] = useState(false);

  const routeName = props.route.name;
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const dispatch = useDispatch;
  const token = useSelector((state) => state.user);
  const productFavorite = useSelector((state) => state.productFavorite);

  const formSchema = yup.object({
    targetPrice: yup.number().min(1),
  });

  useEffect(() => {
    fetchFavorites(token, productFavorite, setInformations);
  }, [dispatch, productFavorite, token]);

  const receiveToken = async () => {
    if (!token) {
      setDecoded({});
      return -1;
    } else setDecoded(token);
  };

  useEffect(() => {
    receiveToken();
  }, []);

  useEffect(() => {
    if (isFocused) {
      StatusBar.setBarStyle("dark-content");
    } else {
      StatusBar.setBarStyle("light-content");
    }
  }, [isFocused]);

  useEffect(() => {
    setIsEnabled(modalItemInformations.email_active > 0 ? true : false);
  }, [modalItemInformations.email_active]);

  return (
    <GestureHandlerRootView style={styles.container}>
      <Text style={styles.mySelectionText}>Ma sélection</Text>
      {informations.length > 0 ? (
        <TouchableOpacity
          onPress={() => {
            offsetX > 0 ? setOffsetX(-10) : setOffsetX(50);
          }}
        >
          <Text style={styles.modifyText}>Modifier</Text>
        </TouchableOpacity>
      ) : (
        <Text style={styles.noneProductText}>Aucun produit sélectionné</Text>
      )}
      {informations ? (
        <View style={{bottom: 50}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{height: informations.length * 250}}
            ItemSeparatorComponent={
              <View style={{height: 10, backgroundColor: "transparent"}} />
            }
            data={informations}
            renderItem={(item) => (
              <Swipeable
                renderRightActions={(progress, dragX) => (
                  <RenderRightActions
                    progress={progress}
                    dragX={dragX}
                    item={item["item"]}
                    idClient={decoded.id}
                  />
                )}
              >
                <ItemView
                  item={item}
                  navigation={navigation}
                  routeName={routeName}
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
                  checkedItems={checkedItems}
                  offsetX={offsetX}
                  width={width}
                  setModalItemInformations={setModalItemInformations}
                  setIsEnabled={setIsEnabled}
                  setCheckedItems={setCheckedItems}
                  setInformations={setInformations}
                />
              </Swipeable>
            )}
          />
        </View>
      ) : (
        <View>Connecter vous afin de mettre de coté vos articles favoris</View>
      )}
      <DeleteSliderButton
        offsetX={offsetX}
        checkedItems={checkedItems}
        setOffsetX={setOffsetX}
        setCheckedItems={setCheckedItems}
      />
    </GestureHandlerRootView>
  );
};

const FavoritePageStack = createNativeStackNavigator();

function FavoritePageNavigator() {
  return (
    <FavoritePageStack.Navigator>
      <FavoritePageStack.Screen
        name="FavoriteScreen"
        component={FavoriteScreen}
        options={{headerShown: false}}
      ></FavoritePageStack.Screen>
      <FavoritePageStack.Screen
        name="DescriptionProductFromFavorite"
        component={DescriptionProductFromFavorite}
        options={{headerShown: false}}
      ></FavoritePageStack.Screen>
      <FavoritePageStack.Screen
        name="myAccount"
        component={myAccount}
        options={{headerShown: false}}
      ></FavoritePageStack.Screen>
    </FavoritePageStack.Navigator>
  );
}

export default FavoritePageNavigator;
