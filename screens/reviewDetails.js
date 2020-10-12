  
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {globalStyles} from '../styles/global';
import Card from '../shared/card'

export default function reviewDetails({route}) {
  
  const {title,body,rating} = route.params;

  return (
    <View style={globalStyles.container}>
      <Card>
        <Text style={globalStyles.titleText}>{title}</Text>
        <Text style={globalStyles.titleText}>{rating}</Text>
        <Text style={globalStyles.titleText}>{body}</Text>
      </Card>
    </View>
  );
}

