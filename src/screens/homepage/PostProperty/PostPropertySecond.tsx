import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
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

const PostPropertySecond = () => {
  const [noOfRooms, setNoOfRooms] = useState('1BHK');
  const [furnishedStatus, setFurnishedStatus] = useState('Unfurnished');
  const [parking, setParking] = useState('');

  const {newListing} = useSelector((store: any) => store.post);

  const [readyToMove, setReadyToMove] = useState('');
  const [propertyStatus, setStatus] = useState('');
  const [totalFloor, setTotalFloor] = useState('');
  const [propertyOnFloor, setProperyOnFloor] = useState('');

  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {cityName} = useSelector((store: any) => store.filter);

  const [cityError, setCityError] = useState('');
  const [furnishedError, setFurnishedError] = useState('');
  const [propertyError, setPropertyError] = useState('');
  const [parkingError, setParkingError] = useState('');
  const [totalFloorError, setTotalFloorError] = useState('');
  const [floorError, setFloorError] = useState('');

  const NoOfRooms = ['1BHK', '2BHK', '3BHK', '4BHK', '5BHK', '5BHK+'];
  const FurnishedStatus = ['unfurnished', 'semi-furnished', 'furnished'];
  const Parking = ['Yes', 'No'];
  const status = ['readyToMove', 'underConstruction'];

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
    } else if (!newListing?.totalFloor) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('Please select total floor !');
      setFloorError('');
      return false;
    } else if (!newListing?.propertyOnFloor) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('Please select property on floor !');
      return false;
    } else if (Number(propertyOnFloor) > Number(totalFloor)) {
      setCityError('');
      setFurnishedError('');
      setPropertyError('');
      setParkingError('');
      setTotalFloorError('');
      setFloorError('Enter valid floor !');
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

  const setTotalFloorHandel = (params: string) => {
    if (!params) {
      setTotalFloorError('Please enter total floor !');
    } else {
      setTotalFloorError('');
    }
    setTotalFloor(params);
    dispatch(
      UpdateNewListing({
        key: 'totalFloor',
        value: params,
      }),
    );
  };
  const setPropertyOnFloorHandel = (params: string) => {
    if (!params) {
      setFloorError('Please enter floor !');
    } else if (Number(params) > Number(totalFloor)) {
      setFloorError('Enter valid floor !');
    } else {
      setFloorError('');
    }
    setProperyOnFloor(params);
    dispatch(
      UpdateNewListing({
        key: 'propertyOnFloor',
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
      <View style={styles.container}>
        <View style={styles.buttonBack}>
          <HeaderWithBackBtn />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.innerContainer}>
            <View style={styles.headerText}>
              <Text style={styles.steps}>Step 2 of 3</Text>
              <Text style={styles.basicDetailsText}>Property Details</Text>
            </View>
            <View style={styles.mainText}>
              <Text style={styles.locatedText}>Where is it located ? </Text>
              <Ionicons name="star" color={dark} size={responsiveWidth(3)} />
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
                  <Text style={{color: dark}}>Location</Text>
                  <Ionicons style={styles.addFont} name={'add'} />
                </TouchableOpacity>
                {newListing?.city && (
                  <View style={styles.locationDetails}>
                    <LocationBtn label={newListing?.state} />
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
              <Ionicons name="star" color={dark} size={responsiveWidth(3)} />
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
              <Text style={styles.noOfBedroomsText}>Furnished Status ? </Text>
              <Ionicons name="star" color={dark} size={responsiveWidth(3)} />
            </View>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}>
              <View style={styles.noOfBedrooms}>
                {FurnishedStatus.map((option: string) => (
                  <OptionBtn
                    id={option}
                    key={option}
                    label={option}
                    btnPressHandler={setFurnishedStatusHandel}
                    style={[
                      styles.notColored,
                      newListing?.furnishedStatus === option
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
                <Ionicons name="star" color={dark} size={responsiveWidth(3)} />
              </View>

              <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
                {status.map(option => (
                  <OptionBtn
                    key={option}
                    label={option}
                    btnPressHandler={setPropertyStatusHandel}
                    style={[
                      styles.notColored,
                      newListing?.status === option ? styles.colored : null,
                    ]}
                    id={option}
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
                <Ionicons name="star" color={dark} size={responsiveWidth(3)} />
              </View>

              <View style={{flexDirection: 'row', gap: responsiveWidth(2)}}>
                {Parking.map(option => (
                  <OptionBtn
                    key={option}
                    label={option}
                    btnPressHandler={setParkingHandel}
                    style={[
                      styles.notColored,
                      newListing?.parking === option ? styles.colored : null,
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
                  <Text style={{color: dark}}>Total Number Of Floor ? </Text>
                  <Ionicons
                    name="star"
                    color={dark}
                    size={responsiveWidth(3)}
                  />
                </View>

                <CustomTextInput
                  onChangeText={setTotalFloorHandel}
                  value={newListing?.totalFloor}
                  placeholder="No Of Floor"
                />
              </View>
              {totalFloorError ? (
                <Text style={styles.errorCity}>{totalFloorError}</Text>
              ) : null}
              <View style={styles.inputContainer1}>
                <View style={styles.mainText}>
                  <Text style={{color: dark}}>Property on Floor ? </Text>
                  <Ionicons
                    name="star"
                    color={dark}
                    size={responsiveWidth(3)}
                  />
                </View>

                <CustomTextInput
                  onChangeText={setPropertyOnFloorHandel}
                  value={newListing?.propertyOnFloor}
                  placeholder="Property On Floor"
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
      </View>
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
  innerContainer: {},
  buttonBack: {},
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
    padding: 5,
    gap: responsiveWidth(5),
  },
  addCityName: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
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
