import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {responsiveFontSize, responsiveHeight, responsiveScreenHeight, responsiveScreenWidth} from 'react-native-responsive-dimensions';

const profileImg = require('../../../assets/images/Ellipse.png');

export default function Profile() {
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.profileContainer}>
          <Image style={styles.profileImg} source={profileImg} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Text style={styles.textAuth}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textAuth}> / Register</Text>
          </TouchableOpacity>
        </View>
        <Text style={{textAlign: 'center'}}>
          Login and access millions of advertiser {'\n'} details on single click
        </Text>
        <View style={styles.button__}>
          <TouchableOpacity
            style={styles.button}
            >
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
    gap: responsiveHeight(2)
  },
  textAuth:{
    color: '#234F68',
    fontSize: responsiveFontSize(3)
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
});
