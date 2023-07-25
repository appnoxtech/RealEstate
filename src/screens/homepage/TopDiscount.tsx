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
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const TopDiscount = () => {
  const Navigation = useNavigation();
  const DATA = [
    {
      id: '1',
      title: 'Halloween Sale!',
      rating: '4.9',
      image: require('../../../assets/images/image25.png'),
      secondTitle: 'All discount up to 60%',
      price: '$226',
      location: 'Jakarta, Indonesia',
      buttonTitle: 'Apartment',
    },
    {
      id: '2',
      title: 'The laurels Villa',
      rating: '4.9',
      image: require('../../../assets/images/image25.png'),
      secondTitle: 'All discount up to 60%',
      price: '$300',
      location: 'Bali, Indonesia',
      buttonTitle: 'Villa',
    },
    {
      id: '3',
      title: 'Halloween Sale!',
      rating: '4.9',
      image: require('../../../assets/images/image25.png'),
      secondTitle: 'All discount up to 60%',
      price: '$226',
      location: 'Jakarta, Indonesia',
      buttonTitle: 'Apartment',
    },
    {
      id: '4',
      title: 'The laurels Villa',
      rating: '4.9',
      image: require('../../../assets/images/image25.png'),
      secondTitle: 'All discount up to 60%',
      price: '$300',
      location: 'Bali, Indonesia',
      buttonTitle: 'Villa',
    },
    {
      id: '5',
      title: 'Halloween Sale!',
      rating: '4.9',
      image: require('../../../assets/images/image25.png'),
      secondTitle: 'All discount up to 60%',
      price: '$226',
      location: 'Jakarta, Indonesia',
      buttonTitle: 'Apartment',
    },
    {
      id: '6',
      title: 'The laurels Villa',
      rating: '4.9',
      image: require('../../../assets/images/image25.png'),
      secondTitle: 'All discount up to 60%',
      price: '$300',
      location: 'Bali, Indonesia',
      buttonTitle: 'Villa',
    },
  ];

  // type ItemProps = {image: string};

  const Item = ({data}: any) => (
    <TouchableOpacity onPress={() => Navigation.navigate('Villa' as never)}>
      <View style={styles.featuredCard}>
        <ImageBackground style={styles.imageContainer} source={data.image}>
          <Text style={styles.buttonText}>{data.buttonTitle}</Text>
          <Text style={styles.secondTitle}>{data.secondTitle}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        scrollEnabled={true}
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
  container: {},
  featuredContainer: {
    borderRadius: responsiveWidth(5),
  },
  featuredCard: {
    flexDirection: 'row',

    padding: responsiveScreenWidth(3),
  },

  imageContainer: {
    width: responsiveWidth(75),
    height: responsiveHeight(23),
    padding: responsiveScreenWidth(2),
    resizeMode: 'cover',
  },

  buttonText: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    fontWeight: 'bold',
    color: 'white',
    fontSize: responsiveFontSize(4.6),
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(2),
  },
  secondTitle: {
    textShadowColor: 'rgba(0, 0, 0, 1)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 3,
    fontWeight: 'bold',
    color: 'white',
    fontSize: responsiveFontSize(2.6),
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(2),
  },
});

export default TopDiscount;
