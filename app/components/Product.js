import React from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";

const Product = ({ image, title, description, price, brand }) => {
  return (
    <View style={styles.product}>
      <View style={styles.productImage}>
        <Image source={{ uri: `${image}` }} style={styles.image} />
      </View>
      <View style={styles.productDetails}>
        <View style={styles.productTitle}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>by {brand}</Text>
        </View>
        <View style={styles.productDescription}>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.productPrice}>
          <Text style={styles.price}>$ {price}</Text>
          <Button style={styles.addBtn}>
            <Text style={styles.btnText}>add</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {},
  productImage: {},
  productDetails: {},
  image: {},
  productPrice: {},
  price: {},
  productTitle: {},
  title: {},
  subTitle: {},
  productDescription: {},
  description: {},
  addBtn: {},
  btnText: { textTransform: "capitalize" },
});

export default Product;
