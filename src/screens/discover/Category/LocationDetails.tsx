import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ImageBackground,
  Alert,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

import SettingButton from '../../../component/common/buttons/SettingButton';
import { SearchPropertyService } from '../../../services/properties';
import CategoryEstate from '../../homepage/CategoryEstate';


export default function LocationDetails( {route} : any) {
  const {data} = route.params;
  console.log(data);
    const [cityData, setCityData] = useState([]);
  
    const GetPropertyData = async () => {
      try {
        const res = await SearchPropertyService(data);
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
  const image28 = require('../../../../assets/images/Bali.png');
  const image29 = require('../../../../assets/images/Bali1.png');
  const image30 = require('../../../../assets/images/Bali2.png');
  const serachImg = require('../../../../assets/images/Search.png');
  const micImg = require('../../../../assets/images/Mic.png');
  const showImg = require('../../../../assets/images/Show.png');
  const horizonatalImg = require('../../../../assets/images/HorizontalActive.png');

  return (
    <SafeAreaView style={styles.conatiner}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.mainImgContainer}>
          <ImageBackground style={styles.mainImg} source={image28}>
            <HeaderWithBackBtn />
          </ImageBackground>

          <View style={styles.secondImgContainer}>
            <ImageBackground style={styles.secondImg} source={image29}>
              <SettingButton />
            </ImageBackground>
            <Image style={styles.thirdImg} source={image30} />
          </View>
        </View>
        <View style={styles.searchContainer}>
          <Text style={styles.realestateText}>{data}</Text>
          <Text style={styles.text1}>Our recommended real estates in Bali</Text>

          <View style={styles.searchInput}>
            <TextInput
              style={styles.input}
              placeholder="Modern House"
              // value={value}
              autoCorrect={true}
              autoCapitalize="none"
              // onChangeText={value => {
              //   setValue(value);
              // }}
              // onFocus={() => setIsFocus(true)}
            />
            <TouchableOpacity>
              <Image style={styles.mic} source={serachImg} />
            </TouchableOpacity>
          </View>
          <View style={styles.dataListContainer}>
            <View style={styles.noOfList}>
              <Text style={styles.noOfListText}>
                Found 1 <Text style={{fontWeight: '200'}}> estates</Text>
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
           <CategoryEstate cityData={cityData} />
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
    //   justifyContent: 'center',
    //   gap: responsiveScreenWidth(2),
    //   marginTop: responsiveScreenHeight(3),
  },
  secondImgContainer: {
    gap: responsiveScreenWidth(2),
  },
  mainImg: {
    width: 265,
    height: 330,
  },
  secondImg: {
    width: 120,
    height: 220,
  },
  thirdImg: {
    width: 120,
    height: 120,
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
