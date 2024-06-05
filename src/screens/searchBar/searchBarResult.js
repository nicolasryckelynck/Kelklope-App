import React, {useState, useEffect, useCallback} from "react";
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  StatusBar,
  ScrollView,
  Alert,
} from "react-native";
import {styles} from "./styles/searchBarStyle";
import {useNavigation} from "@react-navigation/native";

import SearchBarHeader from "./searchBarHeader";

import {fetchSearchResults} from "./api/fetchSearchResults";

const {height} = Dimensions.get("window");

const ResultSearchBar = ({route}) => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [searchHistoric, setSearchHistoric] = useState([]);

  const navigation = useNavigation();

  const handleSearch = useCallback(() => {
    if (!searchHistoric.includes(search) && search.length > 0) {
      const newSearchHistoric = [search, ...searchHistoric].slice(0, 5);
      setSearchHistoric(newSearchHistoric);
    }
    if (search.length > 0) {
      navigation.navigate("GetAllProducts", {
        itemId: 9,
        items: results,
        search: search,
      });
    } else {
      Alert.alert("Renseigner une recherche");
    }
  }, [search, searchHistoric, results, navigation]);

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true);
      fetchSearchResults(search)
        .then((resultsArray) => {
          setResults(resultsArray);
          setLoading(false);
        })
        .catch((error) => {
          console.error("error: ", error);
          setLoading(false);
        });
    }
  }, [search]);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={{top: height * 0.02}}>
        <SearchBarHeader
          handleSearch={handleSearch}
          setSearch={setSearch}
          search={search}
          loading={loading}
          results={results}
        />
        {search.length <= 0 && (
          <FlatList
            horizontal={true}
            data={searchHistoric.slice(0, 5)}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                style={styles.searchHistoricList}
                onPress={() => {
                  setSearch(item);
                }}
              >
                <Text style={styles.searchHistoricName}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        )}
        <ResultsList results={results} search={search} />
      </View>
    </KeyboardAvoidingView>
  );
};

const ResultsList = ({results, search}) => {
  const navigation = useNavigation();
  if (search.length > 0) {
    if (Array.isArray(results) && results[2]) {
      return (
        <ScrollView>
          {results[2].slice(0, 8).map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("descriptionProduct", {
                  data: item,
                  category: item["fk_category_id"],
                  searchBar: 1,
                });
              }}
              key={index}
            >
              <View style={styles.resultView}>
                <Text style={styles.itemTitle}>{item.titre}</Text>
                <Image
                  style={styles.itemImage}
                  source={{uri: item.image_url}}
                />
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      );
    }
  } else {
    return <Text style={styles.noneResult}>Aucun résultat</Text>;
  }
};

export default ResultSearchBar;
