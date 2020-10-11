import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => (
  <Navigator headerMode="screen" 
    screenOptions={{
      headerStyle: { backgroundColor: 'darkred',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
    
    <Screen name="About" component={About} 
    options={ {headerTitle: () => <Header navigation={navigation} title='About'/>} }/>

  </Navigator>
);

export default AboutStack