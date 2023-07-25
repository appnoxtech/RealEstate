import {SafeAreaView, StyleSheet, Switch, Text, View} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HeaderWithBackBtn from '../buttons/HeaderWithBackBtn';

const CommunicationSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{paddingBottom: responsiveScreenHeight(5)}}>
            <HeaderWithBackBtn />
          </View>
          <Text style={styles.notificationText}>Communication Setting</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyFirst}>
            <View>
              <Text style={styles.headerText}>Property recommendations</Text>
              <Text>Curated properties based on your interests</Text>
            </View>
            <View style={styles.switchContainer1}>
              <Switch
                trackColor={{false: '#F5F4F8', true: '#3F9F98'}}
                thumbColor={isEnabled ? '#8BC83F' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.bodySecond}>
            <View>
              <Text style={styles.headerText}>Project recommendations</Text>
              <Text>Curated projects based on your interests</Text>
            </View>
            <View style={styles.switchContainer2}>
              <Switch 
                trackColor={{false: '#F5F4F8', true: '#3F9F98'}}
                thumbColor={isEnabled ? '#8BC83F' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CommunicationSetting;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: responsiveScreenWidth(5),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(5),
  },
  notificationText: {
    fontSize: responsiveFontSize(3),
  },
  body: {
    flex: 1,
    marginTop: responsiveHeight(5),
    gap: responsiveScreenHeight(5)
  },
  bodyFirst: {
    flexDirection: 'row',
  },
  bodySecond: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold'
  },
  switchContainer1: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  switchContainer2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: responsiveWidth(5)
  }
});
