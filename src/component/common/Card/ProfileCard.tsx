import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { FC } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';


interface props {
    title: string;
    iconName1: string;
    iconName2: string;
    onPress(): () => () => () => void;
  }
const ProfileCard: FC<props> =({title, iconName1, iconName2, onPress}) => {
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={onPress} style={styles.communication}>
            <Ionicons name={iconName1} size={responsiveWidth(6)} />
            <Text style={styles.communText}>{title}</Text>
            <Ionicons name={iconName2} size={responsiveWidth(6)} color={'#234F68'}/>
          </TouchableOpacity>
    </SafeAreaView>
  )
}

export default ProfileCard

const styles = StyleSheet.create({
    communication: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#F5F4F8',
        paddingHorizontal: responsiveScreenWidth(10),
        paddingVertical: responsiveScreenHeight(1.7),
      },
      communText: {
        fontSize: responsiveFontSize(2.5)
      },
    
})