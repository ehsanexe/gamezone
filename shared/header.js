import React from 'react';
import { StyleSheet, View, Text , ImageBackground,Image} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 
import { Dimensions } from 'react-native';

export default function Header( {navigation,title} ) {

    const pressHandler = () => {
        navigation.openDrawer()
    }

    return (
        <View style={styles.header} >
            <MaterialIcons name="menu" size={24} color="black" onPress={pressHandler} style={styles.icon}/>
            <View style={styles.headerTitle}>
                <Image style={styles.headerImage} source={require('../assets/heart_logo.png')}/>
                <Text style={styles.text}>{title}</Text>
            </View>     
        </View>           
    )
    
}

const styles = StyleSheet.create({
    header: {
        width:'100%',
        height:'100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
        
    },

    text: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#333',
        letterSpacing: 1
    },

    icon: {
        position: 'absolute',
        left: 16,
    },

    headerImage: {
        width: 26,
        height: 26,
        marginHorizontal: 10
      },

    headerTitle: {
        flexDirection: 'row'
    },
})