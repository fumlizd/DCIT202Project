import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";

import Product from "../components/Product";
import { Feather } from "@expo/vector-icons";

const Home = () => {
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fcd6ff" }}>
      <Text>Mama D's Shoes</Text>
      <Text>Best of sneakers, all in one place</Text>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});