import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';

export default function Profile() {
  const profileImg = require('../../../assets/images/Ellipse.png');
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profileContainer}>
          <Image style={styles.profileImg} source={profileImg} />
        </TouchableOpacity>
        
        <Text style={styles.headerText}>
            Welcome,<Text style={styles.subText}> John ! </Text>
          </Text>
        <View style={styles.button__}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    gap: responsiveHeight(2),
  },
  profileContainer: {},
  profileImg: {},
  textAuth: {
    color: '#234F68',
    fontSize: responsiveFontSize(3),
  },
  button: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#8BC83F',
    paddingVertical: responsiveScreenHeight(2),
    width: responsiveScreenWidth(70),
    backgroundColor: '#8BC83F',
  },

  button__: {
    alignItems: 'center',
    marginVertical: responsiveScreenHeight(5),
  },

  btnText: {color: 'white', fontSize: 16, textAlign: 'center'},
  headerText: {
    fontSize: responsiveFontSize(4),
  },
  subText: {
    color: '#234F68',
  },
});
