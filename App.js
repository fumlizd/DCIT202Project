import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./app/screens/Login";
import Home from "./app/screens/Home";
import ProductDetails from "./app/screens/ProductDetails";
import Cart from "./app/screens/Cart";

export default function App() {
  const Navigation = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigation.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }}
      >
        <Navigation.Screen name="Login" component={Login} />
        <Navigation.Screen name="Home" component={Home} />
        <Navigation.Screen name="ProductDetails" component={ProductDetails} />
        <Navigation.Screen name="Cart" component={Cart} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
}
