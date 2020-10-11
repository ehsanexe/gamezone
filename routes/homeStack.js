import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = () => (
  <Navigator headerMode="screen" 
    screenOptions={{
      headerStyle: { backgroundColor: 'darkred',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
    
    <Screen name="Home" component={Home} options={ {title:'GameZone'}}/>
    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeStack
