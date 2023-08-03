import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../component/common/inputs/inputComponent';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateNewListing} from '../../../redux/reducers/postReducer';
import usePropertyHook from '../../../hooks/PropertyHook';

const PropertyFeatures = () => {
  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');
  const {createPropertyHandler} = usePropertyHook();
  const {newListing} = useSelector((store: any) => store.post);
  const {userDetails} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const handelPost = () => {
    dispatch(
      UpdateNewListing({
        key: 'userId',
        value: userDetails?.id,
      }),
    );
    dispatch(
      UpdateNewListing({
        key: 'ownerPhoneNumber',
        value: userDetails?.phoneNumber,
      }),
    );
    dispatch(
      UpdateNewListing({
        key: 'owner_name',
        value: userDetails?.name,
      }),
    );
    createPropertyHandler(newListing);
  };

  const latitudeHandel = (params: any) => {
    setLatitude(params);
    dispatch(
      UpdateNewListing({
        key: 'latitude',
        value: params,
      }),
    );
  };

  const longitudeHandel = (params: any) => {
    setLongitude(params);
    dispatch(
      UpdateNewListing({
        key: 'longitude',
        value: params,
      }),
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View>
          <HeaderWithBackBtn />
        </View>

        <View style={styles.inputContainer}>
          <Text>latitude</Text>
          <CustomTextInput
            onChangeText={latitudeHandel}
            value={latitude}
            placeholder="latitude"
          />
        </View>
        <View style={styles.inputContainer}>
          <Text>longitude</Text>
          <CustomTextInput
            onChangeText={longitudeHandel}
            value={longitude}
            placeholder="longitude"
          />
        </View>
        <View>
          <ExploreButton
            onPress={() => handelPost()}
            title="Confirm and post property"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PropertyFeatures;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: responsiveScreenWidth(3.5),
    marginVertical: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(2),
  },

  textHeader: {
    fontSize: responsiveWidth(7),
  },
  inputContainer: {},
});
