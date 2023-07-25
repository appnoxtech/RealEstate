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
    location: 'Jakarta',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    location: 'Bali',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    location: 'Jakarta',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    location: 'Bali',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    location: 'Jakarta',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    location: 'Bali',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    location: 'Jakarta',
    image: require('../../../../assets/images/Agent.png'),
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    location: 'Bali',
    image: require('../../../../assets/images/Agent.png'),
  },
];

type ItemProps = {title: string};

const Item = ({data}: any) => (
  <View style={styles.item}>
    <TouchableOpacity>
      <Image style={styles.image1} source={data.image} />
    </TouchableOpacity>
    <Text style={styles.title}>{data.location}</Text>
  </View>
);

const TopCitiesPage = () => {
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
    alignItems: 'center',
    paddingHorizontal: responsiveScreenWidth(2),
  },
  image1: {
    width: responsiveWidth(25),
    height: responsiveHeight(11.5),
    marginVertical: responsiveScreenHeight(1),
  },
  title: {
    fontSize: responsiveFontSize(1.8),
  },
});

export default TopCitiesPage;
