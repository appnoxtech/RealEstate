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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DeletePropertyByIdService} from '../../../services/properties';
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux';
import {
  ResetNewListing,
  UpdatePostProperty,
} from '../../../redux/reducers/postReducer';
import {dark} from '../../../../assets/Styles/GlobalTheme';

interface props {
  id: string;
  title: string;
  propertyType: string;
  price: number;
  property: any;
  updateListing(): any;
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
  property,
  updateListing,
}) => {
  const imgSrc = require('../../../../assets/images/image28.png');
  const dispatch = useDispatch();

  const {id} = useSelector((state: any) => state.user.userDetails);

  const DeleteProperty = async (propertyId: string) => {
    try {
      const res = await DeletePropertyByIdService(propertyId);
      console.log(propertyId);

      const {result} = res.data;
      Alert.alert('Property deleted successfully ')
      console.log(result);
    } catch (error: any) {
      Alert.alert('Error', error.response.data.error.message);
    }
  };

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener('focus', () => {
  //     GetPropertyData();
  //     dispatch(ResetNewListing());
  //   });

  //   // Return the function to unsubscribe from the event so it gets removed on unmount
  //   return unsubscribe;
  // }, [navigation]);

  const handelDelete = async () => {
    await DeleteProperty(property?.id);
    await updateListing();
  };

  const handelEdit = () => {
    dispatch(UpdatePostProperty(property));
    navigation.navigate('PostProperty' as never);
  };

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

            <View style={styles.yourListingsBodyText}>
              <View>
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: responsiveFontSize(2),
                    color: dark,
                  }}>
                  {propertyType}
                </Text>
                <Text style={{color: dark}}>{title}</Text>
              </View>
              <Text style={{color: dark}}>Posted 2 Weeks ago</Text>
            </View>
            <View style={styles.buttonsContainer}>
              <Ionicons
                style={styles.editButton}
                onPress={() => handelEdit()}
                name="create-outline"
                size={responsiveScreenWidth(7)}
                color={dark}
              />
              <Ionicons
                style={styles.deleteButton}
                onPress={() => handelDelete()}
                name="trash-outline"
                size={responsiveScreenWidth(7)}
                color={dark}
              />
            </View>
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
    elevation: 5,
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
  buttonsContainer: {
    justifyContent: 'space-evenly',
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
    flex: 1,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(1),
    paddingVertical: responsiveScreenHeight(1),
    gap: responsiveScreenHeight(2),
  },
  yourListingsBodyText: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(3),
    gap: responsiveHeight(4.5),
  },
  yourListingsBody: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    paddingTop: responsiveScreenHeight(5),
    alignSelf: 'flex-end',
  },
  editButton: {
    alignSelf: 'flex-start',
  },
});
