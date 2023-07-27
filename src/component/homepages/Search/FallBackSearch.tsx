import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Lottie from 'lottie-react-native';
import {
    responsiveFontSize,
    responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import {Image} from 'react-native';

const FallBackSearch = ({route}: any) => {
  const navigation = useNavigation();
  const animationFallback = require('../../../../assets/Animation/animation_lk9jaasp.json');
  const vector1Img = require('../../../../assets/images/Vector1.png');
  const {sendMessage} = route.params;
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.containerImg}>
        <Image style={styles.image} source={vector1Img} />
      </TouchableOpacity>
      <View style={styles.container}>
        <Lottie
          style={styles.lottieAnimation}
          source={animationFallback}
          autoPlay
          loop
        />
        <Text style={styles.message}>{sendMessage}</Text>
      </View>
    </SafeAreaView>
  );
};

export default FallBackSearch;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  lottieAnimation: {
    width: responsiveWidth(50),
  },
  containerImg: {
    borderWidth: 1,
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: responsiveScreenWidth(3),
    marginVertical: responsiveScreenHeight(2),
  },
  image: {
    width: 5,
    height: 10,
  },
  message: {
    marginTop: responsiveScreenHeight(5),
    fontSize: responsiveFontSize(3)
  }
});
