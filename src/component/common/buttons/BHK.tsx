import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Children, FC, ReactNode} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
interface props {
  children: ReactNode;
  bgColor?: string;
}
const BHK: FC<props> = ({children, bgColor='#F5F4F8'}) => {
  return (
    <TouchableOpacity style={[styles.item, {backgroundColor: bgColor}]}>
       {children}
    </TouchableOpacity>
  );
};

export default BHK;

const styles = StyleSheet.create({
  item: {
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(2),
    marginHorizontal: responsiveScreenWidth(1.5),
    borderRadius: responsiveWidth(5),
  },
});
