import React, { Children } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default Row = (props) => {

  return (
    <View style={[props.style, { flexDirection: 'row' }]}>
      {props.children}
    </View>
  );
  
}