import React, {useState, useEffect, useRef} from "react";
import {
  View,
  ScrollView,
  ActivityIndicator,
  StatusBar,
  Animated,
} from "react-native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import ResultSearchBar from "../searchBar/searchBarResult";
import DescriptionProduct from "../descriptionPage/descriptionProduct";
import GetAllProducts from "../displayListOfProduct/getAllProducts";

import {topCategories} from "./topCategoriesList";

import BodyComponent from "./component/bodyComponent";
import HeaderComponent from "./component/headerComponent";
import CarouselComponent from "./component/carousselComponent";

import fetchData from "./api/fetchData";

import {styles} from "./style/firstPageStyle";

const images = [
  "https://www.kelklope.com/storage/slider/image/8c58b8a47c153020bde9004a5f4fd830.png",
  "https://www.kelklope.com/storage/slider/image/79313524e062789f534183720a69eaf0.jpg",
];

const Slider = (props) => {
  const [active, setActive] = useState(0);
  const [results, setResults] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const opacityValue = useRef(new Animated.Value(0)).current;
  const [arrayLiquid, setArrayLiquid] = useState([]);
  const [arrayNew, setArrayNew] = useState([]);
  const [arrayCigarette, setArrayCigarette] = useState([]);
  const [arrayPuff, setArrayPuff] = useState([]);

  useEffect(() => {
    if (arrayNew.length === 0) {
      fetchData(
        setArrayNew,
        setArrayLiquid,
        setArrayCigarette,
        setArrayPuff,
        setIsLoading,
        opacityValue
      );
    }
  }, []);

  const categories = [
    {title: "Les nouveautés", data: arrayNew, fk_category_id: null},
    {title: "E-Liquides", data: arrayLiquid, fk_category_id: 2},
    {title: "E-Cigarettes", data: arrayCigarette, fk_category_id: 248},
    {title: "Pods Jetables", data: arrayPuff, fk_category_id: 1038},
  ];

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
        <ActivityIndicator size="large" color="#436B92" animating={true} />
      </View>
    );
  }

  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      {/* HEADER COMPONENT */}
      <HeaderComponent
        loading={loading}
        results={results}
        navigation={props.navigation}
        search={search}
      />
      <ScrollView style={{bottom: 20}}>
        <View style={styles.allPage}>
          {/* CAROUSSEL COMPONENT  */}
          <CarouselComponent
            images={images}
            setActive={setActive}
            active={active}
          />
          {/* BODY */}
          <BodyComponent
            topCategories={topCategories}
            categories={categories}
            images={images}
            navigation={props.navigation}
          />
          <View
            style={{flex: 1, justifyContent: "center", alignItems: "center"}}
          >
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const firstPageStack = createNativeStackNavigator();

function FirstPageNavigator() {
  return (
    <firstPageStack.Navigator>
      <firstPageStack.Screen
        name="Slider"
        component={Slider}
        options={{headerShown: false}}
      ></firstPageStack.Screen>
      <firstPageStack.Screen
        name="descriptionProduct"
        component={DescriptionProduct}
        options={{headerShown: false}}
      ></firstPageStack.Screen>
      <firstPageStack.Screen
        name="GetAllProducts"
        component={GetAllProducts}
        options={{headerShown: false}}
      ></firstPageStack.Screen>
      <firstPageStack.Screen
        name="ResultSearchBar"
        component={ResultSearchBar}
        options={{headerShown: false}}
      ></firstPageStack.Screen>
    </firstPageStack.Navigator>
  );
}

export default FirstPageNavigator;
