import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import COLORS from "../../consts/colors";

const TopHostelCard = ({ hostel }) => {
  return (
    <View style={style.topHostelCard}>
      <View
        style={{
          position: "absolute",
          top: 5,
          right: 5,
          zIndex: 1,
          flexDirection: "row",
        }}
      >
        <Icon name="star" size={15} color={COLORS.orange} />
        <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 15 }}>
          5.0
        </Text>
      </View>
      <Image style={style.topHostelCardImage} source={hostel.image} />
      <View style={{ paddingVertical: 5, paddingHorizontal: 10 }}>
        <Text style={{ fontSize: 10, fontWeight: "bold" }}>{hostel.name}</Text>
        <Text style={{ fontSize: 7, fontWeight: "bold", color: COLORS.grey }}>
          {hostel.location}
        </Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  topHostelCard: {
    height: 120,
    width: 120,
    backgroundColor: COLORS.white,
    elevation: 15,
    marginHorizontal: 10,
    borderRadius: 10,
  },
  topHostelCardImage: {
    height: 80,
    width: "100%",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
});

export default TopHostelCard;
