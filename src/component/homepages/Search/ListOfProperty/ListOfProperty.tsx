import { SafeAreaView,StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import HeaderWithBackBtn from '../../../common/buttons/HeaderWithBackBtn';


const ListOfProperty = ({route} : any) => {


 

  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <HeaderWithBackBtn />
        <Text style={styles.typeText}>
          <Text style={styles.typeTitle}>{route.params.title}</Text> Properties in <Text style={styles.cityname}>{route.params.cityName}</Text>
        </Text>
      </View>
      <View>
      </View>
    </SafeAreaView>
  );
};

export default ListOfProperty;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveScreenWidth(2.5),
    
  },
  typeText: {
    marginTop: responsiveScreenHeight(8),
    fontSize: responsiveFontSize(3),
  },
  item: {
    backgroundColor: '#8BC83F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  typeTitle: {
    color: '#8BC83F'
  },
  title: {
    fontSize: 32,
  },
  cityname: {},
});
