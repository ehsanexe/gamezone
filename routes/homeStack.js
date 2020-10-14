import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";
import {Image} from "react-native"

const { Navigator, Screen } = createStackNavigator();

const HomeStack = ({ navigation }) => (
  <Navigator headerMode="screen" 
    screenOptions={{
      headerStyle: { backgroundColor: 'white'},
      headerTintColor: 'black',
      headerTitleStyle: {fontWeight: 'bold',},
    }}>
    
    <Screen name="Home" component={Home} 
    options={ {headerTitle: () => <Header navigation={navigation} title='GameZone' /> ,
    headerBackground: () => <Image source={require('../assets/game_bg.png')}
    style={{width:'100%',height:'100%'}} />,
    
    }}/>

    <Screen name="ReviewDetails" component={ReviewDetails} />
  </Navigator>
);

export default HomeStack
