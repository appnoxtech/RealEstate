import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { FC } from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

interface props {
    BtnLeftHandler() : void;
}

const BtnLeft:FC <props> = ({BtnLeftHandler}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress={BtnLeftHandler}>
      <AntDesign
        name="doubleleft"
        size={responsiveScreenWidth(10)}
        color="white"
      />
    </TouchableOpacity>
  );
};

export default BtnLeft;

const styles = StyleSheet.create({
  btn: {
    // backgroundColor: 'gray',
    borderRadius: responsiveScreenWidth(10),
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(8),
  },
});
