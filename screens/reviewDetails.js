  
import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card'

export default function reviewDetails({route}) {
  
  const {title,body,rating} = route.params;

  const ratingHeart = { 
    '1': require('../assets/rating-1.png'),
    '2': require('../assets/rating-2.png'),
    '3': require('../assets/rating-3.png'),
    '4': require('../assets/rating-4.png'),
    '5': require('../assets/rating-5.png')
  }

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.paragraph}>{body}</Text>
        <View style={styles.ratingStyle}>
          <Text style={globalStyles.titleText}>GameZone rating: </Text>
          <Image  style={{width: 21*rating, height: 21}} source= {ratingHeart[rating]} />
        </View>     
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  ratingStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth:1,
    borderTopColor: '#eee'
  }
})

