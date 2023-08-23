import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    location: 'Bali',
    image: require('../../../../assets/images/p1.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    location: 'Jakarta',
    image: require('../../../../assets/images/p2.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    location: 'Yogyakarta',
    image: require('../../../../assets/images/p3.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    location: 'Bali',
    image: require('../../../../assets/images/p4.jpg'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    location: 'Jakarta',
    image: require('../../../../assets/images/p5.jpg'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    location: 'Yogyakarta',
    image: require('../../../../assets/images/p6.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    location: 'Bali',
    image: require('../../../../assets/images/p1.jpg'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    location: 'Jakarta',
    image: require('../../../../assets/images/p1.jpg'),
  },
];

type ItemProps = {
  id: string;
  location: string;
  image: string;
};

const Item = ({data}: any) => (
  <TouchableOpacity style={styles.item}>
    <Image style={styles.image1} source={data.image} />
    <Text style={styles.title}>{data.location}</Text>
  </TouchableOpacity>
);

const TopLocation = () => {
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
    flex: 1,
    backgroundColor: 'white',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#F5F4F8',
    borderRadius: responsiveWidth(10),
    paddingHorizontal: responsiveScreenWidth(2),
    paddingRight: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(0.5),
    gap: responsiveScreenWidth(3),
    marginRight: responsiveScreenWidth(2),
  },
  image1: {
    alignSelf: 'flex-start',
    borderRadius: responsiveWidth(6),
    width: responsiveWidth(12),
    height: responsiveHeight(6),
  },
  title: {
    color: dark,
    fontSize: responsiveFontSize(1.5),
  },
});

export default TopLocation;
