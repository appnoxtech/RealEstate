import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {dark} from '../../../../assets/Styles/GlobalTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const DATA = [
  {
    id: '1',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '2',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
  {
    id: '3',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '4',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
  {
    id: '5',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '6',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
];

// type ItemProps = {image: string};

const Item = ({data}: any) => (
  <TouchableOpacity style={{ marginRight: responsiveScreenWidth(3)}}>
    <View style={styles.container}>
      <View style={styles.featuredCard}>
        <ImageBackground imageStyle={{borderTopLeftRadius: responsiveWidth(5), borderTopRightRadius: responsiveWidth(5)}} style={styles.imageContainer} source={data.image}>
          <TouchableOpacity style={styles.heartContainer}>
            <Ionicons
              name="heart-outline"
              size={responsiveScreenWidth(4)}
              color="red"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {data.price}
              <Text style={{fontSize: responsiveFontSize(1.5)}}>/Month</Text>
            </Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.details}>
          <View style={styles.detailsHeader}>
            <Text style={styles.detailesHeadertext}>{data.title}</Text>
            <View style={styles.ratingContainer}>
              <Ionicons
                name="star"
                color="gold"
                size={responsiveScreenWidth(4)}
              />
              <Text style={{fontSize: 10, color: dark}}>{data.rating}</Text>
              <MaterialCommunityIcons
                name="map-marker"
                size={responsiveScreenWidth(3)}
                color="#234F68"
              />
              <Text style={{fontSize: 10, color: dark}}>{data.location}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const CategoryEstate = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
        key={'_'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  featuredCard: {
    width: responsiveWidth(60),
    borderRadius: responsiveWidth(5),
    backgroundColor: '#F5F4F8',
    paddingBottom: responsiveScreenHeight(2),
    gap: responsiveScreenWidth(3),
  },
  imageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '100%',
    height: responsiveHeight(20),
    paddingVertical: responsiveScreenHeight(1),
    overflow: 'hidden',
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    borderRadius: responsiveWidth(5),
    backgroundColor: 'white',
    marginRight: responsiveScreenWidth(3)
  },
  heart: {
    width: responsiveWidth(3),
    height: responsiveHeight(1.3),
  },
  button: {
    width: responsiveWidth(22),
    padding: responsiveScreenWidth(2),
    backgroundColor: '#234F68',
    borderRadius: 8,
    marginRight: responsiveScreenWidth(3)
    // padding: responsiveHeight(2),
  },
  details: {
    padding: responsiveScreenWidth(2),
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  star: {
    width: 9,
    height: 9,
  },
  price: {},
  detailsHeader: {
    width: responsiveScreenWidth(30),
    gap: responsiveHeight(1),
    // marginHorizontal: responsiveScreenWidth(2),
    // marginVertical: responsiveScreenHeight(1),
  },
  detailesHeadertext: {
    color: dark,
    fontSize: 12,
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CategoryEstate;
