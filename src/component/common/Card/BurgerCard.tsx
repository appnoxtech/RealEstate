import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

interface props {
  title: string;
  description: string;
  iconName: string;
  pageName: string;
  setVisible(state: boolean): any
}

const BurgerCard: FC<props> = ({title, description, iconName, pageName, setVisible}) => {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate(pageName as never);
      setVisible(false);
    }} style={[styles.container, styles.shadowProp]} >
      <Ionicons name={iconName} color={'#8BC83F'} size={responsiveWidth(9) } />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
       
      </View>
    </TouchableOpacity>
  );
};

export default BurgerCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(5),
    margin: responsiveWidth(2),
    gap: responsiveWidth(3),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(3)
  },
 
  shadowProp: {
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 0.2,
  },
  title: {
    fontSize: responsiveWidth(4),
    fontWeight: 'bold',
  },
  description: {
    
  },
  postTime: {
    alignSelf: 'flex-end'
  }
});
