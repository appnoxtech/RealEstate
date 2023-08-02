import {
  SafeAreaView,
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

const PostPropertySecond = () => {
  const [noOfRooms, setNoOfRooms] = useState('');
  const [noOfBathRooms, setNoOfBathRooms] = useState('');

  const {newListing} = useSelector((store: any) => store.post);
  const [readyToMove, setReadyToMove] = useState('');
  const [propertyStatus, setStatus] = useState('');
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {cityName} = useSelector((store: any) => store.filter);
  const [cityError, setCityError] = useState('');
  const handleCityName = () => {
    dispatch(UpdateCityName(''));
  };

  const NoOfRooms = ['1', '2', '3', '4', '5', '5+'];
  const NoOfBathRooms = ['1', '2', '3', '4+'];
  const yesNo = ['Yes', 'No'];
  const status = ['available', 'rented', 'booked'];

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
        key: 'bedrooms',
        value: params,
      }),
    );
  };
  const setNoOfBathRoomsHandel = (params: any) => {
    setNoOfBathRooms(params);
    dispatch(
      UpdateNewListing({
        key: 'bathrooms',
        value: params,
      }),
    );
  };

  const setReadyToMoveHandel = (params: any) => {
    setReadyToMove(params);
    dispatch(
      UpdateNewListing({
        key: 'readyToMove',
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

  const handleNext = () => {
    const isValid = validate();
    if (isValid) {
      navigation.navigate('PostPropertyThird' as never);
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <View style={styles.innerContainer}>
          <View style={styles.buttonBack}>
            <HeaderWithBackBtn />
          </View>
          <View style={styles.headerText}>
            <Text style={styles.steps}>Step 2 of 3</Text>
            <Text style={styles.basicDetailsText}>Property Details</Text>
          </View>

          <Text style={styles.locatedText}>Where is it located ?</Text>
          <View style={styles.addCityNameContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddCityName' as never);
              }}
              style={styles.addCityName}>
              <Text>City</Text>
              <Ionicons style={styles.addFont} name={'add'} />
            </TouchableOpacity>

            {cityName ? (
              <View style={styles.showCityName}>
                <Text>{cityName}</Text>
                <TouchableOpacity onPress={() => handleCityName()}>
                  <Ionicons style={styles.removeFont} name={'close'} />
                </TouchableOpacity>
              </View>
            ) : null}
          </View>
          {cityError? <Text style={styles.errorCity}>{cityError} !</Text> : null}
        </View>
        <View>
          <Text style={styles.locatedText}>Add Rooms Details</Text>
          <Text style={styles.noOfBedroomsText}>No. of bedrooms ?</Text>
          <View style={styles.noOfBedrooms}>
            {NoOfRooms.map(option => (
              <OptionBtn
                key={option}
                label={option}
                btnPressHandler={setNoOfRoomsHandel}
                style={
                  noOfRooms === option ? styles.colored : styles.notColored
                }
              />
            ))}
          </View>
          <Text style={styles.noOfBedroomsText}>No. of Bathrooms ?</Text>
          <View style={styles.noOfBedrooms}>
            {NoOfBathRooms.map(option => (
              <OptionBtn
                key={option}
                label={option}
                btnPressHandler={setNoOfBathRoomsHandel}
                style={
                  noOfBathRooms === option ? styles.colored : styles.notColored
                }
              />
            ))}
          </View>

          <View style={styles.readyToMove}>
            <Text>Looking for "ReadytoMove" properties ? </Text>
            <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
              {yesNo.map(option => (
                <OptionBtn
                  key={option}
                  label={option}
                  btnPressHandler={setReadyToMoveHandel}
                  style={
                    readyToMove === option ? styles.colored : styles.notColored
                  }
                />
              ))}
            </View>
          </View>
          <View style={styles.status}>
            <Text style={{marginBottom: responsiveScreenHeight(1)}}>Properties Status ? </Text>
            <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
              {status.map(option => (
                <OptionBtn
                  key={option}
                  label={option}
                  btnPressHandler={setPropertyStatusHandel}
                  style={
                    propertyStatus === option
                      ? styles.colored
                      : styles.notColored
                  }
                />
              ))}
            </View>
          </View>
        </View>
        <View style={styles.bottomBtn}>
          <ExploreButton onPress={() => handleNext()} title="Next" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PostPropertySecond;

const styles = StyleSheet.create({

  headerText:{},
  container: {
    flex: 1,
    marginHorizontal: responsiveScreenWidth(4),
  },
  innerContainer: {
    
  },
  buttonBack: {
    
  },
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
    paddingVertical: responsiveScreenHeight(1.9),
  },
  colored: {
    alignSelf: 'flex-start',
    borderWidth: responsiveWidth(0.5),
    borderRadius: responsiveWidth(20),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveWidth(5),
    paddingVertical: responsiveScreenHeight(1.9),
  },
  noOfBedroomsText: {
    marginVertical: responsiveScreenHeight(2),
  },
  noOfBedrooms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
  },
  bottomBtn: {
    paddingVertical: responsiveScreenHeight(2),
  },
  readyToMove: {
    paddingVertical: responsiveScreenHeight(3),
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
  status: {},
});
