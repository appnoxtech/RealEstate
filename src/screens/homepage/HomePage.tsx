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
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';

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

import PropertyListCard from '../../component/common/Card/PropertyListCard';
import ModalScreen from '../Modals/ModalScreen';
import {useSelector} from 'react-redux';
import BoxBtn from '../../component/common/buttons/BoxBtn';
import AgentBtn from '../../component/common/buttons/AgentBtn';
import { GetPropertyByUserIdService } from '../../services/properties';

const HomePage = () => {
  const notificationImg = require('../../../assets/images/Notification.png');
  const searchImg = require('../../../assets/images/Search.png');

  const navigation = useNavigation();

  const {userDetails} = useSelector((state: any) => state.user);

  const [property, setProperty] = useState('Listings');
  const [agentDataa, setAgentData] = useState('Listings');
  const [propertyListings, setPropertyListings] = useState();

  const handelPress = (params: string) => {
    setAgentData(params);
  };

  const GetPropertyData = async () => {
    try {
      const res = await GetPropertyByUserIdService(userDetails?.id);
      const {result} = res.data;

      if (result?.length) {
        setPropertyListings(result?.length);
      }
    } catch (error: any) {
      // Alert.alert('Error', error.response.data.error.message);
      if(error.response.data.error.message = 'Property not found for this userId') {
        setPropertyListings(0);
      }
    }
  };

  useEffect(() => {
    GetPropertyData();
  }, []);

  const data = [
    {
      number: propertyListings,
      title: 'Listings',
      page: 'PropertyListings',
    },
    {
      number: 5,
      title: 'Reviews',
      page: 'Reviews',
    },
    {
      number: 10,
      title: 'Responses',
      page: 'Responses',
    },
  ];

  const agentData = ['Listings', 'Sold', 'Responses'];

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
            {userDetails?.role === 'agent' ? null : 'Find your dream home'}
          </Text>
          {userDetails?.role === 'agent' ? (
            <>
              <View style={styles.yourListingHeader}>
                <Text style={styles.featuredEstateHeaderText}>
                  Your Listings
                </Text>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('PropertyListings' as never)
                  }>
                  <Text style={styles.textAll}>View all</Text>
                </TouchableOpacity>
              </View>
              <PropertyListCard
                title="Flat in Greater Noida"
                propertyType="Independent House/Villa"
                id={''}
                price={0}
                images={[]}
              />

              <View style={styles.box}>
                {data.map(item => {
                  return (
                    <BoxBtn
                      key={item.number}
                      number={item.number}
                      title={item.title}
                      page={item.page}
                    />
                  );
                })}
              </View>

              <View style={styles.agentBtn}>
                {agentData.map(item => {
                  return (
                    <AgentBtn
                      key={item}
                      title={item}
                      style={[
                        styles.agentSection,
                        agentDataa === item ? styles.responseBoxBgColor : null,
                      ]}
                      btnPressHandler={() => handelPress(item)}
                    />
                  );
                })}
              </View>
            </>
          ) : null}
          {agentDataa === 'Listings' ? (
            <Text style={styles.textListings}>{propertyListings} Listings</Text>
          ) : agentDataa === 'Sold' ? (
            <Text style={styles.textListings}>3 Sold Properties</Text>
          ) : (
            <Text style={styles.textListings}>13 Responses</Text>
          )}
          {userDetails?.role === 'agent' ? null : (
            <>
              <TouchableOpacity
                onPress={() => navigation.navigate('SearchFilterPage' as never)}
                style={styles.serchContainer}>
                <Text>
                  <Text style={{fontWeight: 'bold'}}>Search : </Text>City,
                  Locality, Project, Landmark
                </Text>
                <Image source={searchImg} />
              </TouchableOpacity>

              <Category />
            </>
          )}

          {userDetails?.role === 'agent'
            ? null
            : <TopDiscount /> && (
                <>
                  <View style={styles.featuredEstate}>
                    <View style={styles.featuredEstateText}>
                      <Text style={styles.featuredEstateHeaderText}>
                        Featured Estates
                      </Text>
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('FeaturedEstate' as never)
                        }>
                        <Text style={styles.textAll}>View all</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                  <FeaturedCategories />
                  <View style={styles.toplocation}>
                    <Text style={styles.featuredEstateHeaderText}>
                      Top Location
                    </Text>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('TopLocationPage' as never)
                      }>
                      <Text style={styles.textAll}>Explore</Text>
                    </TouchableOpacity>
                  </View>
                  <TopLocation />
                  <Text style={styles.featuredEstateHeaderText}>
                    Explore Nearby Estate
                  </Text>
                  <View style={styles.dataListContainer}>
                    <ExploreNearbyEstate />
                  </View>
                </>
              )}
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
    gap: responsiveHeight(2),
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
  headerText: {
    fontSize: responsiveFontSize(4),
    paddingHorizontal: responsiveScreenWidth(1.23),
  },
  subText: {
    color: '#234F68',
  },
  box: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(2.5),
    marginBottom: responsiveScreenHeight(2),
  },
  agentBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F5F4F8',
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
  },
  agentSection: {
    borderRadius: responsiveWidth(8),
    paddingHorizontal: responsiveScreenWidth(7),
    paddingVertical: responsiveScreenHeight(1.4),
  },

  responseBoxBgColor: {
    backgroundColor: 'white',
  },

  button__: {
    alignItems: 'center',
    marginVertical: responsiveScreenHeight(5),
  },

  textListings: {
    fontSize: responsiveFontSize(3),
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
