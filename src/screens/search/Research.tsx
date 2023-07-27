import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';

export default function Research() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
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
});
