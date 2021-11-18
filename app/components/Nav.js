import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Nav = ({ navigation }) => {
  return (
    <View style={{ flexDirection: "row", flex: 1, width: "100%" }}>
      <TouchableOpacity
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <Feather size={24} color="grey" name="home" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Feather size={24} color="grey" name="shopping-bag" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Nav;
