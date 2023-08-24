import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Platform,
  ImageBackground,
  TouchableOpacity,
  Image,
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
import {dark} from '../../../../assets/Styles/GlobalTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {width} from '../../../utils/constants/Matrics';
import ReviewButton from '../../common/buttons/ReviewButton';

const DetailedPage = ({route}: any) => {
  const {data} = route.params;
  console.log('--->', data);

  const reveiw = ['4.5', data?.propertyType];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <ImageBackground
        resizeMode="cover"
        source={{uri: `${data.images[0]}`}}
        style={styles.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            position: 'relative',
          }}>
          <View style={styles.backButton}>
            <HeaderWithBackBtn />
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
              <Image style={styles.image} source={{uri: `${data.images[0]}`}} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.imageView}>
              <Image style={styles.image} source={{uri: `${data.images[0]}`}} />
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
      <Text>
        Hello
      </Text>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: responsiveWidth(10),
    overflow: 'hidden',
    marginHorizontal: responsiveScreenWidth(2),
    marginVertical: Platform.OS === 'ios' ? 0 : responsiveScreenHeight(1),
    paddingVertical:
      Platform.OS === 'android' ? 0 : responsiveScreenHeight(1.5),
    paddingHorizontal:
      Platform.OS === 'android'
        ? responsiveScreenWidth(2)
        : responsiveScreenWidth(2),
    // paddingBottom: responsiveScreenHeight(20),
    justifyContent: 'space-between',
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  },
  heartContainer1: {
    width: responsiveScreenWidth(7.5),
    height: responsiveScreenWidth(7.5),
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
});
