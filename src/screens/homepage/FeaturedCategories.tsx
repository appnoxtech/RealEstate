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
import FeaturedButton from '../../component/common/buttons/FeaturedButton';

import locationImage from '../../../assets/images/Location.png';
const locationImageUri = Image.resolveAssetSource(locationImage).uri


const imageConstant = {
  heartImage: require('../../../assets/images/Heart.png'),
};

const DATA = [
  {
    id: '1',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../assets/images/image26.png'),
    price: '$226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '2',
    title: 'The laurels Villa',
    rating: '4.9',
    image: require('../../../assets/images/image27.png'),
    price: '$300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
  {
    id: '3',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../assets/images/image26.png'),
    price: '$226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '4',
    title: 'The laurels Villa',
    rating: '4.9',
    image: require('../../../assets/images/image27.png'),
    price: '$300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
  {
    id: '5',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../assets/images/image26.png'),
    price: '$226',
    location: 'Jakarta, Indonesia',
    buttonTitle: 'Apartment',
  },
  {
    id: '6',
    title: 'The laurels Villa',
    rating: '4.9',
    image: require('../../../assets/images/image27.png'),
    price: '$300',
    location: 'Bali, Indonesia',
    buttonTitle: 'Villa',
  },
];

interface renderProp {
  data: {
    id: string;
    title: string;
    rating: any;
    image: any;
    price: any;
    location: string;
    buttonTitle: string;
  };
}

// type ItemProps = {image: string};

const Item: React.FC<renderProp> = ({data}) => (
  <TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.featuredCard}>
        <ImageBackground style={styles.imageContainer} source={data.image}>
          <TouchableOpacity style={styles.heartContainer}>
            <Image style={styles.heart} source={imageConstant.heartImage} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{data.buttonTitle}</Text>
          </TouchableOpacity>
        </ImageBackground>

        <View style={styles.details}>
          <View style={styles.detailsHeader}>
            <Text style={styles.detailesHeadertext}>{data.title}</Text>
            <View style={styles.ratingContainer}>
              <Image style={styles.star} source={require('../../../assets/images/Star.png')} />
              <Text>{data.rating}</Text>
            </View>
            <View style={styles.map}>
              <Image
                style={styles.star}
                source={{uri: locationImageUri}}
              />
              <Text style={{fontSize: 12}}>{data.location}</Text>
            </View>

            <View style={styles.price}>
              <Text style={{fontSize: 16}}>
                {data.price}
                <Text style={{fontSize: 8}}>/month</Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);

const FeaturedCategories = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: responsiveScreenWidth(2),
  },

  featuredCard: {
    width: responsiveWidth(80),
    borderRadius: 40,
    flexDirection: 'row',
    backgroundColor: '#F5F4F8',
    padding: responsiveScreenWidth(3),
    gap: responsiveScreenWidth(3),
  },
  imageContainer: {
    width: responsiveWidth(40),
    height: responsiveHeight(20),
    padding: responsiveScreenWidth(2),
    gap: responsiveHeight(7),
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(12.5),
    height: responsiveHeight(6),
    borderRadius: 50,
    backgroundColor: '#8BC83F',
  },
  heart: {
    width: responsiveWidth(6),
    height: responsiveHeight(3),
  },
  button: {
    width: responsiveWidth(24),
    backgroundColor: '#234F68',
    borderRadius: 17,
    padding: responsiveScreenWidth(5),
    // padding: responsiveHeight(2),
  },
  details: {},

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 8,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  star: {
    width: 9,
    height: 9,
  },
  price: {},
  detailsHeader: {
    width: responsiveScreenWidth(30),
    gap: responsiveHeight(2),
    // marginHorizontal: responsiveScreenWidth(2),
    // marginVertical: responsiveScreenHeight(1),
  },
  detailesHeadertext: {
    fontSize: 17,
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FeaturedCategories;
