import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetails = ({ route, navigation }) => {
  const {} = route.params;
  return (
    <SafeAreaView>
      <Text>Product details page</Text>
    </SafeAreaView>
  );
};

export default ProductDetails;

const styles = StyleSheet.create({});
