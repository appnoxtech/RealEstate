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


const backGroundImg = require('../../../../assets/images/image31.png');
const SearchImg = require('../../../../assets/images/Search.png');
const mic = require('../../../../assets/images/Mic.png');
const showImg = require('../../../../assets/images/Show.png');
const horizontalImg = require('../../../../assets/images/HorizontalActive.png')

export default function Villa() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView>
        <ImageBackground
          style={styles.containerImage}
          imageStyle={styles.containerImage}
          source={backGroundImg}>
          <BackWithSetting />
        </ImageBackground>
        <View style={styles.container}>
          <Text style={{fontSize: 18, color: '#252B5C'}}>Top Villa</Text>
          <FeaturedCategories />
          <View style={styles.searchInput}>
            <TouchableOpacity>
              <Image source={SearchImg} />
            </TouchableOpacity>
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
            <View style={styles.verticleLine}></View>
            <TouchableOpacity>
              <Image
                style={styles.mic}
                source={mic}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.dataListContainer}>
            <View style={styles.noOfList}>
              <Text style={styles.noOfListText}>
                120<Text style={{fontWeight: '200'}}> Villa</Text>
              </Text>
              <View style={styles.iconDataImg}>
                <TouchableOpacity style={styles.vertical}>
                  <Image
                    source={showImg}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.horizonatal}>
                  <Image
                    source={horizontalImg}
                  />
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
    marginVertical: responsiveScreenHeight(1)
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
  vertical: {

  },
});
