import React from "react";
import { Feather } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";

const Nav = () => {
  return (
    <View style={{ flexDirection: "row", flex: 1 }}>
      <View
        style={{ flex: 0.5, justifyContent: "center", alignItems: "center" }}
      >
        <Feather size={24} color="grey" name="home" />
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Feather size={24} color="grey" name="shopping-bag" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Nav;
