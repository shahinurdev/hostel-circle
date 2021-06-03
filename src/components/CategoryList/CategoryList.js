import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

import COLORS from "../../consts/colors";

const CategoryList = ({ navigation }) => {
  const categories = ["All", "Popular", "Top Rated", "Featured"];
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);
  return (
    <View style={style.categoryListContainer}>
      {categories.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.8}
          onPress={() => setSelectedCategoryIndex(index)}
        >
          <View>
            <Text
              style={{
                ...style.categoryListText,
                color:
                  selectedCategoryIndex == index ? COLORS.primary : COLORS.grey,
              }}
            >
              {item}
            </Text>
            {selectedCategoryIndex == index && (
              <View
                style={{
                  height: 3,
                  width: 30,
                  backgroundColor: COLORS.primary,
                  marginTop: 2,
                }}
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const style = StyleSheet.create({
  categoryListContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 20,
    marginTop: 30,
  },
  categoryListText: {
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default CategoryList;
