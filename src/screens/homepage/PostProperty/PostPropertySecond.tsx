import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateNewListing} from '../../../redux/reducers/postReducer';
import {UpdateCityName} from '../../../redux/reducers/filterReducer';
import OptionBtn from '../../../component/common/buttons/OptionBtn';
import ExploreButton from '../../../component/common/buttons/ExploreButton';
import CustomTextInput from '../../../component/common/inputs/inputComponent';
import LocationBtn from '../../../component/common/buttons/LocationBtn';
import {dark} from '../../../../assets/Styles/GlobalTheme';
import {width} from '../../../utils/constants/Matrics';

const PostPropertySecond = () => {
  const [noOfRooms, setNoOfRooms] = useState('1BHK');
  const [furnishedStatus, setFurnishedStatus] = useState('Unfurnished');
  const [parking, setParking] = useState('');

  const {newListing} = useSelector((store: any) => store.post);

  const [readyToMove, setReadyToMove] = useState('');
  const [propertyStatus, setStatus] = useState('');
  const [totalFloor, setTotalFloor] = useState(newListing?.totalFloor);
  const [propertyOnFloor, setProperyOnFloor] = useState(
    newListing?.propertyOnFloor,
  );

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {cityName} = useSelector((store: any) => store.filter);

  const [cityError, setCityError] = useState('');
  const [furnishedError, setFurnishedError] = useState('');
  const [propertyError, setPropertyError] = useState('');
  const [parkingError, setParkingError] = useState('');
  const [totalFloorError, setTotalFloorError] = useState('');
  const [floorError, setFloorError] = useState('');
  const [skipOne, setSkipOne] = useState(false);

  const NoOfRooms = ['1BHK', '2BHK', '3BHK', '4BHK', '5BHK', '5BHK+'];
  const FurnishedStatus = [
    {label: 'unfurnished', value: 'Unfurnished'},
    {label: 'semi-furnished', value: 'Semi-Furnished'},
    {label: 'furnished', value: 'Furnished'},
  ];
  const Parking = ['Yes', 'No'];
  const status = [
    {label: 'readyToMove', value: 'Ready To Move'},
    {label: 'underConstruction', value: 'Under Construction'},
  ];


  function isInt(n : number){
    return ( Number(n) === n && n % 1 === 0 && n > 0);
}

// isInt(5)
// function isFloat(n){
//     return Number(n) === n && n % 1 !== 0;
// }

  const setTotalFloorHandel = (params: number) => {
    setTotalFloor(params);
    if (!totalFloor) {
      setTotalFloorError('Please enter total floor !');
    } else if (!isInt(totalFloor)) {
      setTotalFloorError('Please enter valid floor !');
    } else {
      setTotalFloorError('');
    }

    dispatch(
      UpdateNewListing({
        key: 'totalFloor',
        value: totalFloor,
      }),
    );
  };
  const setPropertyOnFloorHandel = (params: number) => {
    setProperyOnFloor(params);

    if (!propertyOnFloor) {
      setFloorError('Please enter floor !');
    } else if (!isInt(propertyOnFloor)) {
      setFloorError('Please enter valid number !');
    } else if (Number(params) > Number(totalFloor)) {
      setFloorError('Enter valid floor !');
    } else {
      setFloorError('');
    }

    dispatch(
      UpdateNewListing({
        key: 'propertyOnFloor',
        value: propertyOnFloor,
      }),
    );
  };
  // const ageOfProperty = ['0-1', '1-2'];

  const validate = () => {
    if (!newListing?.state) {
      setCityError('Please add location');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('');
      return false;
    } else if (!newListing?.furnishedStatus) {
      setCityError('');
      setFurnishedError('Please select furnished status!');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('');
      return false;
    } else if (!newListing?.status) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('Please select property status !');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('');
      return false;
    } else if (!newListing?.parking) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('Please select parking !');
      setTotalFloorError('');
      setFloorError('');
      return false;
    } else if (!totalFloor) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('Please enter total floor !');
      setFloorError('');
      return false;
    } else if (isNaN(parseInt(totalFloor, 10))) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('Please enter valid total floor !');
      setFloorError('');
      return false;
    } else if (parseInt(totalFloor, 10) < 0) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('Please enter valid total floor !');
      setFloorError('');
      return false;
    } else if (!propertyOnFloor) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('Please enter property on floor !');
      return false;
    } else if (isNaN(parseInt(propertyOnFloor, 10))) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('Please enter valid property on floor !');
      return false;
    } else if (parseInt(propertyOnFloor, 10) < 0) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('Please enter valid property on floor !');
      return false;
    } else if (parseInt(propertyOnFloor, 10) > parseInt(totalFloor, 10)) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('Please enter valid property on floor !');
      return false;
    } else {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('');
      return true;
    }
  };

  useEffect(() => {
    if (skipOne) {
      validate();
    }
    setSkipOne(true);
  }, [newListing]);

  const setNoOfRoomsHandel = (params: any) => {
    setNoOfRooms(params);
    dispatch(
      UpdateNewListing({
        key: 'bhk',
        value: params,
      }),
    );
  };
  const setFurnishedStatusHandel = (params: any) => {
    setFurnishedStatus(params);
    console.log(params);

    dispatch(
      UpdateNewListing({
        key: 'furnishedStatus',
        value: params,
      }),
    );
  };

  const setParkingHandel = (params: any) => {
    if (!params) {
      setParkingError('Please select parking !');
    } else {
      setParkingError('');
    }
    setParking(params);
    dispatch(
      UpdateNewListing({
        key: 'parking',
        value: params,
      }),
    );
  };

  const setPropertyStatusHandel = (params: any) => {
    if (!params) {
      setPropertyError('Please select property status !');
    } else {
      setPropertyError('');
    }
    setStatus(params);
    dispatch(
      UpdateNewListing({
        key: 'status',
        value: params,
      }),
    );
  };

  const handleNext = () => {
    if (!newListing?.city) {
      setCityError('Please add location');
    } else {
      setCityError('');
    }

    dispatch(
      UpdateNewListing({
        key: 'state',
        value: newListing?.state,
      }),
    );
    dispatch(
      UpdateNewListing({
        key: 'city',
        value: newListing?.city,
      }),
    );
    const isValid = validate();
    if (isValid) {
      navigation.navigate('PostPropertyThird' as never);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.view}>
        <View style={styles.container}>
          <View style={styles.buttonBack}>
            <HeaderWithBackBtn />
          </View>

          <TouchableNativeFeedback onPress={Keyboard.dismiss}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={styles.innerContainer}>
                <View style={styles.headerText}>
                  <Text style={styles.steps}>Step 2 of 4</Text>
                  <Text style={styles.basicDetailsText}>Property Details</Text>
                </View>
                <View style={styles.mainText}>
                  <Text style={styles.locatedText}>Where is it located ? </Text>
                  <Text
                    style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                    *
                  </Text>
                </View>

                <View style={styles.addCityNameContainer}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}>
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('AddCityName' as never);
                      }}
                      style={styles.addCityName}>
                      <Text
                        style={{
                          color: dark,
                          fontSize:
                            width > 500
                              ? responsiveFontSize(1)
                              : responsiveFontSize(2),
                        }}>
                        Location
                      </Text>
                      <Ionicons style={styles.addFont} name={'add'} />
                    </TouchableOpacity>
                    {newListing?.city && (
                      <View style={styles.locationDetails}>
                        {/* <LocationBtn label={newListing?.state} /> */}
                        <LocationBtn label={newListing?.city} />
                      </View>
                    )}
                  </ScrollView>
                </View>
                {cityError ? (
                  <Text style={styles.errorCity}>{cityError} !</Text>
                ) : null}
              </View>
              <View>
                <Text style={styles.locatedText}>Add Rooms Details</Text>
                <View style={styles.mainText}>
                  <Text style={styles.noOfBedroomsText}>BHK ? </Text>
                  <Text
                    style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                    *
                  </Text>
                </View>

                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  <View style={styles.noOfBedrooms}>
                    {NoOfRooms.map(option => (
                      <OptionBtn
                        key={option}
                        label={option}
                        btnPressHandler={setNoOfRoomsHandel}
                        style={[
                          styles.notColored,
                          newListing?.bhk === option ? styles.colored : null,
                        ]}
                        id={option}
                      />
                    ))}
                  </View>
                </ScrollView>
                <View style={styles.mainText}>
                  <Text style={styles.noOfBedroomsText}>
                    Furnished Status ?{' '}
                  </Text>
                  <Text
                    style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                    *
                  </Text>
                </View>

                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal={true}>
                  <View style={styles.noOfBedrooms}>
                    {FurnishedStatus.map((option: any) => (
                      <OptionBtn
                        id={option.label}
                        key={option.label}
                        label={option.value}
                        btnPressHandler={setFurnishedStatusHandel}
                        style={[
                          styles.notColored,
                          newListing?.furnishedStatus === option.label
                            ? styles.colored
                            : null,
                        ]}
                      />
                    ))}
                  </View>
                </ScrollView>
                {furnishedError ? (
                  <Text style={styles.errorCity}>{furnishedError}</Text>
                ) : null}

                <View style={styles.status}>
                  <View style={styles.mainText}>
                    <Text
                      style={{
                        paddingVertical: responsiveScreenHeight(2),
                        color: dark,
                      }}>
                      Properties Status ?{' '}
                    </Text>
                    <Text
                      style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                      *
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
                    {status.map((option: any) => (
                      <OptionBtn
                        id={option.label}
                        key={option.label}
                        label={option.value}
                        btnPressHandler={setPropertyStatusHandel}
                        style={[
                          styles.notColored,
                          newListing?.status === option.label
                            ? styles.colored
                            : null,
                        ]}
                      />
                    ))}
                  </View>
                  {propertyError ? (
                    <Text style={styles.errorCity}>{propertyError}</Text>
                  ) : null}
                </View>

                <View style={styles.readyToMove}>
                  <View style={styles.mainText}>
                    <Text style={{color: dark}}>Parking ? </Text>
                    <Text
                      style={{fontSize: responsiveFontSize(2.5), color: 'red'}}>
                      *
                    </Text>
                  </View>

                  <View style={{flexDirection: 'row', gap: responsiveWidth(2)}}>
                    {Parking.map(option => (
                      <OptionBtn
                        key={option}
                        label={option}
                        btnPressHandler={setParkingHandel}
                        style={[
                          styles.notColored,
                          newListing?.parking === option
                            ? styles.colored
                            : null,
                        ]}
                        id={option}
                      />
                    ))}
                  </View>
                  {parkingError ? (
                    <Text style={styles.errorCity}>{parkingError}</Text>
                  ) : null}
                  <View style={styles.inputContainer}>
                    <View style={styles.mainText}>
                      <Text style={{color: dark}}>
                        Total Number Of Floor ?{' '}
                      </Text>
                      <Text
                        style={{
                          fontSize: responsiveFontSize(2.5),
                          color: 'red',
                        }}>
                        *
                      </Text>
                    </View>

                    <CustomTextInput
                      onChangeText={setTotalFloorHandel}
                      value={newListing?.totalFloor}
                      placeholder="Number of floor"
                      keyboardType="numeric"
                      errorText={totalFloorError}
                    />
                  </View>
                  {totalFloorError ? (
                    <Text style={styles.errorCity}>{totalFloorError}</Text>
                  ) : null}
                  <View style={styles.inputContainer1}>
                    <View style={styles.mainText}>
                      <Text style={{color: dark}}>Property on Floor ? </Text>
                      <Text
                        style={{
                          fontSize: responsiveFontSize(2.5),
                          color: 'red',
                        }}>
                        *
                      </Text>
                    </View>

                    <CustomTextInput
                      onChangeText={setPropertyOnFloorHandel}
                      value={newListing?.propertyOnFloor}
                      placeholder="Property on floor"
                      keyboardType="numeric"
                      errorText={floorError}
                    />
                    {floorError ? (
                      <Text style={{color: 'red', textAlign: 'right'}}>
                        {floorError}
                      </Text>
                    ) : null}
                  </View>
                </View>
                <View style={styles.bottomBtn}>
                  <ExploreButton onPress={() => handleNext()} title="Next" />
                </View>
              </View>
            </ScrollView>
          </TouchableNativeFeedback>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default PostPropertySecond;

