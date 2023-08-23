import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, {useEffect} from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Slider from '@react-native-community/slider';
import ExploreButton from '../../common/buttons/ExploreButton';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateNewListing} from '../../../redux/reducers/postReducer';
import {UpdateCityName} from '../../../redux/reducers/filterReducer';
import {URL} from '@env';
import axios from 'axios';
import LocationBtn from '../../common/buttons/LocationBtn';
import {dark} from '../../../../assets/Styles/GlobalTheme';
import OptionBtn from '../../common/buttons/OptionBtn';
import CustomTextInput from '../../common/inputs/inputComponent';

const SearchFilterPage = ({route}: any) => {

  const [areaType, setAreaType] = useState<'residential' | 'commercial'>(
    'residential',
  );
  const [lookingTo, setLookingTo] = useState<'Buy' | 'Rent / Lease'>('Buy');

  const [sliderValue, setSliderValue] = useState(10);
  const [area, setArea] = useState();
  const [status, setStatus] = useState('');
 
  
  
  

  const Navigation = useNavigation();
  const {newListing} = useSelector((store: any) => store.post);

  const navigation = useNavigation();
  const dispatch = useDispatch();


  const handelArea = (params: any) => {
    setArea(params)
  }

  const setStatusHandel = (params: any) => {
    setStatus(params)
  }

  const setFurnishedStatusHandel = (params: any) => {
    dispatch(
      UpdateNewListing({
        key: 'furnishedStatus',
        value: params,
      }),
    );
  };

  const setBHKStatusHandel = (params: any) => {
    dispatch(
      UpdateNewListing({
        key: 'bhk',
        value: params,
      }),
    );
  };

  const handleSearch = async () => {
    try {
      const searchString = `search?type=${
        areaType === 'residential'
          ? 'Residential-property'
          : 'Commercial-property'
      }&lookingTo=${
        lookingTo === 'Buy' ? 'Sell' : 'Rent/Lease'
      }&price=${sliderValue}&furnishedStatus=${
        newListing?.furnishedStatus
      }&state=${newListing?.state}&city=${newListing?.city}&bhk=${
        newListing?.bhk
      }&status=${status}&area=${area}`;
      const url = `${URL}${searchString}`;

      console.log('xyz--->', url);

      const res = await axios.get(url);

      const {result} = res.data;

      Navigation.navigate('RenderSearchResult' as never, {
        cityData: result,
        cityName,
      });
    } catch (error: any) {
      const sendMessage = error.response.data.error.message;

      Navigation.navigate('FallBackSearch' as never, {sendMessage});
    }
  };

  const FurnishedStatus = ['unfurnished', 'semi-furnished', 'furnished'];

  const DATA = ['1RK/1BHK', '2BHK', '3BHK', '4BHK', '5BHK', '5BHK+'];

  const statusData = ['readyToMove', 'underConstruction'];


  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginHorizontal: responsiveScreenWidth(2.5),
          marginVertical: responsiveScreenHeight(1),
        }}>
        <HeaderWithBackBtn />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.main}>
          <Text style={{color: dark, paddingBottom: responsiveScreenHeight(2)}}>
            Type ?
          </Text>
          <View style={styles.propertyTYpe}>
            <TouchableOpacity
              onPress={() => {
                setAreaType('residential');
              }}
              style={
                areaType === 'residential'
                  ? styles.typeColor
                  : styles.residential
              }>
              <Text style={{color: dark}}>Residential</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAreaType('commercial');
              }}
              style={
                areaType === 'commercial'
                  ? styles.typeColor
                  : styles.residential
              }>
              <Text style={{color: dark}}>Commercial</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.pb10}>Looking to ?</Text>
          <View style={styles.lookingTo}>
            <TouchableOpacity
              onPress={() => {
                setLookingTo('Buy');
              }}
              style={
                lookingTo === 'Buy' ? styles.pressedbuyrent : styles.buyrent
              }>
              <Text style={{color: dark}}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLookingTo('Rent / Lease');
              }}
              style={
                lookingTo === 'Rent / Lease'
                  ? styles.pressedbuyrent
                  : styles.buyrent
              }>
              <Text style={{color: dark}}>Rent/Lease</Text>
            </TouchableOpacity>
          </View>
        </View>
      <Text style={[styles.pb10, {paddingHorizontal: responsiveScreenWidth(5)}]}>Location ?</Text>
        <View style={styles.addCityNameContainer}>
          
          <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddCityName' as never);
              }}
              style={styles.addCityName}>
              <Text style={{color: dark, }}>Location</Text>
              <Ionicons style={styles.addFont} name={'add'} color={dark} />
            </TouchableOpacity>
            <View style={styles.locationDetails}>
              {newListing?.state ? (
                <LocationBtn label={newListing?.state} />
              ) : null}
              {newListing?.city ? (
                <LocationBtn label={newListing?.city} />
              ) : null}
            </View>
          </ScrollView>
        </View>
        <View style={styles.budgetContainer}>
          <Text style={{color: dark}}>Budget ?</Text>

          <View style={styles.budgetText}>
            <Text style={{color: dark}}>$5</Text>
            <Text style={{color: dark}}> to </Text>
            <Text style={{color: dark}}>${sliderValue}+ </Text>
          </View>
          <Slider
            maximumValue={10000000}
            minimumValue={0}
            minimumTrackTintColor="#8BC83F"
            maximumTrackTintColor="gray"
            step={10000}
            value={sliderValue}
            onValueChange={sliderValue => setSliderValue(sliderValue)}
          />
        </View>
        <View style={{paddingHorizontal: responsiveScreenWidth(5)}}>
          <Text style={styles.furnishedText}>Furnished Status ?</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.furnishedStatus}>
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
        </View>
        <View style={{paddingHorizontal: responsiveScreenWidth(5)}}>
          <Text style={styles.furnishedText}>No. of Bedrooms ?</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.furnishedStatus}>
              {DATA.map((option: string) => (
                <OptionBtn
                  id={option}
                  key={option}
                  label={option}
                  btnPressHandler={setBHKStatusHandel}
                  style={[
                    styles.notColored,
                    newListing?.bhk === option ? styles.colored : null,
                  ]}
                />
              ))}
            </View>
          </ScrollView>
          <Text style={styles.status}>Status ?</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={styles.furnishedStatus}>
              {statusData.map((option: any) => (
                <OptionBtn
                  id={option}
                  key={option}
                  label={option}
                  btnPressHandler={setStatusHandel}
                  style={[
                    styles.notColored,
                    status === option ? styles.colored : null,
                  ]}
                />
              ))}
            </View>
          </ScrollView>
          <Text style={styles.area}>Enter area ?</Text>
          <CustomTextInput onChangeText={handelArea} value={area} placeholder="sq.ft" />
        </View>
        <View style={styles.button}>
          <ExploreButton title="Search" onPress={handleSearch} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchFilterPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  main: {
    marginTop: responsiveHeight(3),
    paddingHorizontal: responsiveScreenWidth(5),
  },
  propertyTYpe: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(7),
  },
  residential: {
    borderBottomWidth: 0,
  },
  commercial: {
    borderBottomWidth: 0,
  },
  typeColor: {
    borderBottomWidth: responsiveWidth(0.3),
    borderBottomColor: '#8BC83F',
  },
  pb10: {
    color: dark,
    paddingTop: responsiveScreenHeight(2),
  },
  lookingTo: {
    flexDirection: 'row',
    gap: responsiveScreenWidth(2),
    marginTop: responsiveScreenHeight(2),
  },

  bronPress: {
    borderColor: '#8BC83F',
  },
  buyrent: {
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'white',
    padding: 8,
  },
  pressedbuyrent: {
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    padding: 8,
  },
  addCityNameContainer: {
    flexDirection: 'row',
    marginTop: responsiveHeight(2),
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1),
   gap: responsiveWidth(5),
  },
  locationDetails: {
    flexDirection: 'row',
    paddingHorizontal: responsiveScreenWidth(3),
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
    fontSize: responsiveFontSize(3),
  },
  removeFont: {
    fontSize: responsiveFontSize(2.5),
  },

  budgetContainer: {
    paddingVertical: responsiveScreenHeight(3),
    paddingHorizontal: responsiveScreenWidth(5),
    gap: responsiveHeight(2.5),
  },
  budgetText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  typesOfProperty: {
    paddingHorizontal: responsiveScreenWidth(5),
    gap: responsiveHeight(1),
  },
  typeOfPropertyStyle: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    paddingHorizontal: responsiveScreenWidth(2),
    gap: 5,
  },
  typeOfPropertyStyleColor: {
    alignSelf: 'flex-start',

    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(2),

    gap: 5,
  },
  furnishedText: {
    color: dark,
    paddingVertical: responsiveScreenHeight(2),
  },
  furnishedStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(3),
    // paddingHorizontal: responsiveScreenWidth(5),
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
  noOfBedrooms: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2),
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(0.5),
    borderWidth: responsiveWidth(0.1),
    borderRadius: 30,
    marginHorizontal: 5,
  },
  afterClickOnItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(0.5),
    borderWidth: responsiveWidth(0.3),
    borderColor: '#8BC83F',
    borderRadius: 30,
    marginHorizontal: 5,
  },
  title: {
    color: dark,
    fontSize: responsiveFontSize(1.7),
    padding: responsiveScreenWidth(1),
  },
  typesOfBedrooms: {
    paddingHorizontal: responsiveScreenWidth(5),
  },

  button: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2),
  },
  area: {
    color: dark,
    paddingTop: responsiveScreenHeight(2.7),
  },
  status: {
    color: dark,
    paddingVertical: responsiveScreenHeight(2.2),
  },
});
