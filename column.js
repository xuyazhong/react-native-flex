import React, { Children } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default Column = (props) => {

  return (
    <View style={[props.style, { flexDirection: 'column' }]}>
      {props.children}
    </View>
  );

}
