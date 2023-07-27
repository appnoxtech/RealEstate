import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React, { useEffect } from 'react';
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
import {UpdateCityName} from '../../../redux/reducers/filterReducer';
import { URL } from '@env';
import axios from 'axios';

const SearchFilterPage = ({route}: any) => {
  // const [selectedBedroom, setSelectedBedroom] = useState(1);
  const [areaType, setAreaType] = useState<'residential' | 'commercial'>('residential');
  const [lookingTo, setLookingTo] = useState<'Buy' | 'Rent / Lease'>('Buy');
  const [readyToMove, setReadyToMove] = useState<'Yes' | 'No'>('Yes');
  const [bgColor, setbgColor] = useState(false);
  const [bgColor1, setbgColor1] = useState(false);
  const [bgColor2, setbgColor2] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const [onPress, setOnPress] = useState(true);
  const [selectedId, setSelectedId] = useState(1);
  const [bedrooms, setBedrooms] = useState(false);
  const {cityName} = useSelector((store: any) => store.filter);
  const Navigation = useNavigation();
  // const [searchString, setSearchString] = useState(`${cityName}&type=${areaType === 'residential' ? "Residential-property" : "Commercial-property"}&price=${sliderValue}`);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleCityName = () => {
    dispatch(UpdateCityName(''));
  };

 
  const handleSubmit = () => {
    return setbgColor(!bgColor);
  };
  const handleSubmit1 = () => {
    return setbgColor1(!bgColor1);
  };
  const handleSubmit2 = () => {
    return setbgColor2(!bgColor2);
  };

  const handleSearch = async () => {
    try {
      const searchString = `search?location=${cityName}&type=${areaType === 'residential' ? "Residential-property" : "Commercial-property"}&lookingTo=${lookingTo === 'Buy' ? 'Buy' : 'Rent/Lease'}&bedrooms=${selectedId}&readyToMove=${readyToMove === 'Yes' ? 'Yes' : 'No'}&price=${sliderValue}`;
      const url = `${URL}${searchString}`;
      console.log(searchString)
      console.log('url', url);
      
      const res = await axios.get(url);
      // console.log('res', res);
      const {result} = res.data;
      // console.log('result', result);
      Navigation.navigate('RenderSearchResult' as never, {cityData: result, cityName});
    } catch (error : any) {
      const sendMessage = error.response.data.error.message;
      // console.log(sendMessage)
      Navigation.navigate('FallBackSearch' as never , {sendMessage })
      // console.log('Error', error.response.data.error.message);
    }
  }

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1RK / 1BHK',
      value: 1
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2BHK',
      value: 2
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3BHK',
      value: 3
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: '4BHK',
      value: 4
    },
  ];

  const Item = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => setSelectedId(item.value)}>
        <View style={selectedId === item.value ? styles.afterClickOnItem : styles.item}>
          {selectedId === item.id && bedrooms ? (
            <Ionicons style={styles.addFont} name={'checkmark'} />
          ) : (
            <Ionicons style={styles.addFont} name={'add'} />
          )}
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{marginHorizontal: responsiveScreenWidth(2.5), marginVertical: responsiveScreenHeight(1.7)}}>
          <HeaderWithBackBtn />
        </View>
        <View style={styles.main}>
          <View style={styles.propertyTYpe}>
            <TouchableOpacity
              onPress={() => {
                setAreaType('residential');
              }}
              style={areaType === 'residential' ? styles.typeColor : styles.residential}>
              <Text>Residential</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAreaType('commercial')
              }}
              style={areaType === 'commercial' ? styles.typeColor : styles.residential}>
              <Text>Commercial</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.pb10}>Looking to </Text>
          <View style={styles.lookingTo}>
            <TouchableOpacity
              onPress={() => {
                setLookingTo('Buy')
              }}
              style={lookingTo === 'Buy' ? styles.pressedbuyrent : styles.buyrent}>
              <Text>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setLookingTo('Rent / Lease')
              }}
              style={lookingTo === 'Rent / Lease' ? styles.pressedbuyrent : styles.buyrent}>
              <Text>Rent/Lease</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.addCityNameContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddCityName' as never)}
            style={styles.addCityName}>
            <Text>Add</Text>
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

        <View style={styles.budgetContainer}>
          <Text>Budget</Text>

          <View style={styles.budgetText}>
            <Text>$5</Text>
            <Text> to </Text>
            <Text>${sliderValue}+ </Text>
          </View>
          <Slider
            maximumValue={10000000}
            minimumValue={0}
            minimumTrackTintColor="#8BC83F"
            maximumTrackTintColor="gray"
            step={100000}
            value={sliderValue}
            onValueChange={sliderValue => setSliderValue(sliderValue)}
          />
        </View>
        <View style={styles.typesOfProperty}>
          <Text style={{fontSize: 20}}>Types of Property</Text>
          <TouchableOpacity
            onPress={() => handleSubmit()}
            style={
              bgColor
                ? styles.typeOfPropertyStyleColor
                : styles.typeOfPropertyStyle
            }>
            {bgColor ? (
              <Ionicons style={styles.addFont} name={'checkmark'} />
            ) : (
              <Ionicons style={styles.addFont} name={'add'} />
            )}
            <Text>Residential Appartment</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSubmit1()}
            style={
              bgColor1
                ? styles.typeOfPropertyStyleColor
                : styles.typeOfPropertyStyle
            }>
            {bgColor1 ? (
              <Ionicons style={styles.addFont} name={'checkmark'} />
            ) : (
              <Ionicons style={styles.addFont} name={'add'} />
            )}
            <Text>Independent House / Villa</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSubmit2()}
            style={
              bgColor2
                ? styles.typeOfPropertyStyleColor
                : styles.typeOfPropertyStyle
            }>
            {bgColor2 ? (
              <Ionicons style={styles.addFont} name={'checkmark'} />
            ) : (
              <Ionicons style={styles.addFont} name={'add'} />
            )}
            <Text>Plot / Land</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.noOfBedrooms}>
          <Text style={{fontSize: 20}}>No. of Bedrooms</Text>
        </View>

        <View style={styles.typesOfBedrooms}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.id}
            extraData={selectedId}
          />
        </View>
        <View style={styles.readyToMove}>
          <Text style={{fontSize: 17}}>
            Looking for "ReadytoMove" properties ?{' '}
          </Text>
          <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
            <TouchableOpacity
              onPress={() => {
                setReadyToMove('Yes')
              }}
              style={readyToMove === 'Yes' ? styles.yes : styles.no}>
              <Text>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setReadyToMove('No')
              }}
              style={readyToMove === 'No' ? styles.yes : styles.no}>
              <Text>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <ExploreButton title='Search' onPress={handleSearch}/>
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
    borderBottomWidth: responsiveWidth(0.1),
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
    borderWidth: responsiveWidth(0.1),
    borderRightWidth: 0,
    marginHorizontal: responsiveScreenWidth(5),
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
    fontSize: responsiveFontSize(1.7),
    padding: responsiveScreenWidth(1),
  },
  typesOfBedrooms: {
    paddingHorizontal: responsiveScreenWidth(3),
  },
  readyToMove: {
    paddingHorizontal: responsiveScreenWidth(5),
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
    padding: responsiveWidth(2)
  },
  button: {
    paddingHorizontal: responsiveScreenWidth(5),
  },
});
