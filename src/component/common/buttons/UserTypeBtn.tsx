import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React, {FC, useState} from 'react';
import {responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth} from 'react-native-responsive-dimensions';
import Lottie from 'lottie-react-native';

interface props {
  btnPressHandler(label: string): any;
  label: string;
  style: StyleProp<ViewStyle>;
  imageUrl: any;
  id: string
}

const UserTypeBtn: FC<props> = ({btnPressHandler, label, style, imageUrl, id}) => {
  const [isActive, setIsActive] = useState();

  return (
    <TouchableOpacity onPress={() =>{ btnPressHandler(id); setIsActive}} style={style}>
      <View style={styles.animContainer}>
        <Lottie resizeMode='contain' style={styles.image} source={imageUrl} autoPlay loop/>
      </View>
      <View style={{width: responsiveScreenWidth(25)}}>
         <Text  style={styles.textLabel}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default UserTypeBtn;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
},
  textLabel: {
    fontSize: responsiveFontSize(4),
  },
  animContainer: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(15),
  },
  buttonContainer:{
    paddingTop: responsiveScreenHeight(10), 
    paddingLeft: responsiveScreenWidth(10)
  },
  checkBtn: {
    marginTop: responsiveScreenHeight(3)
  }
});
