import {StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import React, { FC } from 'react';

interface props {
    btnPressHandler(label: string): any,
    label: string;
    style: StyleProp<ViewStyle>
};

const OptionBtn:FC<props> = ({btnPressHandler, label, style}) => {
  return (
    <TouchableOpacity
      onPress={() => btnPressHandler(label)}
      style={style}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default OptionBtn;

const styles = StyleSheet.create({});
