import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

export default function SettingButton() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
       
        <TouchableOpacity
        //   onPress={}
          style={styles.containerImg}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/Setting.png')}
          />
        </TouchableOpacity>
    
    </SafeAreaView>
  )
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
   
      image: {
        width: 20,
        height: 20,
      },
})