import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about";
import Header from "../shared/header";
import {Image} from "react-native"

const { Navigator, Screen } = createStackNavigator();

const AboutStack = ({ navigation }) => (
  <Navigator headerMode="screen" 
    screenOptions={{
      headerStyle: { backgroundColor: 'darkred',},
      headerTintColor: '#fff',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
    
    <Screen name="About" component={About} 
    options={ {headerTitle: () => <Header navigation={navigation} title='About'/>,
    headerBackground: () => <Image source={require('../assets/game_bg.png')}
    style={{width:'100%',height:'100%'}} />,
    } }/>

  </Navigator>
);

export default AboutStack