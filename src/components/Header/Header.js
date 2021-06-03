import React from "react";
import { StyleSheet, View, Text } from "react-native";
import COLORS from "../../consts/colors";

const Header = () => {
  return (
    <View style={style.header}>
      <View style={{ paddingBottom: 15 }}>
        <Text style={{ fontSize: 36, fontWeight: "bold", textAlign: "center", color: COLORS.primary }}>
          Hostel Circle
        </Text>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontSize: 20, fontWeight: "normal", textAlign: "center" }}>Find Your Hostel in </Text>
          <Text
            style={{ fontSize: 20, fontWeight: "normal", color: COLORS.primary }}
          >
            Thailand
          </Text>
        </View>
      </View>
      
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});

export default Header;
