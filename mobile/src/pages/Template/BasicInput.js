import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export default function BasicInput(props) {
  return (
    <TextInput
       // Inherit any props passed to it; e.g., multiline, numberOfLines below
       {...props}
      style={styles.labelInput}
      placeholderTextColor="#616161"
      selectionColor="#3B5C2F"
    />
  );
}

const styles = StyleSheet.create({
    labelInput:{
        borderTopRightRadius:40,
        borderTopLeftRadius:40,
        borderRadius: 40,
        backgroundColor: "#CCCCCC",
        paddingLeft: 10,
        height: 65,
        fontSize: 16,
        paddingStart: 25,
        color: "#3B5C2F"
    },
})

