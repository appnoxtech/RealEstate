import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, { FC } from 'react';

interface props {
  btnPressHandler(label: string, isSelected: boolean): void;
    label: string;
    style: StyleProp<ViewStyle>,
    id: string;
    isSelected: boolean;
};

const OptionBtn:FC<props> = ({ btnPressHandler, label, style, id, isSelected }) => {
 
  
  return (
    <TouchableOpacity
    onPress={() => btnPressHandler(id, !isSelected)} style={style}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({});
