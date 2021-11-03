import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./app/screens/Home";
import Home from "./app/screens/Login";

export default function App() {
  const Navigation = createStackNavigator();

  return (
    <NavigationContainer>
      <Navigation.Navigator
        initialRouteName="Login"
        screenOptions={{ headerShown: false }}
      >
        <Navigation.Screen name="Login" component={Login}/>
        <Navigation.Screen name="Home" component={Home}/>
      </Navigation.Navigator>
    </NavigationContainer>
  );
}
