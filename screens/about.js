  
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {globalStyles} from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.paragraph}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at lobortis tellus. Phasellus tortor justo, ullamcorper et lacinia ac, posuere quis arcu. Nullam erat lorem, egestas nec odio ut, tincidunt ultrices augue. Sed enim risus, blandit at leo ut, hendrerit sagittis turpis. Praesent vestibulum posuere pulvinar. 
      Nulla sed pellentesque purus. Donec imperdiet gravida commodo.</Text>
    </View>
  );
}
