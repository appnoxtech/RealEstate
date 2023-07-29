import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

interface props {
  title: string;
  iconName: string;
  pageName: string;
  setVisible(state: boolean):any
}

const MenuCard: FC<props> = ({title, iconName, pageName, setVisible}) => {
    const navigation = useNavigation();
    
  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate(pageName as never)
      setVisible(false)
      }} style={styles.container} >
      <Ionicons name={iconName} color={'gray'} size={responsiveWidth(5) } />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

export default MenuCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: responsiveWidth(3),
    margin: responsiveWidth(2),
    gap: responsiveWidth(3),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(3),
    borderWidth: responsiveWidth(0.2)
  },
 
  title: {
    fontSize: responsiveWidth(4),
  },
  description: {
    
  },
  
});
