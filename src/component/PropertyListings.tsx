import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetPropertyByUserIdService } from '../services/properties';
import { useSelector } from 'react-redux';
import PropertyListCard from './common/Card/PropertyListCard';
import HeaderWithBackBtn from './common/buttons/HeaderWithBackBtn';
import { responsiveScreenHeight } from 'react-native-responsive-dimensions';

interface userListingsData {
  id: string;
  title: string;
  propertyType: string;
  price: number;

}

const PropertyListings: React.FC = () => {
  const { id } = useSelector((state: any) => state.user.userDetails);
  const [userListingsData, setUserListingsData] = useState<Array<userListingsData>>([]);
  console.log(userListingsData);

  const GetPropertyData = async () => {
    try {
      const res = await GetPropertyByUserIdService(id);
      const { result } = res.data;
      console.log(result);
      
      if (result) {
        setUserListingsData(result);
      } else {
        setUserListingsData([]);
      }
    } catch (error) {
      // Alert.alert('', 'Error');
    }
  };

  useEffect(() => {
    GetPropertyData();
  }, []);



  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{paddingBottom: responsiveScreenHeight(8)}}>
      <HeaderWithBackBtn />
      </View>
      <View>
        {userListingsData.map((item: userListingsData)  => {
          return <PropertyListCard id={item.id} title={item.title}  propertyType={item.propertyType} price={item.price}/>
        })}
      </View>
    </SafeAreaView>
  );
};

export default PropertyListings;

const styles = StyleSheet.create({});
