import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  VirtualizedList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
  Alert,
  ScrollView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
// import {SearchPropertyService} from '../../services/properties';
import {useNavigation} from '@react-navigation/native';
import { dark } from '../../../assets/Styles/GlobalTheme';

interface props {
  cityData: Array<any>
};

const CategoryEstate: React.FC<props> = ({cityData}) => {
  console.log(cityData)
  const heartImage = require('../../../assets/images/Heart.png');
  const starImage = require('../../../assets/images/Star.png');
  const locationImage = require('../../../assets/images/Location.png');
  const mainImage = require('../../../assets/images/image26.png');

  const navigation = useNavigation();


  type ItemData = {
    id: string;
    title: string;
  };

  const getItem = (_data: unknown, index: number): ItemData => ({
    id: Math.random().toString(12).substring(0),
    title: `Item ${index + 1}`,
  });

  type ItemProps = {image: string};
  const getItemCount = () => 1;
  
  const Item = ({data}: any) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailedPage' as never, {data :data})}
      style={styles.itemContainer}>
      <View style={styles.featuredCard} id={data.id}>
      <Text style={styles.detailesHeadertext}>{data.title}</Text>
    
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
        <Text style={styles.description}>{data.description}</Text>
            
            <View style={styles.ratingContainer}>
              
              <Image style={styles.star} source={locationImage} />
              <Text style={styles.location}>{data.location}</Text>
            </View>
          </View>
        </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{alignItems: 'center'}} showsVerticalScrollIndicator={false} >
        {
          cityData?.map((item: any) => <Item key={item.id} data={item} />)
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemContainer: {
    marginVertical: responsiveScreenHeight(1)
  },
  featuredCard: {
    width: responsiveWidth(94),
    borderRadius: responsiveWidth(10),
    backgroundColor: '#F5F4F8',
    gap: responsiveScreenWidth(3),
  },
  imageContainer: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: responsiveScreenWidth(83),
    height: responsiveScreenHeight(20),
    marginVertical: responsiveScreenHeight(4),
    marginHorizontal: responsiveScreenWidth(6),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
  },
  heartContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8.7),
    height: responsiveHeight(4),
    borderRadius: responsiveScreenWidth(50),
    backgroundColor: '#8BC83F',
  },
  heart: {
    width: responsiveWidth(3),
    height: responsiveHeight(1.5),
  },


  details: {
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.4),
    gap: responsiveHeight(2)
  },
  description: {
    color: dark,
    fontSize: responsiveFontSize(2),
    
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: responsiveFontSize(1.6),
    fontWeight: 'bold'
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  star: {
    width: responsiveWidth(5),
    height: responsiveHeight(2.5)
  },
  location: {
    color: dark,
    fontSize: responsiveFontSize(3)
  },
 
  detailesHeadertext: {
    color: dark,
    marginTop: responsiveScreenHeight(3),
    marginLeft: responsiveScreenWidth(6),
    fontSize: responsiveFontSize(3),
  },
  map: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8BC83F',
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1)
  },
});

export default CategoryEstate;
