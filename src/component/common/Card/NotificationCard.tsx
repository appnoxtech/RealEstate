import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { responsiveWidth } from 'react-native-responsive-dimensions';

interface props {
  title: string;
  description: string;
  postingTime: string;
}

const NotificationCard: FC<props> = ({title, description, postingTime}) => {
  return (
    <TouchableOpacity style={[styles.container, styles.shadowProp]} >
      <Ionicons name="notifications" color={'#8BC83F'} size={responsiveWidth(9) } />
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.postTime}>{postingTime}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default NotificationCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveWidth(5),
    margin: responsiveWidth(2),
    gap: responsiveWidth(3),
    backgroundColor: '#fff',
    borderRadius: responsiveWidth(3)
  },
 
  shadowProp: {
    shadowOffset: {width: -2, height: 4},
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
