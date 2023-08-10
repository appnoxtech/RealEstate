import {
  Alert,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC, useEffect, useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderWithBackBtn from '../buttons/HeaderWithBackBtn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DeletePropertyByIdService } from '../../../services/properties';
import { useSelector } from 'react-redux';

interface props {
  id: string;
  title: string;
  propertyType: string;
  price: number;
  propertyId: string;
}

interface userListingsData {
  id: string;
  title: string;
  propertyType: string;
  price: number;
}


const PropertyListCard: FC<props> = ({
  title,
  propertyType,
  price,
  propertyId,
}) => {
  const imgSrc = require('../../../../assets/images/image28.png');
  const [userListingsData, setUserListingsData] = useState<
  Array<userListingsData>
>([]);


  const {id} = useSelector((state: any) => state.user.userDetails);

  const DeleteProperty = async (propertyId: string) => {
    try {
      const res = await DeletePropertyByIdService(propertyId);
      const {result} = res.data;
      console.log(result);
      

      // if (result) {
      //   setUserListingsData(result);
      // } else {
      //   setUserListingsData([]);
      // }
    } catch (error: any) {
      // Alert.alert('Error', error.response.data.error.message);
      
    }
  };


  const handelDelete = (propertyId: string) => {
    DeleteProperty(propertyId)
    // const updateUserListings = userListingsData.filter((item) => item.id !== propertyId);
    // setUserListingsData(updateUserListings);
  }

  const navigation = useNavigation();
  return (
    <SafeAreaView>
      <View style={styles.yourListing}>
        <View style={[styles.listingContainer, styles.shadowProp]}>
          <View style={styles.yourListingsBody}>
            <Image
              style={{
                borderRadius: responsiveWidth(2),
                width: responsiveWidth(23),
                height: responsiveHeight(11),
              }}
              source={imgSrc}
            />
            <View>
              {/* <Text numberOfLines={2}> Property ID: {propertyID} </Text> */}
              <View>
                <Text
                  style={{fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>
                  {propertyType}
                </Text>
                <Text>{title}</Text>
              </View>
              <Text>Posted 2 Weeks ago</Text>
            </View>

         
          <Ionicons onPress={() => handelDelete(propertyId)} name="trash-outline" size={responsiveScreenWidth(7)} />
         
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PropertyListCard;

const styles = StyleSheet.create({
  yourListing: {
    height: responsiveScreenHeight(15),
  },
  shadowProp: {
    borderRadius: responsiveWidth(3),
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
  },

  featuredEstateHeaderText: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    color: '#252B5C',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(2),
  },
  buttonManage: {
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    borderColor: '#252B5C',
  },
  textManage: {
    color: '#252B5C',
    fontSize: responsiveFontSize(2.5),
  },

  featuredEstate: {
    marginHorizontal: responsiveScreenWidth(2),
  },
  textAll: {
    color: '#252B5C',
  },
  listingContainer: {
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1.5),
    gap: responsiveScreenHeight(2),
  },

  yourListingsBody: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: responsiveScreenWidth(4),
  },
});
