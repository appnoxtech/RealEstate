import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import HeaderWithBackBtn from '../buttons/HeaderWithBackBtn';

interface props {
  id: string;
  title: string;
  propertyType: string;
  price: number;
}

const PropertyListCard: FC<props> = ({title, propertyType, price}) => {
  const imgSrc = require('../../../../assets/images/image28.png');
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{flex: 1}}>
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
              <Text>PROPERTY ID: R70134128 </Text>
              <View style={{marginVertical: responsiveScreenHeight(1.4)}}>
                <Text
                  style={{fontWeight: 'bold', fontSize: responsiveFontSize(2)}}>
                  {propertyType}
                </Text>
                <Text>{title}</Text>
              </View>
              <Text>Posted 2 Weeks ago</Text>
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
    height: responsiveScreenHeight(20),
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

  buttonActivation: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#234F68',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(2),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    borderColor: '#252B5C',
  },
  textActivation: {
    color: 'white',
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
    gap: responsiveScreenWidth(3),
  },
});
