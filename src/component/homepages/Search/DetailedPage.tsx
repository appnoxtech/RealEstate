import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
  Text,
} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';




const DetailedPage = ({route}: any) => {
  const heartImage = require('../../../../assets/images/Heart.png');
  const backgroundImage = require('../../../../assets/images/WingsTower.png');
  const shareImage = require('../../../../assets/images/Share.png');
  const propImage1 = require('../../../../assets/images/propImg1.png');
  const propImage2 = require('../../../../assets/images/propImg2.png');
  const propImage3 = require('../../../../assets/images/propImg3.png');

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.headerContainer}
          source={backgroundImage}>
          <View style={styles.headerContainerMain}>
            <View>
              <HeaderWithBackBtn />
            </View>
            <View style={styles.subHeader}>
              <TouchableOpacity style={styles.shareContainer}>
                <Image style={styles.shareImg} source={shareImage} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.heartContainer}>
                <Image style={styles.heart} source={heartImage} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.imageBottomContainer}>
            <View style={styles.imageBottomContainer1}>
              <TouchableOpacity style={styles.ratingcontainer}>
                <Ionicons style={styles.star} name={'star'} />
                <Text style={{color: 'white'}}>4.5</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.apartment}>
                <Text style={{color: 'white'}}>Apartment</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.imageBottomContainer2}>
              <TouchableOpacity style={styles.bottomContainerImg}>
                <Image style={styles.bottomImage} source={propImage1} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomContainerImg}>
                <Image style={styles.bottomImage} source={propImage2} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.bottomContainerImg}>
                <ImageBackground style={styles.bottomImage} source={propImage3}>
                  <Text
                    style={{color: 'white', fontSize: responsiveFontSize(4)}}>
                   +3
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
        <View style={styles.footerDetails}>
        <View>
          <Text style={styles.footerDetailText}>Wings Tower</Text>
          <Text style={{color: '#53587A'}}>Delhi, India</Text>
        </View>
        <View>
        <Text style={styles.footerDetailText}>$ 220</Text>
          <Text style={{color: '#53587A'}}>Per Month</Text>
        </View>
      </View>
        </View>
    </SafeAreaView>
  );
};

export default DetailedPage;

const styles = StyleSheet.create({
  container: {},
  headerContainer: {
    justifyContent: 'space-between',
    width: responsiveScreenWidth(99),
    height: responsiveScreenHeight(64.5),
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(3),
  },
  headerContainerMain: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  subHeader: {
    flexDirection: 'row',
    gap: 10,
  },
  shareContainer: {
    borderWidth: 1,
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },
  shareImg: {
    width: responsiveWidth(3.7),
    height: responsiveHeight(1.5),
  },
  heartContainer: {
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(12),
    height: responsiveHeight(5.5),
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#8BC83F',
    borderColor: '#8BC83F',
  },
  heart: {
    width: responsiveWidth(3.7),
    height: responsiveHeight(1.5),
  },
  imageBottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBottomContainer1: {
    flexDirection: 'row',
    gap: 10,
    marginTop: responsiveHeight(26),
  },
  ratingcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: responsiveWidth(20),
    width: responsiveWidth(25),
    height: responsiveHeight(6),
    backgroundColor: '#1F4C6B',
  },
  star: {
    color: 'gold',
  },
  apartment: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    borderRadius: responsiveWidth(20),
    width: responsiveWidth(25),
    height: responsiveHeight(6),
    backgroundColor: '#1F4C6B',
  },
  imageBottomContainer2: {
    gap: 9,
  },
  bottomContainerImg: {},
  bottomImage: {
    width: responsiveWidth(22),
    height: responsiveHeight(10),
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerDetails: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    paddingHorizontal: responsiveScreenWidth(4),
  },
  footerDetailText: {
    color: '#252B5C',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
  }
});
