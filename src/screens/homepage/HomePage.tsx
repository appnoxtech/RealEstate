import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  ScrollView
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
import TopDiscount from '../homepage/TopDiscount'

import locationImage from '../../../assets/images/Location.png';
import downImage from '../../../assets/images/Down.png';
import notification from '../../../assets/images/Notification.png'
import profileImage from '../../../assets/images/Ellipse.png'
import searchImage from '../../../assets/images/Search.png'
import micImage from '../../../assets/images/Mic.png'

const micImageUri = Image.resolveAssetSource(micImage).uri
const searchImageUri = Image.resolveAssetSource(searchImage).uri
const profileImageUri = Image.resolveAssetSource(profileImage).uri
const notificationUri = Image.resolveAssetSource(notification).uri
const locationImageUri = Image.resolveAssetSource(locationImage).uri
const downImageUri = Image.resolveAssetSource(downImage).uri


const HomePage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
    
     <ScrollView showsVerticalScrollIndicator={false}>
       
       <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerItems}>
            <TouchableOpacity style={styles.location}>
              <Image
                style={styles.locationImage}
                source={{uri: downImageUri}}
              />
              <Text>Jakarta, Indonesia</Text>

              <Image
                style={styles.locationImage1}
                source={{uri: locationImageUri}}
              />
            </TouchableOpacity>

            <View style={styles.profileContainer}>
              <TouchableOpacity>
                <Image
                  style={styles.notification}
                  source={{uri: notificationUri}}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  style={styles.profile}
                  source={{uri: profileImageUri}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <Text style={styles.headerText}>
          Hey,<Text style={styles.subText}> Jonathan! </Text>
          {'\n'}
          Let's start exploring
        </Text>

        <View style={styles.serchContainer}>
          <TouchableOpacity>
            <Image source={{uri: searchImageUri}} />
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
              source={{uri: micImageUri}}
            />
          </TouchableOpacity>
          
        </View>
        <Category />
        <TopDiscount />

        <View style={styles.featuredEstate}>
          <View style={styles.featuredEstateText}>
            <Text style={styles.featuredEstateHeaderText}>
              Featured Estates
            </Text>
            <TouchableOpacity onPress={() => navigation.navigate('FeaturedEstate' as never)}>
            <Text style={styles.textAll}>view all</Text>
            </TouchableOpacity>
          </View>
        </View>
      <FeaturedCategories />
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
});
