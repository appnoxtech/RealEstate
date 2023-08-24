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
}
const ReviewButton: FC<props> = ({children}) => {
  return (
    <TouchableOpacity style={styles.item}>
       {children}
    </TouchableOpacity>
  );
};

export default ReviewButton;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#234F68',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(2),
    marginHorizontal: responsiveScreenWidth(1.5),
    borderRadius: responsiveWidth(5),
  },
});
