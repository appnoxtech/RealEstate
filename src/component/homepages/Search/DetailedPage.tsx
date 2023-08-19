import {SafeAreaView, StyleSheet, View, Text, Platform} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import { dark } from '../../../../assets/Styles/GlobalTheme';

const DetailedPage = ({route}: any) => {
  const {data} = route.params;
  console.log("--->",data.city);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.backButton}>
          <HeaderWithBackBtn />
        </View>
        <Text style={styles.location}>{data.state}</Text>
      </View>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveScreenWidth(3),
    gap: responsiveHeight(3),
  },
  backButton: {
    paddingVertical:
      Platform.OS === 'android'
        ? responsiveScreenHeight(2)
        : 0,
  },
  location: {
    color: dark,
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(4),
  },
});
