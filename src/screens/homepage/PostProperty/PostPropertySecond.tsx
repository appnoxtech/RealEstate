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

const PostPropertySecond = () => {
  const [noOfRooms, setNoOfRooms] = useState('1BHK');
  const [furnishedStatus, setFurnishedStatus] = useState('Unfurnished');
  const [parking, setParking] = useState('');

  const {newListing} = useSelector((store: any) => store.post);


  const [readyToMove, setReadyToMove] = useState('');
  const [propertyStatus, setStatus] = useState('');
  const [totalFloor, setTotalFloor] = useState('');
  const [propertyOnFloor, setProperyOnFloor] = useState('');
  console.log(totalFloor, propertyOnFloor);
  
  const [floorError, setFloorError] = useState('')
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {cityName} = useSelector((store: any) => store.filter);
  const [cityError, setCityError] = useState('');

  const NoOfRooms = ['1BHK', '2BHK', '3BHK', '4BHK', '5BHK', '5BHK+'];
  const FurnishedStatus = ['unfurnished', 'semi-furnished', 'furnished'];
  const Parking = ['Yes', 'No'];
  const status = ['readyToMove', 'underConstruction'];
  // const ageOfProperty = ['0-1', '1-2'];

  const validate = () => {
    if (!cityName) {
      setCityError('Please select city name !');
      return false;
    } else {
      setCityError('');
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
    setParking(params);
    dispatch(
      UpdateNewListing({
        key: 'parking',
        value: params,
      }),
    );
  };

  const setPropertyStatusHandel = (params: any) => {
    setStatus(params);
    dispatch(
      UpdateNewListing({
        key: 'status',
        value: params,
      }),
    );
  };

  const validateOnFloor = () => {
    if(propertyOnFloor > totalFloor) {
      setFloorError("Enter valid floor !");
      return false;
    } else {
      setFloorError("");
      return true;
    }
  }
  const setTotalFloorHandel = (params: string) => {
    setTotalFloor(params);
    dispatch(
      UpdateNewListing({
        key: 'totalFloor',
        value: params,
      }),
    );
  };
  const setPropertyOnFloorHandel = (params: string) => {
    setProperyOnFloor(params);
    dispatch(
      UpdateNewListing({
        key: 'propertyOnFloor',
        value: params,
      }),
    );
  };

  const handleNext = () => {
    const isValid = validateOnFloor();
    dispatch(
      UpdateNewListing({
        key: 'location',
        value: newListing?.location,
      }),
    );
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

            <Text style={styles.locatedText}>Where is it located ?</Text>
            <View style={styles.addCityNameContainer}>
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('AddCityName' as never);
                  }}
                  style={styles.addCityName}>
                  <Text>City</Text>
                  <Ionicons style={styles.addFont} name={'add'} />
                </TouchableOpacity>
                <View style={styles.locationDetails}>
                  {Array.isArray(newListing?.location) &&
                    newListing.location.map((option: string) => (
                      <LocationBtn key={option} label={option} />
                    ))}
                </View>
              </ScrollView>
            </View>
            {cityError ? (
              <Text style={styles.errorCity}>{cityError} !</Text>
            ) : null}
          </View>
          <View>
            <Text style={styles.locatedText}>Add Rooms Details</Text>
            <Text style={styles.noOfBedroomsText}>BHK ?</Text>
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
                      noOfRooms === option ? styles.colored : null,
                    ]}
                    id={option}
                  />
                ))}
              </View>
            </ScrollView>
            <Text style={styles.noOfBedroomsText}>Furnished Status</Text>
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
                      furnishedStatus === option ? styles.colored : null,
                    ]}
                  />
                ))}
              </View>
            </ScrollView>

            <View style={styles.status}>
              <Text style={{marginBottom: responsiveScreenHeight(1)}}>
                Properties Status ?
              </Text>
              <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
                {status.map(option => (
                  <OptionBtn
                    key={option}
                    label={option}
                    btnPressHandler={setPropertyStatusHandel}
                    style={[
                      styles.notColored,
                      propertyStatus === option ? styles.colored : null,
                    ]}
                    id={option}
                  />
                ))}
              </View>
            </View>

            <View style={styles.readyToMove}>
              <Text>Parking ? </Text>
              <View style={{flexDirection: 'row', gap: responsiveWidth(2)}}>
                {Parking.map(option => (
                  <OptionBtn
                    key={option}
                    label={option}
                    btnPressHandler={setParkingHandel}
                    style={[
                      styles.notColored,
                      parking === option ? styles.colored : null,
                    ]}
                    id={option}
                  />
                ))}
              </View>
              <View style={styles.inputContainer}>
                <Text>Total Number Of Number Floor</Text>
                <CustomTextInput
                  onChangeText={setTotalFloorHandel}
                  value={totalFloor}
                  placeholder="No Of Floor"
                />
              </View>
              <View style={styles.inputContainer1}>
                <Text>Property on Floor</Text>
                <CustomTextInput
                  onChangeText={setPropertyOnFloorHandel}
                  value={propertyOnFloor}
                  placeholder="Property On Floor"
                />
              </View>
              {floorError? <Text style={{color: 'red', textAlign: 'right'}}>{floorError}</Text>: null}
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
    fontSize: responsiveScreenFontSize(1.9),
    fontWeight: '400',
  },
  basicDetailsText: {
    fontSize: responsiveFontSize(3.8),
    fontWeight: 'bold',
  },
  errorCity: {
    color: 'red',
    textAlign: 'right',
  },
  locationDetails: {
    flexDirection: 'row',
    paddingHorizontal: responsiveScreenWidth(3)
  },
  locatedText: {
    marginTop: responsiveHeight(3),
    fontSize: responsiveFontSize(2.5),
    fontWeight: '600',
  },
  addCityNameContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(1),
    borderWidth: responsiveWidth(0.1),
    borderRightWidth: 0,
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
    marginVertical: responsiveScreenHeight(2),
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
    marginVertical: responsiveScreenHeight(2),
  },
});
