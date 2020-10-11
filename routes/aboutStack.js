import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = () => (
  <Navigator headerMode="screen" 
    screenOptions={{
      headerStyle: { backgroundColor: 'darkred',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
    
    <Screen name="About" component={About} />
  </Navigator>
);

export default AboutStack