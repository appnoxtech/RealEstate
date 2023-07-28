import { Alert, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { GetPropertyByUserIdService } from '../services/properties';
import { useSelector } from 'react-redux';
import PropertyListCard from './common/Card/PropertyListCard';

const PropertyListings: React.FC<any> = () => {
  const { id } = useSelector((state: any) => state.user.userDetails);
  const [userListingsData, setUserListingsData] = useState([]);
  // console.log(userListingsData);

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
    <SafeAreaView>
      <View>
        {userListingsData.map((item) => {
          return <PropertyListCard id={item.id} title={item.title}  propertyType={item.propertyType} price={item.price}/>
        })}
      </View>
    </SafeAreaView>
  );
};

export default PropertyListings;

const styles = StyleSheet.create({});
