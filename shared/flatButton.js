import React from 'react';
import {StyleSheet,TouchableOpacity,Text,View} from 'react-native';

export default function FlatButton({title,onPress}) {

    return(
        <TouchableOpacity onPress={onPress}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{title}</Text>
            </View>
        </TouchableOpacity>
    )
    
}

const styles = StyleSheet.create({
    button:{
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: 'darkred',
    },

    buttonText:{
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center',
    }
})