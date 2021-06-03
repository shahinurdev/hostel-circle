import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

const SearchBar = () => {
  return (
    <View style={style.searchInputContainer}>
      <Icon name="search" size={30} style={{ marginLeft: 20 }} />
      <TextInput
        placeholder="Search"
        style={{ fontSize: 20, paddingLeft: 10 }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  searchInputContainer: {
    height: 50,
    backgroundColor: COLORS.light,
    marginTop: 15,
    marginLeft: 20,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SearchBar;
