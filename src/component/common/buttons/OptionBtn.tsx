import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, { FC } from 'react';

interface props {
  btnPressHandler(label: string): void;
    label: string;
    style: StyleProp<ViewStyle>,
    id: string;
};

const OptionBtn:FC<props> = ({ btnPressHandler, label, style, id }) => {
 
  
  return (
    <TouchableOpacity
    onPress={() => btnPressHandler(id)} style={style}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({});
