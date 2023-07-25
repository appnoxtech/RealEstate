import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import TourHeader from './TourHeader';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  useResponsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';


export default function ProductTour01() {
  const navigation = useNavigation();
  const image1 = '../../../../assets/images/Rectangle6.png';
  const vector = '../../../../assets/images/Vector.png';

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <TourHeader />

        <Text style={styles.containerText}>
          Find best place {'\n'}
          <Text style={styles.containerTextInner}>
            to stay in good price
          </Text>{' '}
        </Text>
        <Text style={styles.containerText1}>
          Lorem ipsum dolor sit amet, {'\n'}consectetur adipiscing elit, sed.
        </Text>

        <View>
          <ImageBackground
            style={styles.backGroundImage}
            source={require(image1)}
            resizeMode="cover">
            <View style={styles.backGroundImageButton}>
              <TouchableOpacity
                style={styles.pressBack}
                onPress={() => navigation.goBack()}>
                <Image
                  style={styles.pressBackImg}
                  source={require(vector)}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProductTour02' as never)}
                style={styles.button}>
                <Text style={styles.btnText}>Next</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
    padding: 15,
    paddingTop: 0,
  },
  containerText: {
    marginVertical: responsiveScreenHeight(5),
    fontSize: 25,
  },
  containerTextInner: {
    color: '#204D6C',
  },
  containerText1: {
    fontSize: 12,
    marginBottom: 20,
  },
  backGroundImage: {
    width: responsiveScreenWidth(91),
    height: responsiveScreenHeight(59),
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingVertical: responsiveScreenHeight(2),
    resizeMode: 'contain',
  },

  backGroundImageButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 30,
  },

  imageContainerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: responsiveScreenHeight(2),
    gap: responsiveScreenWidth(2),
  },
  pressBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 200,
    borderColor: 'white',
    backgroundColor: 'white',
    padding: 17,
  },

  pressBackImg: {
    width: 24,
    height: 24,
  },

  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8BC83F',
    paddingVertical: responsiveScreenHeight(2),
    width: responsiveScreenWidth(50),
    backgroundColor: '#8BC83F',
  },
  btnText: {color: 'white', fontSize: 16, textAlign: 'center'},
  // footer: {
  //   flex: 1,
  //   alignItems: 'center',
  //   flexDirection: 'column-reverse',
  //   marginVertical: responsiveScreenHeight(2),
  // },
});
