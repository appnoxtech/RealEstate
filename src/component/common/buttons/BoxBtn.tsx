import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { FC } from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import { dark } from '../../../../assets/Styles/GlobalTheme';

interface props {
    number: number;
    title: string;
    page: string;
}

const BoxBtn:FC <props> = ({number, title, page}) => {
  const navigation = useNavigation();
    const handelPress = () => {
      navigation.navigate(page as never)
    }
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handelPress} style={styles.responseBox}>
        <Text style={styles.boxText}>{number}</Text>
        <Text style={styles.boxText}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default BoxBtn;

const styles = StyleSheet.create({
  responseBox: {
    alignItems: 'center',
    // alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.1),
    borderRadius: responsiveWidth(5),
    paddingHorizontal: responsiveScreenWidth(6),
    paddingVertical: responsiveScreenHeight(1.8),
  },
  boxText: {
    color: dark,
    fontSize: responsiveFontSize(2),
    fontWeight: '400'
  },
});
