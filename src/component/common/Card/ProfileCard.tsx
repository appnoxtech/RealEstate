import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {FC} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {dark} from '../../../../assets/Styles/GlobalTheme';

interface props {
  title: string;
  iconName1: string;
  iconName2: string;
  onPress(): void;
}
const ProfileCard: FC<props> = ({title, iconName1, iconName2, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.communication}>
      <Ionicons name={iconName1} size={responsiveWidth(5)} color={title === 'Logout' ? 'red' : dark} />
      <Text style={[styles.communText, {color: title === 'Logout' ? 'red' : dark}]}>{title}</Text>

      <Ionicons
        style={{alignSelf: 'flex-end'}}
        name={iconName2}
        size={responsiveWidth(5)}
        color={title === 'Logout' ? 'red' : '#234F68'}
      />
    </TouchableOpacity>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  communication: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(1.7),
    marginVertical: responsiveScreenHeight(0.1),
    borderWidth: responsiveWidth(0),
  },
  communText: {
    flex: 1,
    color: dark,
    fontSize: responsiveFontSize(2),
    paddingLeft: responsiveScreenWidth(4)
  },
});
