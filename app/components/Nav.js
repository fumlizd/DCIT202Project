import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Nav = () => {
  return (
    <View style={styles.nav}>
      <Text>Nav bottom</Text>
    </View>
  );
};

export default Nav;

const styles = StyleSheet.create({
  nav: { flex: 1, width: "100%", backgroundColor: "orange" },
});
