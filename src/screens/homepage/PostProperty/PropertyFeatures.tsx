import {Alert, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {
  ResetNewListing,
  UpdateNewListing,
} from '../../../redux/reducers/postReducer';
import usePropertyHook from '../../../hooks/PropertyHook';
import {useNavigation} from '@react-navigation/native';
import {
  GetPropertyByUserIdService,
  UpdatePropertyData,
} from '../../../services/properties';
import {dark} from '../../../../assets/Styles/GlobalTheme';

const PropertyFeatures = () => {
  const Navigation = useNavigation();
  const [discription, setDiscription] = useState('');
  const [area, setArea] = useState('');
  const {createPropertyHandler} = usePropertyHook();
  const {newListing} = useSelector((store: any) => store.post);

  const {userDetails} = useSelector((state: any) => state.user);
  const dispatch = useDispatch();
  const [areaError, setAreaError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');

  const validate = () => {
    if (!newListing?.area) {
      setAreaError('Please enter area !');
      setDescriptionError('');
      return false;
    } else if (!newListing?.description) {
      setAreaError('');
      setDescriptionError('Please add description!');
      return false;
    } else {
      setAreaError('');
      setDescriptionError('');
      return true;
    }
  };

  const handelPost = () => {
    createPropertyHandler(newListing);
  };
  const discriptionHandel = (params: any) => {
    if (!isNaN(params)) {
      setDescriptionError('Enter valid description!');
    } else {
      setDescriptionError('');
    }
    setDiscription(params);
    dispatch(
      UpdateNewListing({
        key: 'description',
        value: params,
      }),
    );
  };
  const areaHandel = (params: any) => {
    if (isNaN(params)) {
      setAreaError('Enter valid area !');
    } else {
      setAreaError('');
    }
    setArea(params);
    dispatch(
      UpdateNewListing({
        key: 'area',
        value: params,
      }),
    );
  };

  const handelUseEffect = () => {
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
        key: 'ownerName',
        value: userDetails?.name,
      }),
    );
  };

  const handleUpdatePost = async () => {
    const isValid = validate();
    await UpdatePropertyData(newListing);
    await GetPropertyByUserIdService(userDetails?.id);
    dispatch(UpdateNewListing(newListing));
    dispatch(ResetNewListing());
    Alert.alert('Property Updated Successfully !');
    Navigation.navigate('PropertyListings' as never);
  };

  useEffect(() => {
    handelUseEffect();
    console.log(newListing);
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View>
          <HeaderWithBackBtn />
        </View>
        <View style={styles.inputContainer}>
          <Text style={{color: dark}}>Area</Text>
          <CustomTextInput
            onChangeText={areaHandel}
            value={newListing?.area}
            placeholder="sq.ft"
          />
          {areaError ? (
            <Text style={{color: 'red', textAlign: 'right'}}>
              {areaError} !
            </Text>
          ) : null}
        </View>
        <View style={styles.inputContainer}>
          <Text style={{color: dark}}>Description</Text>
          <CustomTextInput
            onChangeText={discriptionHandel}
            value={newListing?.description}
            placeholder="description"
          />
          {descriptionError ? (
            <Text style={{color: 'red', textAlign: 'right'}}>
              {descriptionError} !
            </Text>
          ) : null}
        </View>

        <View>
          <ExploreButton
            onPress={() => (newListing?.id ? handleUpdatePost() : handelPost())}
            title={
              newListing?.id
                ? 'Confirm and update property'
                : 'Confirm and post property'
            }
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
