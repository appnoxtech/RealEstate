import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

interface props {
  BtnRightHandler(): void;
}

const BtnRight: FC<props> = ({BtnRightHandler}) => {
  return (
    <TouchableOpacity onPress={BtnRightHandler} style={styles.btn}>
      <AntDesign
        name="doubleright"
        size={responsiveScreenWidth(10)}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default BtnRight;

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: 'gray',
    borderRadius: responsiveScreenWidth(10),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(8),
  },
});
