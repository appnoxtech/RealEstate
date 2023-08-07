import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {GetPropertyByUserIdService} from '../services/properties';
import {useSelector} from 'react-redux';
import PropertyListCard from './common/Card/PropertyListCard';
import HeaderWithBackBtn from './common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

interface userListingsData {
  id: string;
  title: string;
  propertyType: string;
  price: number;
}

const PropertyListings: React.FC = () => {
  const {id} = useSelector((state: any) => state.user.userDetails);
  const [userListingsData, setUserListingsData] = useState<
    Array<userListingsData>
  >([]);
  console.log(userListingsData);

  const GetPropertyData = async () => {
    try {
      const res = await GetPropertyByUserIdService(id);
      const {result} = res.data;
      console.log(result);

      if (result) {
        setUserListingsData(result);
      } else {
        setUserListingsData([]);
      }
    } catch (error: any) {
      Alert.alert('Error', error);
    }
  };

  useEffect(() => {
    GetPropertyData();
  }, []);

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.headerButton}>
        <HeaderWithBackBtn />
        <Text style={styles.textz}> Your Listings </Text>
      </View>
      <View style={styles.listings}>
        {userListingsData.map((item: userListingsData, index) => {
          return (
            <PropertyListCard
            key={index}
              id={item.id}
              title={item.title}
              propertyType={item.propertyType}
              price={item.price}
            />
          );
        })}
      </View>
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
  },
  listings: {
    // paddingHorizontal: responsiveScreenWidth(3),
  },
});
