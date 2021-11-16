import React, { Children } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default Column = (props) => {

  function columnComponent() {
    return (
      <View style={ [props.style, { flexDirection: 'column' }]}>
        {props.children}
      </View>
    )
  }

  return props.onPress ? (
    <TouchableOpacity onPress={props.onPress}>
      {columnComponent()}
    </TouchableOpacity>
  ) : columnComponent()

}