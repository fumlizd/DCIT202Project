import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View, Image, StyleSheet } from "react-native";

const ProductDetails = ({ route, navigation }) => {
  const { id, retailPrice, title, media, year, brand, gender } = route.params;

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#fff", position: "relative" }}
    >
      <View>
        <View style={styles}>{gender}</View>
      </View>
      <View>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: `${media.imageUrl}` }}
        />
      </View>
      <View>
        <Text
          style={{
            fontSize: 22,
            fontWeight: "500",
            textAlign: "center",
          }}
        >
          {title}
        </Text>
        <Text style={{ color: "grey", fontSize: 16 }}>
          {brand} | {year}
        </Text>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: "grey" }}>Size:</Text>
        <View active={size === 6} onPress={() => setSize(6)}>
          <Text>US 6</Text>
        </View>
        <View active={size === 7} onPress={() => setSize(7)}>
          <Text>US 7</Text>
        </View>
        <View active={size === 8} onPress={() => setSize(8)}>
          <Text>US 8</Text>
        </View>
        <View active={size === 9} onPress={() => setSize(9)}>
          <Text>US 9</Text>
        </View>
      </View>
      <View>
        <Text style={{ fontSize: 18, color: "grey" }}>Available Colors:</Text>
        <View
          color="#271"
          active={color === "#271"}
          onPress={() => setColor("#271")}
        ></View>
        <View
          color="#d21"
          active={color === "#d21"}
          onPress={() => setColor("#d21")}
        ></View>
        <View
          color="#de2"
          active={color === "#de2"}
          onPress={() => setColor("#de2")}
        ></View>
        <View
          color="#2711ee"
          active={color === "#2711ee"}
          onPress={() => setColor("#2711ee")}
        ></View>
      </View>
      <View style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
        <View>
          <View
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#fff",
              borderTopLeftRadius: 30,
            }}
          >
            <Text
              style={{
                fontSize: 28,
                fontWeight: "700",
              }}
            >
              $ {retailPrice}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              flex: 0.5,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
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
