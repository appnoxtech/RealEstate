import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {boldFont, dark, regularFont} from '../../../../assets/Styles/GlobalTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {width} from '../../../utils/constants/Matrics';
import ReviewButton from '../../common/buttons/ReviewButton';
import BHK from '../../common/buttons/BHK';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoadIcon from '../../common/LoadIcon';
import ReviewCard from '../../common/Card/ReviewCard';

const DetailedPage = ({route}: any) => {
  const {data} = route.params;
  console.log('--->', data);

  const reveiw = ['4.5', data?.propertyType];

  const bhkData = [
    {name: 'bed', title: ' Bedrooms'},
    {neme: 'bathtub', title: ' Bathrooms'},
    {name: 'kitchen', title: ' Kitchen'},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <HeaderWithBackBtn style={styles.headerButton} />
      <ScrollView
        contentContainerStyle={{paddingHorizontal: responsiveScreenWidth(2)}}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          resizeMode="cover"
          source={{uri: `${data?.images[0]}`}}
          style={styles.container}>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              position: 'relative',
            }}>
            <View style={styles.backButton}>
              <TouchableOpacity
                style={[
                  styles.heartContainer,
                  width > 500 && styles.heartContainer1,
                ]}>
                <Ionicons
                  name="heart"
                  size={responsiveScreenWidth(4)}
                  color="white"
                />
              </TouchableOpacity>
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.itemContainer}>
                <ReviewButton>
                  <View style={styles.reviewButton}>
                    <Ionicons
                      name="star"
                      size={responsiveWidth(3)}
                      color="gold"
                    />
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(1.5),
                        fontWeight: '800',
                        color: 'white',
                      }}>
                      {' '}
                      {4.5}
                    </Text>
                  </View>
                </ReviewButton>
                <ReviewButton>
                  <View style={styles.reviewButton}>
                    <Text
                      style={{
                        fontSize: responsiveScreenFontSize(1.5),
                        color: 'white',
                        fontWeight: '800',
                      }}>
                      {data?.propertyType}
                    </Text>
                  </View>
                </ReviewButton>
              </View>
            </View>
            <View style={styles.photoContainer}>
              <TouchableOpacity style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{uri: `${data.images[1]}`}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView}>
                <Image
                  style={styles.image}
                  source={{uri: `${data.images[2]}`}}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageView}>
                <ImageBackground
                  style={styles.image}
                  source={{uri: `${data.images[0]}`}}>
                  <Text
                    style={{
                      textAlign: 'center',
                      color: 'white',
                      fontWeight: 'bold',
                    }}>
                    +3
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.textContainer}>
          <View>
            <Text style={{color: dark, fontSize: 25, maxWidth: 200, fontFamily: boldFont}}>
              {data?.title}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: responsiveScreenWidth(1),
              }}>
              <Ionicons
                name="location"
                color={'#234F68'}
                size={responsiveWidth(4)}
              />
              <Text style={{color: dark}}>
                {data?.city}, <Text>{data?.state}</Text>
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: dark, fontSize: 25}}>${data?.price}</Text>
            <Text style={{color: dark}}>per month</Text>
          </View>
        </View>
        <View style={styles.bhkButton}>
          {bhkData.map((item: any) => (
            <BHK bgColor={'#F5F4F8'}>
              <View style={styles.reviewButton}>
                {item.name === 'bed' && (
                  <Ionicons
                    name="bed"
                    size={responsiveWidth(3)}
                    color="#8BC83F"
                  />
                )}
                {item.name === 'bathtub' && (
                  <LoadIcon
                    iconFamily="MaterialCommunityIcons"
                    iconName="bathtub"
                    style={{}}
                    color="#8BC83F"
                    size={10}
                  />
                )}
                {item.name === 'kitchen' && (
                  <MaterialIcons
                    name="kitchen"
                    size={responsiveWidth(3)}
                    color="#8BC83F"
                  />
                )}

                <Text
                  style={{
                    fontSize: responsiveScreenFontSize(1.5),
                    fontWeight: '800',
                    color: '#53587A',
                  }}>
                  {' '}
                  1 {item.title}
                </Text>
              </View>
            </BHK>
          ))}
        </View>
        <View style={styles.reviewCotainer}>
          <Text style={{fontFamily: regularFont}}>Review</Text>
          <ReviewCard imgUrl={data?.images[0]} name='Sam Harris'/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
 
  container: {
    height: responsiveHeight(70),
    borderRadius: responsiveWidth(10),
    overflow: 'hidden',
    marginVertical: Platform.OS === 'ios' ? 0 : responsiveScreenHeight(1),
    paddingVertical: Platform.OS === 'android' ? 0 : responsiveScreenHeight(1),
    justifyContent: 'space-between',
  },

  headerButton: {
    position: 'absolute',
    marginHorizontal: responsiveScreenWidth(5),
    marginVertical: responsiveScreenHeight(1),
    top:
      Platform.OS === 'ios'
        ? responsiveScreenHeight(7.2)
        : responsiveScreenHeight(1.2),
    zIndex: 100,
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: Platform.OS === 'android' ? responsiveScreenHeight(2) : 0,
  },
  location: {
    color: dark,
    textAlign: 'center',
    fontSize: responsiveScreenFontSize(4),
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#8BC83F',
    marginHorizontal: responsiveScreenWidth(3),
  },
  heartContainer1: {
    width: responsiveScreenWidth(7.5),
    height: responsiveScreenWidth(7.5),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(2),
  },
  itemContainer: {
    flexDirection: 'row',
  },
  reviewButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  photoContainer: {
    position: 'absolute',
    bottom: responsiveScreenHeight(0),
    right: responsiveScreenWidth(4),
  },
  imageView: {
    borderRadius: responsiveWidth(4.5),
    backgroundColor: 'white',
    paddingHorizontal: responsiveScreenWidth(0.7),
    paddingVertical: responsiveScreenHeight(0.4),
    marginTop: responsiveScreenHeight(1),
  },
  image: {
    justifyContent: 'center',
    width: responsiveScreenWidth(12),
    height: responsiveScreenHeight(6),
    borderRadius: responsiveWidth(4.5),
    overflow: 'hidden',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(3.5),
    paddingVertical: responsiveScreenHeight(1.5),
    borderBottomWidth: responsiveWidth(0.1),
  },
  bhkButton: {
    flexDirection: 'row',
    paddingVertical: responsiveScreenHeight(2),
  },
  reviewCotainer: {},
});
