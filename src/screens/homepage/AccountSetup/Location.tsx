import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
} from 'react-native';
import React from 'react';
import BackWithSkip from '../../../component/common/buttons/BackWithSkip';
import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const mapsicalImg = require('../../../../assets/images/MapsicleMap.png')

const Location = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <BackWithSkip />
        <Text style={styles.text}>
          Add your <Text style={styles.subText}>location </Text>{' '}
        </Text>
        <Text style={styles.text1}>
          You can edit this later on your account setting.
        </Text>
        <ImageBackground
          style={styles.backGroundImage}
          source={mapsicalImg}
          resizeMode="cover"></ImageBackground>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1),
  },
  text: {
    fontSize: 25,
    paddingVertical: responsiveScreenHeight(2),
  },
  subText: {
    color: '#1F4C6B',
  },
  text1: {
    fontSize: 12,
    marginBottom: responsiveScreenHeight(2),
  },
  backGroundImage: {
    width: responsiveScreenWidth(91),
    height: responsiveScreenHeight(50),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: responsiveScreenHeight(2),
  },
  image: {
    width: responsiveWidth(93),
    height: responsiveHeight(50),
  },
});
