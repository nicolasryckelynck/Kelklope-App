import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";

import {styles} from "./styles/searchBarStyle";

export default function SearchBarHeader({
  handleSearch,
  setSearch,
  search,
  loading,
  results,
}) {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        style={styles.goBackButton}
        onPress={() => navigation.goBack()}
      >
        <AntDesign name="arrowleft" size={28} color="#436B92" />
      </TouchableOpacity>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.inputSearchBar}
          returnKeyType="search"
          onSubmitEditing={handleSearch}
          placeholder="Rechercher un produit ..."
          onChangeText={(text) => {
            setSearch(text);
          }}
          value={search}
        />
        {search.length > 0 && (
          <TouchableOpacity
            style={styles.deleteEnterTextButton}
            onPress={() => setSearch("")}
          >
            <Text style={styles.deleteEnterText}>X</Text>
          </TouchableOpacity>
        )}
        {loading && <ActivityIndicator />}
      </View>
      <View style={styles.historicResearchView}>
        <Text style={styles.historicResearchText}>Historique de recherche</Text>

        <TouchableOpacity onPress={() => handleSearch()} style={{left: 95}}>
          {results.length > 0 && (
            <Text style={styles.allResultText}>Tous les résultats</Text>
          )}
        </TouchableOpacity>
      </View>
    </>
  );
}
