import { SafeAreaView, StyleSheet, Text, View,TouchableOpacity, Image } from 'react-native'
import React from 'react';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

export default function BackWithSkip() {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
        <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.containerImg}>
          <Image
            style={styles.image}
            source={require('../../../../assets/images/Vector1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity
        // onPress={() => navigation.navigate('Login' as never)}
        style={styles.button}>
        <Text style={{fontSize: 12}}>Skip</Text>
      </TouchableOpacity>
        </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    containerImg: {
        borderWidth: 1,
        borderRadius: responsiveScreenWidth(7),
        backgroundColor: '#F5F4F8',
        borderColor: '#F5F4F8',
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        alignItems: 'center',
        justifyContent: 'center',
      },
    button: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F5F4F8',
        width: 83,
        height: 36,
        backgroundColor: '#F5F4F8',
        alignItems: 'center',
        justifyContent: 'center',
      },
      image: {
        width: 5,
        height: 10,
      },
})