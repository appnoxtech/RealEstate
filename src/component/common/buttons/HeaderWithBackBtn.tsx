import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ViewStyle,
} from 'react-native';
import React, { FC } from 'react';
import {useNavigation} from '@react-navigation/native';
import {responsiveScreenWidth} from 'react-native-responsive-dimensions';
import {Dimensions} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleProp } from 'react-native';

interface props {
  style?: StyleProp<ViewStyle>;
}


const HeaderWithBackBtn:FC <props> = ({style}) => {
  const {width, height} = Dimensions.get('window');



  const navigation = useNavigation();
  const vector1Img = require('../../../../assets/images/Vector1.png');
  return (
    <TouchableOpacity
      onPress={() => navigation.goBack()}
      style={[styles.containerImg, width > 500 && styles.containerImg1 , style]}>
      <Ionicons
        name="chevron-back-outline"
        size={responsiveScreenWidth(4)}
        color="black"
      />
    </TouchableOpacity>
  );
}

export default HeaderWithBackBtn
const styles = StyleSheet.create({
 
  containerImg: {
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    width:  responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerImg1: {
    width:  responsiveScreenWidth(7.5),
    height: responsiveScreenWidth(7.5),
  }
  
});
