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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    location: 'Bali',
    image: require('../../../../assets/images/Shape1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    location: 'Jakarta',
    image: require('../../../../assets/images/Shape2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    location: 'Yogyakarta',
    image: require('../../../../assets/images/Shape1.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    location: 'Bali',
    image: require('../../../../assets/images/Shape2.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    location: 'Jakarta',
    image: require('../../../../assets/images/Shape1.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    location: 'Yogyakarta',
    image: require('../../../../assets/images/Shape2.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    location: 'Bali',
    image: require('../../../../assets/images/Shape1.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    location: 'Jakarta',
    image: require('../../../../assets/images/Shape2.png'),
  },
];

type ItemProps = {
  id: string;
  location: string;
  image: string;
};

const Item = ({data}: any) => (
  <TouchableOpacity>
    <View style={styles.item}>
      <Image style={styles.image1} source={data.image} />
      <Text style={styles.title}>{data.location}</Text>
    </View>
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
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    paddingRight: responsiveScreenWidth(2),
    borderWidth: 0,
    borderRadius: 50,
    marginHorizontal: 5,
  },
  image1: {
    marginTop: responsiveScreenHeight(1.3),
    width: responsiveWidth(16),
    height: responsiveHeight(6),
  },
  title: {
    fontSize: responsiveFontSize(1.7),
  },
});

export default TopLocation;
