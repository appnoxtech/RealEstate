import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

export default function Research() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <HeaderWithBackBtn />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(2)
  }
});
