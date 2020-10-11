import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';

export default function Header( {navigation,title} ) {

    const pressHandler = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header}>
            <MaterialIcons name="menu" size={24} color="black" onPress={pressHandler} style={styles.icon}/>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    header: {
        width:Dimensions.get('screen').width,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    text: {
        fontWeight: "bold",
        fontSize: 20,
        letterSpacing: 1
    },

    icon: {
        position: 'absolute',
        left: 16,
      }
})