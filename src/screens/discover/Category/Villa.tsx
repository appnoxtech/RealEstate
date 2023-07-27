import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

import {
  responsiveHeight,
  responsiveScreenHeight,
  responsiveWidth,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FeaturedCategories from '../../homepage/FeaturedCategories';
import CategoryEstate from '../../homepage/CategoryEstate';
import BackWithSetting from '../../../component/common/buttons/BackWithSetting';
import AddCityName from '../../../component/homepages/Modal/AddCityName';
import { useNavigation } from '@react-navigation/native';

export default function Villa() {
  const backGroundImg = require('../../../../assets/images/image31.png');
  const searchImg = require('../../../../assets/images/Search.png');
  const showImg = require('../../../../assets/images/Show.png');
  const horizontalImg = require('../../../../assets/images/HorizontalActive.png');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          style={styles.containerImage}
          imageStyle={styles.containerImage}
          source={backGroundImg}>
          <BackWithSetting />
        </ImageBackground>
        <View style={styles.container}>
          <Text style={{fontSize: 18, color: '#252B5C'}}>Top Villa</Text>
          <FeaturedCategories />
          <TouchableOpacity
            onPress={() => navigation.navigate('SearchFilterPage' as never)}
            style={styles.serchContainer}>
            <Text>
              <Text style={{fontWeight: 'bold'}}>Search </Text>City, Locality,
              Project, Landmark
            </Text>
            <Image source={searchImg} />
          </TouchableOpacity>
          <View style={styles.dataListContainer}>
            <View style={styles.noOfList}>
              <Text style={styles.noOfListText}>
                120<Text style={{fontWeight: '200'}}> Villa</Text>
              </Text>
              <View style={styles.iconDataImg}>
                <TouchableOpacity style={styles.vertical}>
                  <Image source={showImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.horizonatal}>
                  <Image source={horizontalImg} />
                </TouchableOpacity>
              </View>
            </View>
            <CategoryEstate cityName={AddCityName} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerImage: {
    width: responsiveWidth(100),
    height: responsiveHeight(40),
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveHeight(3),
  },
  container: {
    paddingTop: responsiveScreenHeight(2),
    paddingHorizontal: responsiveWidth(4),
    gap: responsiveHeight(3)
  },
  searchInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: responsiveScreenHeight(8),
    width: responsiveScreenWidth(90),
    borderWidth: 0,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(3),
    marginTop: responsiveScreenHeight(2),
    marginBottom: responsiveScreenHeight(2),
    gap: responsiveScreenWidth(2),
    fontSize: 12,
  },
  serchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(90),
    borderWidth: 0,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(4),
    marginHorizontal: responsiveScreenWidth(1),
    gap: responsiveScreenWidth(2),
    fontSize: 12,
  },
  dataListContainer: {},
  noOfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: responsiveScreenHeight(1),
  },
  noOfListText: {
    alignItems: 'center',
    color: '#252B5C',
    fontSize: 18,
    fontWeight: '700',
  },
  iconDataImg: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    borderRadius: 20,
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(1),
  },
  horizonatal: {
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    backgroundColor: 'white',
    borderRadius: 40,
  },
  vertical: {},
});
