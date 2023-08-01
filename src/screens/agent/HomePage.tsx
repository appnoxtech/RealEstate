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
  Modal,
} from 'react-native';
import React, {useState} from 'react';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';


import PropertyListCard from '../../component/common/Card/PropertyListCard';
import ModalScreen from '../Modals/ModalScreen';
import { useSelector } from 'react-redux';

const HomePage = () => {
  const notificationImg = require('../../../assets/images/Notification.png');
  const {userDetails} = useSelector((state: any) => state.user);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerItems}>
        <View>
          <ModalScreen />
        </View>

        <View style={styles.profileContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('PostProperty' as never)}
            style={styles.postProperty}>
            <Text style={styles.postPropertyText}>Post property</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notification' as never)}>
            <Image style={styles.notification} source={notificationImg} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.headerText}>
            Hey,<Text style={styles.subText}> {userDetails?.name}! </Text>
            {'\n'}
          </Text>

          <View style={styles.yourListingHeader}>
            <Text style={styles.featuredEstateHeaderText}>Your Listings</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('PropertyListings' as never)}>
              <Text style={styles.textAll}>View all</Text>
            </TouchableOpacity>
          </View>
          <PropertyListCard
            title="Flat in Greater Noida"
            propertyType="Independent House/Villa"
            id={''}
            price={0}
          />
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
  hamBurgerMenu: {
    flex: 1,
    backgroundColor: 'red',
    marginTop: responsiveScreenWidth(10),
  },

  container: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1.8),
    
  },
  header: {
    flexDirection: 'row',
  },
  headerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: responsiveScreenWidth(10),
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2),
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(3),
  },
  postProperty: {
    backgroundColor: '#234F68',
    padding: responsiveHeight(1.6),
    borderRadius: responsiveWidth(10),
  },
  postPropertyText: {
    fontSize: responsiveFontSize(2),
    color: 'white',
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
    paddingHorizontal: responsiveScreenWidth(1.23),
  },
  subText: {
    color: '#234F68',
  },
  serchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(90),
    borderWidth: 0,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    borderRadius: 10,
    paddingHorizontal: responsiveScreenWidth(1.9),
    gap: responsiveScreenWidth(2),
    fontSize: responsiveFontSize(2),
  },
  input: {
    flex: 2,
  },

  featuredEstate: {
    marginHorizontal: responsiveScreenWidth(2),
  },
  yourListingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

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
