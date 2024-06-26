import * as React from "react";
import {Searchbar} from "react-native-paper";

const SearchBar = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <Searchbar
      style={{
        width: "93%",
        left: "6%",
        backgroundColor: "#E8E8E8",
      }}
      placeholder="Rechercher un produit"
      onChangeText={onChangeSearch}
      value={searchQuery}
    />
  );
};

export default SearchBar;
