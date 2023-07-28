import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import COLORS from "../../../utils/Colors";
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from "react-native-responsive-dimensions";

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
      <Ionicons name="menu" size={responsiveWidth(10)} color={'#234F68'}/>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 55,
    // backgroundColor: 'gray',
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  
});

export default Button;
