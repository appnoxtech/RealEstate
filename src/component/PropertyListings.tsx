import {Alert, SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {DeletePropertyByIdService, GetPropertyByUserIdService} from '../services/properties';
import {useSelector} from 'react-redux';
import PropertyListCard from './common/Card/PropertyListCard';
import HeaderWithBackBtn from './common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

interface userListingsData {
  id: string;
  title: string;
  propertyType: string;
  price: number;
}

const PropertyListings: React.FC = () => {
  const navigation = useNavigation();
  const {id} = useSelector((state: any) => state.user.userDetails);
  const [userListingsData, setUserListingsData] = useState<
    Array<userListingsData>
  >([]);
  
  const [message, setMessage] = useState('');

  const GetPropertyData = async () => {
    try {
      const res = await GetPropertyByUserIdService(id);
      const {result} = res.data;

      if (result) {
        setUserListingsData(result);
      } else {
        setUserListingsData([]);
      }
    } catch (error: any) {
      if (error?.message === 'Request failed with status code 404') {
        setMessage('No property found');
      } else {
        setMessage('');
      }
    }
  };
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      GetPropertyData();
    });

    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);


  // const DeleteProperty = async (propertyId: string) => {
  //   try {
  //     const res = await DeletePropertyByIdService(propertyId);
  //     // console.log(propertyId);
  //     const {result} = res.data;
  //     // console.log(result);
  //   } catch (error: any) {
  //     Alert.alert('Error', error.response.data.error.message);
  //   }
  // };

  // const handelDelete = async () => {
  //  await DeleteProperty(id);
  //   const updateUserListings = userListingsData.filter(
  //     item => item.id !== id,
  //   );
  //   setUserListingsData(updateUserListings);
  //   GetPropertyData();
    
  // };
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.headerButton}>
        <HeaderWithBackBtn />
        <Text style={styles.textz}> Your Listings </Text>
      </View>
      <Text style={styles.textMessage}>{message}</Text>
     <ScrollView showsVerticalScrollIndicator={false}>
     <View style={styles.listings}>
        {userListingsData?.map((item: userListingsData, index) => {
          return (
            <PropertyListCard
              key={index}
              id={item.id}
              title={item.title}
              propertyType={item.propertyType}
              price={item.price}
              property={item}
            />
          );
        })}
      </View>
     </ScrollView>
    </SafeAreaView>
  );
};

export default PropertyListings;

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
  },
  textz: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#252B5C',
  },
  headerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(2),
    gap: responsiveScreenWidth(5),
  },
  textMessage: {
    paddingHorizontal: responsiveScreenWidth(4),
  },
  listings: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(3),
    gap: responsiveScreenHeight(3),
  },
});
