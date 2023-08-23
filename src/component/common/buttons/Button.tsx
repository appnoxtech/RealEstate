import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../utils/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveHeight, responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";

type ButtonProps = {
  onPress: () => void;
  title: string;
};

const Button = ({ onPress }: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.9}
      style={styles.button}
    >
      <Ionicons name="menu" size={responsiveWidth(6)} color={'#234F68'}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: responsiveWidth(10),
    height: responsiveHeight(5),
    backgroundColor: '#F5F4F8',
    justifyContent: "center",
    alignItems: "center",
    borderRadius: responsiveWidth(10),
    // paddingHorizontal: responsiveScreenWidth()
  },
  
});

export default Button;
