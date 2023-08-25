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
import { dark } from '../../../assets/Styles/GlobalTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { width } from '../../utils/constants/Matrics';

const FeaturedCategories = () => {
  
  const DATA = [
    {
      id: '1',
      title: 'Sky Dandelions Apartment',
      rating: '4.9',
      image: require('../../../assets/images/p1.jpg'),
      price: '$226',
      location: 'Jakarta, Indonesia',
      buttonTitle: 'Apartment',
    },
    {
      id: '2',
      title: 'The laurels Villa',
      rating: '4.9',
      image: require('../../../assets/images/p2.jpg'),
      price: '$300',
      location: 'Bali, Indonesia',
      buttonTitle: 'Villa',
    },
    {
      id: '3',
      title: 'Sky Dandelions Apartment',
      rating: '4.9',
      image: require('../../../assets/images/p3.jpg'),
      price: '$226',
      location: 'Jakarta, Indonesia',
      buttonTitle: 'Apartment',
    },
    {
      id: '4',
      title: 'The laurels Villa',
      rating: '4.9',
      image: require('../../../assets/images/p4.jpg'),
      price: '$300',
      location: 'Bali, Indonesia',
      buttonTitle: 'Villa',
    },
    {
      id: '5',
      title: 'Sky Dandelions Apartment',
      rating: '4.9',
      image: require('../../../assets/images/p5.jpg'),
      price: '$226',
      location: 'Jakarta, Indonesia',
      buttonTitle: 'Apartment',
    },
    {
      id: '6',
      title: 'The laurels Villa',
      rating: '4.9',
      image: require('../../../assets/images/p6.jpg'),
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
       <View style={styles.featuredCard}>
          <ImageBackground  style={styles.imageContainer} source={data.image}>
            <TouchableOpacity style={[styles.heartContainer, width > 500 && styles.heartContainer1]}>
              <Ionicons name='heart' size={responsiveScreenWidth(4)} color='white'/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{data.buttonTitle}</Text>
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.details}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailesHeadertext}>{data.title}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons name='star' size={responsiveScreenWidth(2)} color='gold' />
                <Text style={{color: dark}}>{data.rating}</Text>
              </View>
              <View style={styles.map}>
               <Ionicons name='locate-outline' size={responsiveScreenWidth(2)} color='#234F68'/>
                <Text style={{fontSize: 12, color: dark}}>{data.location}</Text>
              </View>

              <View style={styles.price}>
                <Text style={{fontSize: 16, color: dark}}>
                  {data.price}
                  <Text style={{fontSize: 8}}>/month</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>
    </TouchableOpacity>
  );

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
    flex: 1
  },
  featuredCard: {
    width: responsiveScreenWidth(85),
    borderRadius: responsiveScreenHeight(2),
    flexDirection: 'row',
    backgroundColor: '#F5F4F8',
    paddingRight: responsiveScreenWidth(2),
    marginHorizontal: responsiveScreenWidth(3)
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: responsiveScreenHeight(21),
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    overflow: 'hidden'
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveScreenWidth(10),
    height: responsiveScreenWidth(10),
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#8BC83F',
  },
  heartContainer1: {
    width: responsiveScreenWidth(7.5),
  },
  
  button: {
    width: responsiveWidth(24),
    backgroundColor: '#234F68',
    borderRadius: 17,
    padding: responsiveScreenWidth(3),
    // padding: responsiveHeight(2),
  },
  details: {
    flex:1,
    paddingVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(2)
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  
  price: {},
  detailsHeader: {
    flex: 1,
    gap: responsiveHeight(2),
    // marginHorizontal: responsiveScreenWidth(2),
    // marginVertical: responsiveScreenHeight(1),
  },
  detailesHeadertext: {
    color: '#234F68',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default FeaturedCategories;
