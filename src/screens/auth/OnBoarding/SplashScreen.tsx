import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';

import React from 'react';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';

export default function SplashScreen() {
  const navigation = useNavigation();
  const maskgroupImageUri =  '../../../../assets/images/Maskgroup.png'
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require(maskgroupImageUri)}
        />
        <Text style={styles.containerText}>Rise {'\n'}Real Estate</Text>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProductTour01' as never)}
          style={styles.button}>
          <Text style={styles.textButton}>Let's Start</Text>
        </TouchableOpacity>

        <Text style={{fontSize: 10, color: 'white', textAlign: 'center'}}>
          Made with love
        </Text>
        <Text style={{fontSize: 8, color: 'white', textAlign: 'center'}}>
          v.1.0
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#21628A',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 100,
  },
  containerText: {
    color: 'white',
    fontSize: 36,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8BC83F',
    width: 190,
    height: 54,
    backgroundColor: '#8BC83F',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textButton: {
    color: 'white',
    fontSize: 16,
  },
  footer: {
    marginVertical: responsiveHeight(2),
  },
});
