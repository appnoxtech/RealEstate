import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

export default function BackWithSetting() {
  const navigation = useNavigation();
  const chevronDownImg = require('../../../../assets/images/ChevronDown.png');
  const settingImg = require('../../../../assets/images/Setting.png');

  return (
    <SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.containerImg}>
          <Image
            style={styles.image}
            source={chevronDownImg}
          />
        </TouchableOpacity>
        <TouchableOpacity
        //   onPress={}
          style={styles.containerImg}>
          <Image
            style={styles.image}
            source={settingImg}
          />
        </TouchableOpacity>
    
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: responsiveScreenWidth(2)
    },
    containerImg: {
        borderRadius: responsiveScreenWidth(7),
        backgroundColor: '#F5F4F8',
        borderColor: '#F5F4F8',
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        borderRadius: 20,
        backgroundColor: '#F5F4F8',
        borderColor: '#F5F4F8',
        width: 83,
        height: 36,
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 20,
        height: 20,
      },
})