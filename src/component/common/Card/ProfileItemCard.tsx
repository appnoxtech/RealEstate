import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {ReactNode} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

interface props {
  children: ReactNode;
  onPressHandler?(): any;
}

const ProfileItemCard: React.FC<props> = ({children, onPressHandler = () => {}}) => {
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.container}>
      {children}
    </TouchableOpacity>
  );
};

export default ProfileItemCard;

const styles = StyleSheet.create({
  container: {
    minHeight: responsiveScreenHeight(3),
    borderRadius: responsiveScreenHeight(1.5),
    backgroundColor: 'rgba(0,0,0,0.03)',
    paddingVertical: responsiveScreenHeight(2),
    paddingHorizontal: responsiveScreenWidth(4),
    marginVertical: responsiveScreenHeight(1.5),
  },
});
