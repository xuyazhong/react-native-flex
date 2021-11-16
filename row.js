import React, { Children } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';

export default Row = (props) => {

  function rowComponent() {
    return (
      <View style={ [props.style, { flexDirection: 'row' }]}>
        {props.children}
      </View>
    )
  }

  return props.onPress ? (
    <TouchableOpacity onPress={props.onPress}>
      {rowComponent()}
    </TouchableOpacity>
  ) : rowComponent()

}