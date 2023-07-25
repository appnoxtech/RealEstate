import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  ScrollView,
} from 'react-native';
import React from 'react';
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

const SearchFilterPage = ({route}: any) => {
  const [residential, setResidential] = useState(true);
  const [commercial, setCommercial] = useState(false);
  const [buy, setBuy] = useState(true);
  const [rent, setRent] = useState(false);
  const [bgColor, setbgColor] = useState(false);
  const [bgColor1, setbgColor1] = useState(false);
  const [bgColor2, setbgColor2] = useState(false);
  const [sliderValue, setSliderValue] = useState(10);
  const [onPress, setOnPress] = useState(true);
  const [selectedId, setSelectedId] = useState('');
  const [bedrooms, setBedrooms] = useState(false);
  const {cityName} = useSelector((store: any) => store.filter);
  const [yes, setYes] = useState(false);
  const [no, setNo] = useState(false);

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

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1RK / 1BHK',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: '2BHK',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: '3BHK',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d71',
      title: '4BHK',
    },
  ];

  const Item = ({item}: any) => {
    return (
      <TouchableOpacity onPress={() => {setSelectedId(item.id), setBedrooms(true)}}>
        <View style={selectedId === item.id && bedrooms ? styles.afterClickOnItem : styles.item}>
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
        <View style={{marginHorizontal: responsiveScreenWidth(2.5)}}>
          <HeaderWithBackBtn />
        </View>
        <View style={styles.main}>
          <View style={styles.propertyTYpe}>
            <TouchableOpacity
              onPress={() => {
                setResidential(true), setCommercial(false);
              }}
              style={residential ? styles.typeColor : styles.residential}>
              <Text>Residential</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setCommercial(true), setResidential(false);
              }}
              style={commercial ? styles.typeColor : styles.residential}>
              <Text>Commercial</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.pb10}>Looking to </Text>
          <View style={styles.lookingTo}>
            <TouchableOpacity
              onPress={() => {
                setBuy(true), setRent(false);
              }}
              style={buy ? styles.pressedbuyrent : styles.buyrent}>
              <Text>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setBuy(false), setRent(true);
              }}
              style={rent ? styles.pressedbuyrent : styles.buyrent}>
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
            maximumValue={1000}
            minimumValue={5}
            minimumTrackTintColor="#8BC83F"
            maximumTrackTintColor="gray"
            step={50}
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
                setYes(true);
                setNo(false);
              }}
              style={yes ? styles.yes : styles.no}>
              <Text>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setYes(false);
                setNo(true);
              }}
              style={no ? styles.yes : styles.no}>
              <Text>No</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.button}>
          <ExploreButton title={'Search'} />
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
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    paddingHorizontal: responsiveScreenWidth(5),
    gap: 5,
  },
  typeOfPropertyStyleColor: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: responsiveWidth(0.3),
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
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
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    padding: 8,
  },
  no: {
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    padding: 8,
  },
  button: {
    paddingHorizontal: responsiveScreenWidth(5),
  },
});
