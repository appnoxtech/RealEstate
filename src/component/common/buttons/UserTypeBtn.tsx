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
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import Lottie from 'lottie-react-native';
import {dark} from '../../../../assets/Styles/GlobalTheme';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface props {
  btnPressHandler(label: string): any;
  label: string;
  style: StyleProp<ViewStyle>;
  imageUrl: any;
  id: string;
  selectedLabel: string;
  handelPress(): any;
}

const UserTypeBtn: FC<props> = ({
  btnPressHandler,
  label,
  style,
  imageUrl,
  id,
  selectedLabel,
  handelPress
}) => {
  const [isActive, setIsActive] = useState();

  return (
    <TouchableOpacity
      onPress={() => {
        btnPressHandler(id);
        setIsActive;
      }}
      style={style}>
      <View style={styles.animContainer}>
        <Lottie
          resizeMode="contain"
          style={styles.image}
          source={imageUrl}
          autoPlay
          loop
        />
      </View>

      {id === selectedLabel ? (
        <TouchableOpacity onPress={handelPress} style={styles.next}>
          <Ionicons
            name="arrow-forward"
            size={responsiveScreenWidth(7)}
            color="black"
          />
        </TouchableOpacity>
      ) : null}
      <View style={{width: responsiveScreenWidth(25)}}>
        <Text style={styles.textLabel}>{label}</Text>
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
    color: dark,
    fontSize: responsiveFontSize(4),
  },
  animContainer: {
    width: responsiveScreenWidth(15),
    height: responsiveScreenHeight(15),
  },
  buttonContainer: {
    paddingTop: responsiveScreenHeight(10),
    paddingLeft: responsiveScreenWidth(10),
  },
  checkBtn: {
    marginTop: responsiveScreenHeight(3),
  },
  next: {
    position: 'absolute',
    top: responsiveScreenHeight(2),
    right: responsiveScreenWidth(3.5),
    width: responsiveScreenWidth(9),
    height: responsiveScreenWidth(9),
    borderRadius: responsiveScreenWidth(9),
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
