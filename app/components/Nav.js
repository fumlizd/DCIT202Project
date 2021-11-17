import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const ProductDetails = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { id, retailPrice, title, media, year, brand, gender } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
    ></SafeAreaView>
  );
};

const styles = StyleSheet.create({
  productHeader: {
    flexDirection: "row",
    width: "100%",
    padding: 20,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    flexBasis: "10%",
  },
  productGender: {
    flexDirection: "row",
    flexBasis: "8%",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  productGenderText: {
    backgroundColor: "#dd2",
    padding: 10,
    borderRadius: 5,
    textTransform: capitalize,
    fontSize: 16,
  },
  productImage: {
    flexBasis: "38%",
    justifyContent: "center",
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
  },
  productName: {
    flexBasis: "10%",
    justifyContent: "space-evenly",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "#f0f0f0",
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  productSize: {
    flexBasis: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    backgroundColor: "#f0f0f0",
    alignItems: "center",
  },
  productSizeContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
  },
  productPrice: {
    flexDirection: "row",
    flex: 1,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});

export default ProductDetails;
