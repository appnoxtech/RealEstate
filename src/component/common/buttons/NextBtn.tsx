import { StyleSheet, Text, View,TouchableOpacity ,Image, SafeAreaView} from 'react-native'
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function NextBtn() {

  
    const navigation = useNavigation();
    
  return (
   <SafeAreaView>
     <View style={styles.container}>
       <TouchableOpacity
          onPress={() => navigation.navigate()}
          style={styles.containerImg}>
          <FontAwesome name='check' size={responsiveWidth(6)} color={'#3fc888'}/>
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
    borderWidth: responsiveScreenWidth(1),
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#3fc888',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },

})