import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import HeaderWithBackBtn from '../../../common/buttons/HeaderWithBackBtn';
import CategoryEstate from '../../../../screens/homepage/CategoryEstate';
import { SearchPropertyService } from '../../../../services/properties';
import { dark } from '../../../../../assets/Styles/GlobalTheme';

const ListOfProperty:React.FC<any> = ({route}) => {
  const {cityName} = route.params;
  const [cityData, setCityData] = useState([]);

  const GetPropertyData = async () => {
    try {
      const res = await SearchPropertyService(cityName);
      const {result} = res.data;
      if (result.rows) {
        setCityData(result.rows);
      } else {
        setCityData([]);
      }
    } catch (error) {
      Alert.alert('', 'Error');
    }
  };

  useEffect(() => {
    GetPropertyData();
  }, []);

  console.log('cityData', cityData);
  

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View
          style={styles.headerContainer}>
          <HeaderWithBackBtn />
          <Text style={styles.typeText}>
            <Text style={styles.typeTitle}>{route.params.title} </Text>
            Properties in
            <Text style={styles.cityname}> {route.params.cityName}</Text>
          </Text>
        </View>
        <CategoryEstate cityData={cityData} />
      </View>
    </SafeAreaView>
  );
};

export default ListOfProperty;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  typeText: {
    color: dark,
    paddingTop: responsiveScreenHeight(1.5),
    fontSize: responsiveFontSize(3),
  },
  item: {
    backgroundColor: '#8BC83F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  typeTitle: {
    
  },
  title: {
    fontSize: 32,
  },
  cityname: {
    color: '#8BC83F',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: responsiveScreenHeight(2),
    paddingRight: responsiveScreenWidth(18)
  }
});
