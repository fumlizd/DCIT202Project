import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import Product from "../components/Product";
import Nav from "../components/Nav";
import { Feather } from "@expo/vector-icons";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      url: "https://v1-sneakers.p.rapidapi.com/v1/sneakers",
      params: { limit: 20 },
      headers: {
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
        "x-rapidapi-key": "1b57056966msh11d5b7a4b809460p1ce20cjsnb4e7cb94a092",
      },
    };

    //setting the products data back from the api to the products state
    axios
      .request(options)
      .then((data) => setProducts(data.data.results))
      .catch((err) => alert(err.message));
  }, []);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.heading}>
        <Text style={styles.mainHeading}>Mama D's Shoes</Text>
        <Text style={styles.subHeading}>
          Best of sneakers, all in one place
        </Text>
      </View>
      <View style={styles.search}>
        <TextInput style={styles.searchInput} placeholder="Search" />
      </View>
      <View style={styles.tabs}>
        <View style={[styles.tab, styles.tabActive]}>
          <Text style={[styles.tabText, { color: "#fff" }]}>all</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>shoes</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>bag</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>clothing</Text>
        </View>
        <View style={styles.tab}>
          <Text style={styles.tabText}>cap</Text>
        </View>
      </View>
      <ScrollView
        style={styles.scrollview}
        contentContainerStyle={{
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        {products &&
          products.map((product) => (
            <Product
              submit={() =>
                navigation.navigate("ProductDetails", { ...product })
              }
              key={product.id}
              image={product.media}
              price={product.retailPrice}
              title={product.shoe}
              description={product.title}
              brand={product.brand}
            />
          ))}
      </ScrollView>
      <Nav />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  safeContainer: { flex: 1, backgroundColor: "#fff", paddingHorizontal: 20 },
  heading: { flexBasis: "10%" },
  mainHeading: { fontSize: 30, fontWeight: "bold" },
  subHeading: { color: "grey", fontSize: 20 },
  search: { flexBasis: "10%", justifyContent: "center", alignItems: "center" },
  searchInput: {
    width: "80%",
    backgroundColor: "#f2f2f2",
    padding: 10,
    borderRadius: 5,
  },
  tabs: {
    flexBasis: "10%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  tab: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 10 },
  tabActive: { backgroundColor: "orange" },
  tabText: {
    textTransform: "capitalize",
  },
  scrollview: {
    flexBasis: "50%",
    flexDirection: "column",
  },
});
