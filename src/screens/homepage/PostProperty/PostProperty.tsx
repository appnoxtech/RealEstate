import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  Alert,
  ScrollView,
  TextInput,
  Platform,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import {useNavigation} from '@react-navigation/native';
import OptionBtn from '../../../component/common/buttons/OptionBtn';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateNewListing} from '../../../redux/reducers/postReducer';
import ModalScreen from '../../Modals/ModalScreen';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {GetPropertyType} from '../../../services/properties';
import {dark} from '../../../../assets/Styles/GlobalTheme';

const PostProperty = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [areaType, setAreaType] = useState<string>('Residential-property');
  const {userDetails} = useSelector((state: any) => state.user);
  const [lookingTo, setLookingTo] = useState<string>('Sell');
  const [propertyType, setPropertyType] = useState<Array<{name: string}>>([]);
  const [ownerName, setOwnerName] = useState('');
  const [ownerPhoneNumber, setOwnerPhoneNumber] = useState('');
  const {newListing} = useSelector((store: any) => store.post);
  console.log(newListing);

  const [errorProperty, setErrorProperty] = useState<string>('');

  const GetPropertyTypeData = async (params: string) => {
    try {
      const res = await GetPropertyType(params);
      const {result} = res.data;
      if (result?.length) {
        setPropertyType([...result]);
      } else {
        setPropertyType([]);
      }
    } catch (error: any) {
      Alert.alert('Error', error);
    }
  };

  const setLookingBtnHandler = (params: string) => {
    setLookingTo(params);
    dispatch(
      UpdateNewListing({
        key: 'lookingTo',
        value: params,
      }),
    );
  };
  const setWhatKindPropertyHandler = async (params: string) => {
    try {
      setAreaType(params);
      await GetPropertyTypeData(params);
      dispatch(
        UpdateNewListing({
          key: 'type',
          value: params,
        }),
      );
    } catch (error) {}
  };
  const setPropertyTypeHandler = (id: string) => {
    if (!id) {
      setErrorProperty('Please select property');
    } else {
      setErrorProperty('');
    }
    dispatch(
      UpdateNewListing({
        key: 'propertyType',
        value: id,
      }),
    );
  };

  const validate = () => {
    if (!newListing?.propertyType[0]) {
      setErrorProperty('Please select property');
      return false;
    } else {
      setErrorProperty('');
      return true;
    }
  };
  const handleNext = () => {
    const isValid = validate();
    if (isValid) {
      navigation.navigate('PostPropertySecond' as never);
    }
  };
  const LookingOption = ['Sell', 'Rent/Lease', 'PG'];

  const WhatKindOfProperty = [
    {key: 'Residential-property', value: 'Residential'},
    {key: 'Commercial-property', value: 'Commercial'},
  ];

  useEffect(() => {
    GetPropertyTypeData(newListing?.type);
    setOwnerName(userDetails?.name);
    setOwnerPhoneNumber(userDetails?.phoneNumber);
    dispatch(
      UpdateNewListing({
        key: 'ownerName',
        value: ownerName,
      }),
    );
    dispatch(
      UpdateNewListing({
        key: 'ownerPhoneNumber',
        value: ownerPhoneNumber,
      }),
    );
  }, []);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.hamBurgerMenu}>
        <HeaderWithBackBtn />
        <ModalScreen />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerItems}>
          <View style={styles.basicDetails}>
            <View style={{gap: responsiveScreenHeight(1)}}>
              <Text style={styles.steps}>Step 1 of 4</Text>
              <Text style={styles.basicDetailsText}>Add Basic Details</Text>
              <Text style={{color: dark}}>
                Your Intent, Property type & Contact details
              </Text>
            </View>
            <View style={styles.main}>
              <View style={styles.mainText}>
                <Text style={styles.pb10}>You're Looking to ? <Text style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>*</Text></Text>
                
              </View>
              <View style={styles.lookingTo}>
                {LookingOption?.map(option => (
                  <OptionBtn
                    id={option}
                    key={option}
                    label={option}
                    btnPressHandler={setLookingBtnHandler}
                    style={
                      newListing?.lookingTo === option
                        ? styles.pressedSellrent
                        : styles.Sellrent
                    }
                  />
                ))}
              </View>
              <View style={styles.mainText}>
                <Text style={styles.pb10}>What Kind Of Property ? <Text style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>*</Text></Text>
                
              </View>
              <View style={styles.propertyTYpe}>
                {WhatKindOfProperty?.map((option, index) => (
                  <OptionBtn
                    id={option.key}
                    key={index}
                    label={option.value}
                    btnPressHandler={setWhatKindPropertyHandler}
                    style={
                      newListing?.type === option.key
                        ? styles.typeColor
                        : styles.residential
                    }
                  />
                ))}
              </View>
              <View style={styles.mainText}>
              <Text style={{color: dark}}>Select Property Type ? <Text style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>*</Text></Text>
                
              </View>
              
              {propertyType?.length ? (
                <View style={styles.typeOfProperty}>
                  {propertyType?.map((option, index) => (
                    <OptionBtn
                      key={index}
                      id={option.name}
                      label={option.name}
                      btnPressHandler={setPropertyTypeHandler}
                      style={
                        newListing?.propertyType === option.name
                          ? styles.typeColor
                          : styles.noTypeColor
                      }
                    />
                  ))}
                </View>
              ) : null}
            </View>
            {errorProperty ? (
              <Text style={{color: 'red'}}>{errorProperty}</Text>
            ) : null}
            <View style={styles.inputContainer}>
              <Text style={{color: dark}}>Owner Name</Text>
              <TextInput
                editable={false}
                value={ownerName}
                style={styles.inputStyling}
              />
              <Text style={{color: dark}}>Owner Contact</Text>
              <TextInput
                editable={false}
                value={ownerPhoneNumber}
                style={styles.inputStyling}
              />
            </View>
          </View>

          <View style={styles.bottomBtn}>
            <ExploreButton onPress={() => handleNext()} title="Next" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PostProperty;

const styles = StyleSheet.create({
  hamBurgerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: Platform.OS === 'android' ? responsiveScreenHeight(2) : responsiveScreenHeight(1),
    gap: responsiveScreenWidth(70),
  },
  hamBurger: {
    paddingHorizontal: responsiveScreenWidth(3.5),
  },
  headerItems: {
    flex: 1,
    // gap: responsiveHeight(2),
  },
  steps: {
    color: dark,
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetails: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(5),
    // gap: responsiveHeight(4),
  },
  basicDetailsText: {
    color: dark,
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  main: {},
  mainText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveScreenHeight(2),
  },
  propertyTYpe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveScreenHeight(2),
    // paddingBottom: responsiveScreenWidth(7),
    gap: responsiveScreenWidth(3),
  },
  residential: {
    borderWidth: responsiveWidth(0.1),
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },

  typeColor: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.3),
    borderColor: '#8BC83F',
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },
  noTypeColor: {
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.1),
    padding: responsiveScreenWidth(2),
    borderRadius: responsiveWidth(20),
  },
  pb10: {
    color: dark,
  },
  lookingTo: {
    paddingVertical: responsiveScreenHeight(1.5),
    flexDirection: 'row',
    gap: responsiveScreenWidth(2),
  },

  bronPress: {
    borderColor: '#8BC83F',
  },
  Sellrent: {
    borderWidth: responsiveWidth(0.2),
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    padding: 8,
  },
  pressedSellrent: {
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    padding: 8,
  },
  typeOfProperty: {
    marginTop: responsiveScreenHeight(2),
    gap: responsiveHeight(1),
  },
  inputContainer: {
    marginTop: responsiveScreenHeight(2),
  },
  bottomBtn: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2),
  },
  inputStyling: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(90),
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    backgroundColor: '#DFDFDF',
    borderRadius: 3,
    padding: 10,
    fontSize: responsiveFontSize(3),
    color: dark,
  },
});
