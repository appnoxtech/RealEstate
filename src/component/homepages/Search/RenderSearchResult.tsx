import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import CategoryEstate from '../../../screens/homepage/CategoryEstate';
import { dark } from '../../../../assets/Styles/GlobalTheme';

const RenderSearchResult: React.FC<any> = ({route}) => {
  const {cityData, cityName} = route.params;
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <HeaderWithBackBtn />
          <Text style={styles.typeText}>
            Searched Results
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
    backgroundColor: '#fff',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1.6),
    gap: responsiveScreenHeight(3)
  },
  typeText: {
    color: dark,
    paddingTop: responsiveScreenHeight(1),
    fontSize: responsiveFontSize(2.5),
  },
  typeTitle: {},
  cityname: {
    color: '#8BC83F',
  },
});
