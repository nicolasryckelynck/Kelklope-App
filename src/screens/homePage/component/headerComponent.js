import React, {useMemo} from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";

import {styles} from "../style/firstPageStyle";

const LOGO_PATH = require("../../../../assets/images/kelklope_logo2.jpg");

const HeaderComponent = ({loading, results, navigation, search}) => {
  const resultsList = useMemo(() => {
    if (search.length > 0) {
      if (Array.isArray(results) && results[2]) {
        return (
          <>
            {results[2].map((item) => (
              <View
                key={item.id}
                style={{display: "flex", flexDirection: "row"}}
              >
                <Text>{item.titre}</Text>
                <Image
                  style={{width: 30, height: 30}}
                  source={{uri: item.image_url ? item.image_url : ""}}
                />
              </View>
            ))}
          </>
        );
      } else {
        return <Text>Aucun résultat</Text>;
      }
    }
  }, [search, results]);

  return (
    <View style={styles.header}>
      <View style={styles.backgroundHeader} />
      <Image style={styles.kelklopeLogo} source={LOGO_PATH} />
      <TouchableOpacity
        onPressIn={() => {
          navigation.navigate("ResultSearchBar", {
            navigation,
          });
        }}
      >
        <View style={styles.searchBarContainer}>
          <Text style={{left: 10}}>Rechercher ...</Text>
          {loading && <ActivityIndicator />}
          {resultsList}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderComponent;
