import React, { useEffect, useState } from 'react';
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
  Alert,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import FeaturedButton from '../../component/common/buttons/FeaturedButton';
import { SearchPropertyService } from '../../services/properties';
const heartImage = require('../../../assets/images/Heart.png')
const starImage = require('../../../assets/images/Star.png')
const locationImage = require('../../../assets/images/Location.png');
const mainImage =  require('../../../assets/images/image26.png');




type ItemProps = {image: string};

const Item = ({data} : any) => (
  <TouchableOpacity>
    <TouchableOpacity style={styles.container}>
      <View style={styles.featuredCard}>
        <ImageBackground style={styles.imageContainer} source={mainImage}>
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
    </TouchableOpacity>
  </TouchableOpacity>
);

const CategoryEstate:React.FC<any> = ({cityName}) => {
  const [cityData, setCityData] = useState([]);
  const GetPropertyData = async() => {
     try {
      const res = await SearchPropertyService(cityName);
      const {result} = res.data;
      if(result.rows){
        setCityData(result.rows);
      }else {
        setCityData([]);
      }
     } catch (error) {
       Alert.alert('', 'Error')
     }
  };

  useEffect(() => {
    GetPropertyData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{flex: 1}}
        horizontal={false}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        data={cityData}
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
    backgroundColor: '#8BC83F',
  },
  heart: {
    width: responsiveWidth(3),
    height: responsiveHeight(1.5),
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
