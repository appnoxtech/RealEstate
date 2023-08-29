import {
  FlatList,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import HeaderWithBackBtn from '../../common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {dark, regularFont} from '../../../../assets/Styles/GlobalTheme';
import {width} from '../../../utils/constants/Matrics';
import ReviewCard from '../../common/Card/ReviewCard';

// interface renderProp {
//     data: {
//       id: string;
//       title: string;
//       rating: any;
//       image: any;
//       price: any;
//       location: string;
//       buttonTitle: string;
//     };
//   }

//   const Item: React.FC<renderProp> = ({data}) => {
//     console.log(data, 'log--->');

//     return (

//       )
// };

const Reviews = ({route}: any) => {
  const {data} = route.params;
  console.log('---------000->', data.title);

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.header}>
        <HeaderWithBackBtn style={{marginRight: responsiveScreenWidth(10)}} />
        <Text style={{color: '#252B5C', fontSize: responsiveFontSize(2), fontWeight: 'bold',}}>Reviews</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} >
        <TouchableOpacity style={styles.featuredCard}>
          <ImageBackground
            style={styles.imageContainer}
            source={{uri: data?.images[0]}}>
            <TouchableOpacity
              style={[
                styles.heartContainer,
                width > 500 && styles.heartContainer1,
              ]}>
              <Ionicons
                name="heart"
                size={responsiveScreenWidth(4)}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>{data.propertyType}</Text>
            </TouchableOpacity>
          </ImageBackground>

          <View style={styles.details}>
            <View style={styles.detailsHeader}>
              <Text style={styles.detailesHeadertext}>{data.title}</Text>
              <View style={styles.ratingContainer}>
                <Ionicons
                  name="star"
                  size={responsiveScreenWidth(2)}
                  color="gold"
                />
                <Text style={{color: dark}}>4.9</Text>
              </View>
              <View style={styles.map}>
                <MaterialCommunityIcons
                  name="map-marker"
                  size={responsiveScreenWidth(3)}
                  color="#234F68"
                />
                <Text style={{fontSize: 12, color: dark}}>
                  {' '}
                  {data.city}, {data.state}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.reviewCotainer}>
          <Text style={{fontFamily: regularFont, color: '#252B5C',fontSize: 18}}>User Reviews</Text>
          <ReviewCard
            imgUrl={data?.images[0]}
            name="Sam Harris"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
          <ReviewCard
            imgUrl={data?.images[1]}
            name="Elon Musk"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "
          />
        </View>
      </ScrollView>
      {/* <View>
        <FlatList
        style={{flex: 1}}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={[data]}
        renderItem={({item}) => <Item data={item} />}
        keyExtractor={item => item.id}
      />
        </View> */}
    </SafeAreaView>
  );
};

export default Reviews;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(1)
  },
  featuredCard: {
    width: responsiveScreenWidth(95),
    borderRadius: responsiveScreenHeight(2),
    flexDirection: 'row',
    backgroundColor: '#F5F4F8',
    marginHorizontal: responsiveScreenWidth(3),
    marginVertical: responsiveScreenHeight(1.5)
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    height: responsiveScreenHeight(16),
    borderRadius: responsiveWidth(4),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingVertical: responsiveScreenHeight(1),
    overflow: 'hidden',
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
    paddingHorizontal: responsiveScreenWidth(3),
    paddingVertical: responsiveScreenHeight(1)
  },
  details: {
    flex: 1,
    paddingVertical: responsiveScreenHeight(1),
    paddingHorizontal: responsiveScreenWidth(2),
  },

  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 13,
    fontWeight: 'bold',
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
  reviewCotainer: {
    marginHorizontal: responsiveScreenWidth(3),
    gap: responsiveScreenHeight(2),
  },
});
