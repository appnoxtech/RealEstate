import {
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
import BackWithSetting from '../../component/common/buttons/BackWithSetting';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import FeaturedCategories from './FeaturedCategories';
import CategoryEstate from './CategoryEstate';

export default function FeaturedEstate() {
  const image28 = require('../../../assets/images/image28.png');
  const image29 = require('../../../assets/images/image29.png');
  const image30 = require('../../../assets/images/image30.png');
  const serachImg = require('../../../assets/images/Search.png');
  const micImg = require('../../../assets/images/Mic.png');
  const showImg = require('../../../assets/images/Show.png');
  const horizonatalImg = require('../../../assets/images/HorizontalActive.png');
  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <BackWithSetting />
        <View style={styles.mainImgContainer}>
          <Image style={styles.mainImg} source={image28} />
          <View style={styles.secondImgContainer}>
            <Image style={styles.secondImg} source={image29} />
            <Image style={styles.secondImg} source={image30} />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.realestateText}>Featured Estate</Text>
          <Text style={styles.text1}>
            Our recommended real estates exclusive for you.
          </Text>

          <View style={styles.searchInput}>
            <TextInput
              style={styles.input}
              placeholder="Full Search House, Apartment, etc"
              // value={value}
              autoCorrect={true}
              autoCapitalize="none"
              // onChangeText={value => {
              //   setValue(value);
              // }}
              // onFocus={() => setIsFocus(true)}
            />
            <TouchableOpacity>
              <Image source={serachImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataListContainer}>
            <View style={styles.noOfList}>
              <Text style={styles.noOfListText}>
                70<Text style={{fontWeight: '200'}}> estates</Text>
              </Text>
              <View style={styles.iconDataImg}>
                <TouchableOpacity style={styles.vertical}>
                  <Image source={showImg} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.horizonatal}>
                  <Image source={horizonatalImg} />
                </TouchableOpacity>
              </View>
            </View>
            <CategoryEstate />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainImgContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: responsiveScreenWidth(2),
    marginTop: responsiveScreenHeight(3),
  },
  secondImgContainer: {
    gap: responsiveScreenWidth(2),
  },
  mainImg: {
    width: 230,
    height: 258,
    borderRadius: 12,
  },
  secondImg: {
    width: 133,
    height: 137,
    borderRadius: 12,
  },
  searchContainer: {
    marginTop: responsiveScreenHeight(2.5),
    paddingHorizontal: responsiveScreenWidth(5),
    gap: responsiveScreenHeight(1),
  },
  realestateText: {
    color: '#252B5C',
    fontSize: responsiveFontSize(3),
  },
  text1: {
    fontSize: responsiveFontSize(1.5),
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
    gap: responsiveScreenWidth(2),
    fontSize: 12,
  },
  input: {
    flex: 2,
  },
  verticleLine: {
    height: '50%',
    width: 1,
    backgroundColor: '#A1A5C1',
  },
  mic: {
    paddingHorizontal: responsiveScreenWidth(1),
    width: 20,
    height: 20,
  },
  dataListContainer: {},
  noOfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  vertical: {},
  horizonatal: {
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    backgroundColor: 'white',
    borderRadius: 40,
  },
});
