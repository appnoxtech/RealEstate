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

const FeaturedButton = require('../../component/common/buttons/FeaturedButton')
const heartImage = require('../../../../assets/images/RedHeart.png')
const starImage = require('../../../../assets/images/Star.png')
const locationImage = require('../../../../assets/images/Location.png')



const DATA = [

  {
    id: '1',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/image26.png'),
    price: '$ 226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '2',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/image26.png'),
    price: '$ 300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
  {
    id: '3',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/image26.png'),
    price: '$ 226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '4',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/image26.png'),
    price: '$ 300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
  {
    id: '5',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/image26.png'),
    price: '$ 226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '6',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/image26.png'),
    price: '$ 300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
];

// type ItemProps = {image: string};

const Item = ({data} : any) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.featuredCard}>
        <ImageBackground style={styles.imageContainer} source={data.image}>
          <TouchableOpacity style={styles.heartContainer}>
          <Image style={styles.heart} source={heartImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              {data.price}
              <Text style={{fontSize: 8}}>/Month</Text>
            </Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.details}>
          <View style={styles.detailsHeader}>
            <Text style={styles.detailesHeadertext}>{data.title}</Text>
            <View style={styles.ratingContainer}>
              <Image
                style={styles.star}
                source={starImage}
              />
              <Text style={{fontSize: 10}}>{data.rating}</Text>
              <Image
                style={styles.star}
                source={locationImage}
              />
              <Text style={{fontSize: 10}}>{data.location}</Text>
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
        horizontal={false}
        numColumns={2}
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
    padding: responsiveScreenWidth(1),
  },

  featuredCard: {
    width: responsiveWidth(44),
    borderRadius: 40,
    backgroundColor: '#F5F4F8',
    padding: responsiveScreenWidth(1.5),
    gap: responsiveScreenWidth(3),
  },
  imageContainer: {
    alignItems: 'flex-end',
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    gap: responsiveHeight(9.5),
    paddingRight: responsiveScreenWidth(1.5),
    paddingTop: responsiveScreenHeight(1)
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8),
    height: responsiveHeight(4),
    borderRadius: 50,
    backgroundColor: 'white',
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
    fontSize: 12,
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CategoryEstate;
