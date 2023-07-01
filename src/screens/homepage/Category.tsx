import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,TouchableOpacity
} from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'All',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'House',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Apartment',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d71',
    title: 'Villa',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bb',
    title: 'All',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f6c',
    title: 'House',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7d',
    title: 'Apartment',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7e',
    title: 'Villa',
  },
];

type ItemProps = {title: string};

const Item = ({title} : ItemProps) => (
  <TouchableOpacity>
    <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
  </TouchableOpacity>
);



const Category = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    borderRadius: 30,
    marginHorizontal: 5,
    
  },
  title: {
    fontSize: responsiveFontSize(1.7),
    padding: responsiveScreenWidth(2)
  },
});

export default Category;
