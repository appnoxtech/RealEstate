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
import HeaderWithBackBtn from '../../../component/common/buttons/HeaderWithBackBtn';

const DATA = [
  {
    id: '1',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/Jakarta.png'),
    price: '$ 226',
    location: 'Jakarta',
    buttonTitle: 'Apartment',
  },
  {
    id: '2',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/Bali.png'),
    price: '$ 300',
    location: 'Bali',
    buttonTitle: 'Villa',
  },
  {
    id: '3',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/Jakarta.png'),
    price: '$ 226',
    location: 'Jakarta',
    buttonTitle: 'Apartment',
  },
  {
    id: '4',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/Bali.png'),
    price: '$ 300',
    location: 'Bali',
    buttonTitle: 'Villa',
  },
  {
    id: '5',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/Jakarta.png'),
    price: '$ 226',
    location: 'Jakarta',
    buttonTitle: 'Apartment',
  },
  {
    id: '6',
    title: 'Sky Dandelions Apartment',
    rating: '4.9',
    image: require('../../../../assets/images/Bali.png'),
    price: '$ 300',
    location: 'Bali',
    buttonTitle: 'Villa',
  },
];

// type ItemProps = {image: string};

const Item = ({data}: any) => (
  <TouchableOpacity>
    <View style={styles.featuredCard}>
      <ImageBackground style={styles.imageContainer} source={data.image}>
        <TouchableOpacity style={styles.noContainer}>
          <Text style={{color: 'white',}}>#{data.id}</Text>
        </TouchableOpacity>
      </ImageBackground>
      <Text style={{fontSize: 10, fontWeight: 'bold', paddingLeft: 10}}>{data.location}</Text>
    </View>
  </TouchableOpacity>
);

const TopLocationPage = () => {
  return (
    <SafeAreaView >
     <View style={styles.container}>
     <HeaderWithBackBtn />
     <Text style={{marginTop: 40, fontSize: 25, fontWeight: 'bold', color: '#252B5C', paddingLeft: 10, paddingBottom: 10}}>
        Top Location
     </Text>
     <Text style={{marginBottom: 40, fontSize: 12, fontWeight: 'bold', color: '#252B5C', paddingLeft: 10,}}>
     Find the best recommendations place to live
     </Text>
     
      <FlatList
        horizontal={false}
        numColumns={2}
        showsHorizontalScrollIndicator={false}
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
        backgroundColor: 'white',
        paddingHorizontal: responsiveScreenWidth(2)
    },
  featuredCard: {
    width: responsiveWidth(44),
    borderRadius: 40,
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(2),
    margin: responsiveScreenWidth(2),
    gap: responsiveScreenWidth(5),
  },
  imageContainer: {
    width: responsiveWidth(40),
    height: responsiveHeight(22.5),
    gap: responsiveHeight(9.5),
    paddingRight: responsiveScreenWidth(1.5),
    paddingTop: responsiveScreenHeight(1),
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
