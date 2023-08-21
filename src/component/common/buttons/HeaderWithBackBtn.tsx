import { StyleSheet, Text, View,TouchableOpacity ,Image, SafeAreaView} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Dimensions } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default function HeaderWithBackBtn() {
  const { width, height } = Dimensions.get('window');

  
    const navigation = useNavigation();
    const vector1Img = require('../../../../assets/images/Vector1.png')
  return (
   <SafeAreaView>
     <View style={styles.container}>
       <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.containerImg}>
         <Ionicons name='chevron-back-outline' size={responsiveScreenWidth(4)} color='black'/>
        </TouchableOpacity>
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
  image: {
    width: 5,
    height: 10,
  },

})