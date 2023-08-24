import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, { FC } from 'react';
import { dark } from '../../../../assets/Styles/GlobalTheme';

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
      <Text style={{ color: dark}}>{label}</Text>
    </TouchableOpacity>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({});
