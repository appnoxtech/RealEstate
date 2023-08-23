import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import {
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { width } from '../../../utils/constants/Matrics';
import { dark } from '../../../../assets/Styles/GlobalTheme';

export default function SettingButton({onPress}: any) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.containerImg, width > 500 && styles.containerImg1]}>
      <Ionicons
        name="settings-outline"
        size={responsiveWidth(3.5)}
        color={dark}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  containerImg: {
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerImg1: {
    width: responsiveScreenWidth(7.5),
    height: responsiveScreenWidth(7.5),
  },

  image: {
    width: 20,
    height: 20,
  },
});