const styles = StyleSheet.create({
  headerText: {},
  container: {
    flex: 1,
    marginHorizontal: responsiveScreenWidth(4),
  },
  view: {
    flex: 1,
  },
  innerContainer: {},
  buttonBack: {
    paddingVertical: responsiveScreenHeight(1.4),
  },
  steps: {
    color: dark,
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetailsText: {
    color: dark,
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  errorCity: {
    color: 'red',
    textAlign: 'right',
  },
  locationDetails: {
    flexDirection: 'row',
    paddingHorizontal: responsiveScreenWidth(3),
  },
  mainText: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveScreenHeight(2),
  },
  locatedText: {
    color: dark,
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
  },
  addCityNameContainer: {
    flexDirection: 'row',
    marginVertical: responsiveHeight(1),
    paddingVertical: responsiveScreenHeight(1),
    gap: responsiveWidth(5),
  },
  addCityName: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1),
    gap: 5,
  },
  showCityName: {
    borderWidth: responsiveWidth(0.3),
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
    padding: 5,
  },
  addFont: {
    color: dark,
    fontSize: responsiveFontSize(3),
  },
  removeFont: {
    fontSize: responsiveFontSize(2.5),
  },
  notColored: {
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(20),
    borderColor: 'gray',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveScreenHeight(1.5),
  },
  colored: {
    borderColor: '#8BC83F',
  },
  noOfBedroomsText: {
    color: dark,
    marginVertical: responsiveScreenHeight(1),
  },
  noOfBedrooms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  inputContainer: {
    marginTop: responsiveScreenHeight(1),
  },
  inputContainer1: {
    // marginBottom: responsiveScreenHeight(1.7),
  },
  bottomBtn: {
    paddingVertical: responsiveScreenHeight(2),
  },
  readyToMove: {
    gap: responsiveHeight(1),
  },
  yes: {
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(4),
    borderColor: '#8BC83F',
    padding: responsiveWidth(2),
  },
  no: {
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(4),
    borderColor: 'gray',
    padding: responsiveWidth(2),
  },
  status: {
    // marginVertical: responsiveScreenHeight(2),
  },
});
