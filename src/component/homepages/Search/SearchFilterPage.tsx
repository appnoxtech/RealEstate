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

// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SearchFilterPage = () => {
  const [purposeOfBuying, setPurposeOfBuying] = useState('Residential');
  const [title, setTitle] = useState('Buy');
  const [cityName, setCityName] = useState('Noida');
  const [sliderValue, setSliderValue] = useState(10);
  const [onPress, setOnPress] = useState(false);
  const [selectedId, setSelectedId] = useState();

  if (purposeOfBuying === 'Residential') {
    styles.residential.borderBottomWidth = responsiveWidth(0.3);
    styles.residential.borderColor = '#8BC83F';
    styles.commercial.borderBottomWidth = 0;
  } else {
    styles.commercial.borderBottomWidth = responsiveWidth(0.3);
    styles.commercial.borderColor = '#8BC83F';
    styles.residential.borderBottomWidth = 0;
  }

  if (title === 'Buy') {
    styles.buy.borderColor = '#8BC83F';
    styles.rent.borderColor = 'white';
  } else {
    styles.rent.borderColor = '#8BC83F';
    styles.buy.borderColor = 'white';
  }

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

  type ItemProps = {
    title: string;
  };

  const Item = ({title}: ItemProps) => {
    const handleOptionPress = () => {};
    return (
      <TouchableOpacity onPress={() => setSelectedId(item.id)}>
        <View style={styles.item}>
          <Ionicons style={styles.addFont} name={(iconName = 'add')} />
          <Text style={styles.title}>{title}</Text>
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
            onPress={() => setPurposeOfBuying('Residential')}
            style={styles.residential}>
            <Text>Residential</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setPurposeOfBuying('Commercial')}
            style={styles.commercial}>
            <Text>Commercial</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.pb10}>Looking to </Text>
        <View style={styles.lookingTo}>
          <TouchableOpacity onPress={() => setTitle('Buy')} style={styles.buy}>
            <Text>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setTitle('Rent/Lease')}
            style={styles.rent}>
            <Text>Rent/Lease</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.addCityNameContainer}>
        <TouchableOpacity style={styles.addCityName}>
          <Text>Add</Text>
          <Ionicons style={styles.addFont} name={(iconName = 'add')} />
        </TouchableOpacity>
        {onPress ? null : (
          <View style={styles.showCityName}>
            <Text>{cityName}</Text>
            <TouchableOpacity onPress={() => setOnPress(true)}>
              <Ionicons style={styles.removeFont} name={(iconName = 'close')} />
            </TouchableOpacity>
          </View>
        )}
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
        <TouchableOpacity style={styles.residentialAppartment}>
          <Ionicons style={styles.addFont} name={(iconName = 'add')} />
          <Text>Residential Appartment</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.independentHouse}>
          <Ionicons style={styles.addFont} name={(iconName = 'add')} />
          <Text>Independent House / Villa</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.plotLand}>
          <Ionicons style={styles.addFont} name={(iconName = 'add')} />
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
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </View>
      <View style={styles.readyToMove}>
        <Text style={{fontSize: 17}}>
          Looking for "ReadytoMove" properties ?{' '}
        </Text>
        <View style={{flexDirection: 'row', gap: responsiveWidth(5)}}>
          <TouchableOpacity style={styles.yes}>
            <Text>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.no}>
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
    borderBottomColor: '#8BC83F',
  },
  commercial: {
    borderBottomWidth: 0,
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
  buy: {
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'white',
    padding: 8,
  },
  rent: {
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'white',
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
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: '#8BC83F',
    paddingHorizontal: responsiveScreenWidth(5),
    gap: 5,
  },
  showCityName: {
    borderWidth: 1,
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
  residentialAppartment: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    paddingHorizontal: responsiveScreenWidth(5),
    gap: 5,
  },
  independentHouse: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    paddingHorizontal: responsiveScreenWidth(5),
    gap: 5,
  },
  plotLand: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
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
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    padding: 8,
  },
  no : {
    borderWidth: 1,
    borderRadius: responsiveWidth(18),
    borderColor: 'gray',
    padding: 8,
  },
  button: {
    paddingHorizontal: responsiveScreenWidth(5)
  },
});
