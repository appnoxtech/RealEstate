import {Platform, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {dark} from '../../../assets/Styles/GlobalTheme';
const padding =
  Platform.OS === 'android'
    ? responsiveScreenHeight(2)
    : responsiveScreenHeight(0);


const EditProfile = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <View style={styles.backButton}>
          <HeaderWithBackBtn />
          <Text style={styles.profileText}>Profile Detail</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: padding,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(10),
  },
  profileText: {
    color: dark,
  }
});
