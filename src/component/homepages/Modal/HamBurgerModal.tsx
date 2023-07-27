import {
    SafeAreaView,
    View,
    FlatList,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    TextInput,
    Image,
    
    Alert,
  } from 'react-native';
  import {useState} from 'react';
  import React from 'react';
  import {
    responsiveScreenHeight,
    responsiveScreenWidth,
  } from 'react-native-responsive-dimensions';
  
  const HamBurgerPage: React.FC<any> = () => {
  
     
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.centeredView}>
        <Text>Hey there I'm Hamburger </Text>
      </View>
      </SafeAreaView>
    );
  };
  
  export default HamBurgerPage;
  

    const styles = StyleSheet.create({
        centeredView: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 22,
        },
        
      });
   

  