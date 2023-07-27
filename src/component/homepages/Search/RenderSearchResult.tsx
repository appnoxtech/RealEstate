import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import CategoryEstate from '../../../screens/homepage/CategoryEstate';

const RenderSearchResult:React.FC<any> = ({route}) => {
  const {cityData, cityName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderWithBackBtn />
          <Text style={styles.typeText}>
            {/* <Text style={styles.typeTitle}>{route.params.title} </Text> */}
            Searched Properties in
            <Text style={styles.cityname}> {cityName}</Text>
          </Text>
        </View>
        <CategoryEstate cityData={cityData} />
      </View>
    </SafeAreaView>
  );
};

export default RenderSearchResult;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: responsiveScreenWidth(1.8),
        paddingBottom: responsiveScreenHeight(3),
        paddingRight: responsiveScreenWidth(18),
        
    },
    typeText: {
      marginTop: responsiveScreenHeight(0.5),
      marginLeft: responsiveScreenWidth(2),
        paddingTop: responsiveScreenHeight(1),
        fontSize: responsiveFontSize(2.5),
    },
    typeTitle: {
    
    },
    cityname: {
        color: '#8BC83F',
    },
});
