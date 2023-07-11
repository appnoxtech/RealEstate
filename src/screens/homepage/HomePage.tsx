import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import React from 'react';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import Category from './Category';
import FeaturedCategories from './FeaturedCategories';
import TopDiscount from '../homepage/TopDiscount';
import ExploreNearbyEstate from '../../screens/discover/Category/ExploreNearbyEstate';

import TopLocation from '../discover/Category/TopLocation';
import TopEstateAgent from '../discover/Category/TopEstateAgent';

const downImg = require('../../../assets/images/Down.png');
const locatinImg = require('../../../assets/images/Location.png');
const notificationImg = require('../../../assets/images/Notification.png');
const ellipseImg = require('../../../assets/images/Ellipse.png');
const searchImg = require('../../../assets/images/Search.png');

const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerItems}>
              <TouchableOpacity style={styles.location}>
                <Image style={styles.locationImage} source={downImg} />
                <Text>Jakarta, Indonesia</Text>

                <Image style={styles.locationImage1} source={locatinImg} />
              </TouchableOpacity>

              <View style={styles.profileContainer}>
                <TouchableOpacity>
                  <Image style={styles.notification} source={notificationImg} />
                </TouchableOpacity>

                <TouchableOpacity>
                  <Image style={styles.profile} source={ellipseImg} />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.headerText}>
            Hey,<Text style={styles.subText}> John ! </Text>
            {'\n'}
            Find your dream home
          </Text>

          <TouchableOpacity onPress={() => navigation.navigate('SearchFilterPage' as never)} style={styles.serchContainer}>
            <Text><Text style={{fontWeight: 'bold'}}>Search </Text>City, Locality, Project, Landmar</Text>
            <Image source={searchImg} />
          </TouchableOpacity>

          <Category />
          <TopDiscount />

          <View style={styles.featuredEstate}>
            <View style={styles.featuredEstateText}>
              <Text style={styles.featuredEstateHeaderText}>
                Featured Estates
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('FeaturedEstate' as never)}>
                <Text style={styles.textAll}>view all</Text>
              </TouchableOpacity>
            </View>
          </View>
          <FeaturedCategories />
          <View style={styles.toplocation}>
            <Text style={{fontSize: 20, color: '#252B5C', fontWeight: '700'}}>
              Top Location
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('TopLocationPage' as never)}>
              <Text style={{color: '#234F68', fontSize: 14}}>explore</Text>
            </TouchableOpacity>
          </View>
          <TopLocation />
          {/* <Text style={{color: '#252B5C', fontSize: 18, fontWeight: 'bold'}}>
            Explore Nearby Estate
          </Text> */}
          {/* <View style={styles.dataListContainer}>
            <ExploreNearbyEstate />
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  // imageContainer: {
  //   backgroundColor: '#234F68',
  //   width: 362,
  //   height: 200,
  // },

  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    paddingHorizontal: responsiveScreenWidth(4),
    gap: responsiveHeight(4),
  },
  header: {
    flexDirection: 'row',
  },
  headerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(10),
  },

  location: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 17,
    gap: 5,
    borderWidth: 1,
    borderRadius: 34,
    borderColor: '#DFDFDF',
  },

  locationImage: {
    width: 20,
    height: 20,
  },
  locationImage1: {
    width: 15,
    height: 15,
  },

  profileContainer: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(3),
  },

  notification: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(7.5),
  },
  profile: {
    width: responsiveWidth(13),
    height: responsiveWidth(13),
    borderRadius: responsiveWidth(7.5),
  },
  headerText: {
    fontSize: responsiveFontSize(4),
  },
  subText: {
    color: '#234F68',
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
    paddingHorizontal: responsiveScreenWidth(3),
    gap: responsiveScreenWidth(2),
    fontSize: 12,
  },
  input: {
    flex: 2,
  },

  featuredEstate: {},
  featuredEstateText: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },
  featuredEstateHeaderText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#252B5C',
  },
  textAll: {
    color: '#252B5C',
  },
  toplocation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  topEstateAgent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  explore: {
    color: '#234F68',
  },
  topAgent: {
    fontSize: 20,
    color: '#252B5C',
    fontWeight: '700',
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
});
