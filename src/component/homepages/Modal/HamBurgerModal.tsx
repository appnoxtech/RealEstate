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
    Pressable,
  } from 'react-native';
  import {useState} from 'react';
  import React from 'react';
  import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  
  const HamBurgerModal: React.FC<any> = ({title, modalOpen, setTitle, children}) => {
  
    return (
      <View style={styles.centeredView}>
        <View style={styles.headerContainer}>
          <View style={styles.firstChar}>
            <Text>G</Text>
          </View>
          <View style={styles.userName}>
            <Text>Govind</Text>
            <Text>Owener Profile<TouchableOpacity><Text>Manage Profile</Text></TouchableOpacity></Text>
          </View>
        </View>
      </View>
    );
  };
  
  export default HamBurgerModal;
  

    const styles = StyleSheet.create({
        centeredView: {
          flex: 1,
          alignItems: 'center',
          marginTop: 22,
          backgroundColor: '#fff'
        },
        headerContainer: {
          flexDirection: 'row'
          
        },
        firstChar: {
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: responsiveScreenWidth(10),
          height: responsiveScreenHeight(5),
          borderWidth: responsiveWidth(0.1),
          borderRadius: responsiveWidth(5),
        },
        userName: {

        },

      });
   

  