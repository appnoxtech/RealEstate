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
  ScrollView,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

import {useNavigation} from '@react-navigation/native';
import BackWithSetting from '../../../component/common/buttons/BackWithSetting';
import { dark } from '../../../../assets/Styles/GlobalTheme';

const DATA = [
  {
    id: '1',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p1.jpg'),
    price: '$ 226',
    location: 'Delhi',
    buttonTitle: 'Apartment',
  },
  {
    id: '2',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p2.jpg'),
    price: '$ 300',
    location: 'Greater Noida',
    buttonTitle: 'Villa',
  },
  {
    id: '3',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p3.jpg'),
    price: '$ 226',
    location: 'City xyz',
    buttonTitle: 'Apartment',
  },
  {
    id: '4',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p4.jpg'),
    price: '$ 300',
    location: 'Bali',
    buttonTitle: 'Villa',
  },
  {
    id: '5',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p5.jpg'),
    price: '$ 226',
    location: 'Jakarta',
    buttonTitle: 'Apartment',
  },
  {
    id: '6',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/p6.jpg'),
    price: '$ 300',
    location: 'Bali',
    buttonTitle: 'Villa',
  },
];

// type ItemProps = {image: string};
const TopLocationPage = () => {
  const Navigation = useNavigation();

  const Item: React.FC<any> = ({data}) => (
    <TouchableOpacity
      style={styles.featuredCard}
      onPress={() => Navigation.navigate('LocationDetails' as never, {data : data.location})}>
      <ImageBackground style={styles.imageContainer} source={data.image}>
        <TouchableOpacity style={styles.noContainer}>
          <Text style={{color: 'white'}}>#{data.id}</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={{fontSize: responsiveFontSize(2), fontWeight: '400', paddingLeft: 10 ,color: dark}}>
        {data.location}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <BackWithSetting />
        <Text
          style={{
            marginTop: 10,
            fontSize: 25,
            fontWeight: 'bold',
            color: dark,
            paddingLeft: 10,
            paddingBottom: 10,
          }}>
          Top Location
        </Text>
        <Text
          style={{
            marginBottom: 10,
            fontSize: 12,
            fontWeight: 'bold',
            color: dark,
            paddingLeft: 10,
          }}>
          Find the best recommendations place to live
        </Text>

        <FlatList
          horizontal={false}
          numColumns={2}
          scrollEnabled
          showsVerticalScrollIndicator={false}
          data={DATA}
          renderItem={({item}) => <Item data={item} />}
          keyExtractor={item => item.id}
          key={'_'}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(2),
  },
  featuredCard: {
    width: responsiveWidth(44),
    borderRadius: responsiveWidth(10),
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(2),
    margin: responsiveScreenWidth(2),
    gap: responsiveScreenWidth(5),
  },
  imageContainer: {
    width: responsiveWidth(40),
    height: responsiveHeight(22.5),
    borderRadius: responsiveWidth(5),
    gap: responsiveHeight(9.5),
    paddingRight: responsiveScreenWidth(1.5),
    paddingTop: responsiveScreenHeight(1),
    overflow: 'hidden'
  },
  noContainer: {
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
});

export default TopLocationPage;
