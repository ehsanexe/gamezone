import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Navigator headerMode="screen" 
    screenOptions={{
      headerStyle: { backgroundColor: 'darkred',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
    
    <Screen name="Home" component={Home} 
    options={ {headerTitle: () => <Header navigation={navigation} title='GameZone' />}}/>

    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeStack
