import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
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

const PostProperty = () => {
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [areaType, setAreaType] = useState<string>('Residential');
  const {newListing} = useSelector((store: any) => store.post);
  const [lookingTo, setLookingTo] = useState<string>('Sell');
  const [propertyType, setPropertyType] = useState<string>('');
  const [errorProperty, setErrorProperty] = useState<string>('');

  const setLookingBtnHandler = (params: string) => {
    setLookingTo(params);
    dispatch(
      UpdateNewListing({
        key: 'lookingTo',
        value: params,
      }),
    );
  };
  const setWhatKindPropertyHandler = (params: string) => {
    setAreaType(params);
    dispatch(
      UpdateNewListing({
        key: 'type',
        value: params,
      }),
    );
  };
  const setPropertyTypeHandler = (params: string) => {
    setPropertyType(params);
    dispatch(
      UpdateNewListing({
        key: 'propertyType',
        value: params,
      }),
    );
  };

  const navigation = useNavigation();

  const validate = () => {
    if (!propertyType) {
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
  const LookingOption = ['Sell', 'Rent / Lease'];
  const WhatKindOfProperty = ['Residential', 'Commercial'];
  const selectProperty = [
    'Apartment',
    'Independent House/Villa',
    'Independent/Builder Floor',
    'Plot/Land',
    '1 RK/ Studio Aprtment',
  ];

  console.log('newListing', newListing);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.hamBurgerMenu}>
        <HeaderWithBackBtn />
        <ModalScreen />
      </View>

      <View style={styles.headerItems}>
        <View style={styles.basicDetails}>
          <View style={{gap: responsiveScreenHeight(1)}}>
            <Text style={styles.steps}>Step 1 of 3</Text>
            <Text style={styles.basicDetailsText}>Add Basic Details</Text>
            <Text>Your Intent, Property type & Contact details</Text>
          </View>
          <View style={styles.main}>
            <Text style={styles.pb10}>You're Looking to ? </Text>
            <View style={styles.lookingTo}>
              {LookingOption?.map(option => (
                <OptionBtn
                  key={option}
                  label={option}
                  btnPressHandler={setLookingBtnHandler}
                  style={
                    lookingTo === option
                      ? styles.pressedSellrent
                      : styles.Sellrent
                  }
                />
              ))}
            </View>
            <Text>What Kind Of Property ?</Text>
            <View style={styles.propertyTYpe}>
              {WhatKindOfProperty?.map(option => (
                <OptionBtn
                  key={option}
                  label={option}
                  btnPressHandler={setWhatKindPropertyHandler}
                  style={
                    areaType === option ? styles.typeColor : styles.residential
                  }
                />
              ))}
            </View>
            <Text>Select Property Type</Text>
            <View style={styles.typeOfProperty}>
              {selectProperty?.map(option => (
                <OptionBtn
                  key={option}
                  label={option}
                  btnPressHandler={setPropertyTypeHandler}
                  style={
                    propertyType === option
                      ? styles.typeColor
                      : styles.noTypeColor
                  }
                />
              ))}
            </View>
          </View>
          {errorProperty ? (
            <Text style={{color: 'red'}}>{errorProperty}</Text>
          ) : null}
        </View>

        <View style={styles.bottomBtn}>
          <ExploreButton onPress={() => handleNext()} title="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostProperty;

const styles = StyleSheet.create({
  hamBurgerMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(4),
  },
  hamBurger: {
    paddingHorizontal: responsiveScreenWidth(3.5),
  },
  headerItems: {
    flex: 1,
    gap: responsiveHeight(2),
  },
  steps: {
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetails: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(5),
    gap: responsiveHeight(4),
  },
  basicDetailsText: {
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  main: {},
  propertyTYpe: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: responsiveScreenHeight(2),
    paddingBottom: responsiveScreenWidth(7),
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
    paddingTop: responsiveScreenHeight(2),
  },
  lookingTo: {
    paddingVertical: responsiveScreenHeight(1.5),
    paddingBottom: responsiveScreenWidth(7),
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
  bottomBtn: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2),
  },
});
