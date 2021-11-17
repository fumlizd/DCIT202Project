import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Product = ({ submit, image, title, description, price, brand }) => {
  const { imageUrl } = image;

  return (
    <TouchableOpacity style={styles.product}>
      <View style={styles.productImage}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
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
          <TouchableOpacity onPress={submit} style={styles.addBtn}>
            <Text style={styles.btnText}>buy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  product: {
    width: "90%",
    height: 200,
    marginVertical: 10,
    backgroundColor: "#f2f5e2",
    borderRadius: 20,
    flexDirection: "row",
    overflow: "hidden",
  },
  productImage: {
    flexBasis: "40%",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 90,
    height: 60,
  },
  productDetails: { flex: 1 },
  productTitle: { flexBasis: "35%" },
  title: { fontSize: 18, fontWeight: "bold", textAlign: "left" },
  subTitle: { fontSize: 12 },
  productDescription: { flexBasis: "30%" },
  description: { fontSize: 15 },
  productPrice: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    marginHorizontal: "auto",
  },
  price: { fontSize: 18, fontWeight: "bold" },
  addBtn: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: "#123",
    borderRadius: 10,
  },
  btnText: { textTransform: "capitalize", color: "#fff" },
});

export default Product;
