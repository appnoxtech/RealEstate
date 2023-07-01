import { ImageBackground, SafeAreaView, StyleSheet, Text, View ,Image } from 'react-native'
import React from 'react';

import backGroundImg from '../../../../assets/images/image31.png'
import BackWithSetting from '../../../component/common/buttons/BackWithSetting';

const backGroundImgUri = Image.resolveAssetSource(backGroundImg).uri

export default function Villa() {
  return (
   <SafeAreaView>
    <ImageBackground source={{uri: backGroundImg}}>
        <BackWithSetting />
    </ImageBackground>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({})