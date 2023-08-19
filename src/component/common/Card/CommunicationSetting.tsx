import {
  Platform,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import HeaderWithBackBtn from '../buttons/HeaderWithBackBtn';
import CustomSwitchBtn from '../buttons/CustomSwitchBtn';
import {dark} from '../../../../assets/Styles/GlobalTheme';

const CommunicationSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View>
            <HeaderWithBackBtn />
          </View>
          <Text style={styles.notificationText}>Communication Setting</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.bodyFirst}>
            <View>
              <Text style={styles.headerText}>Property recommendations</Text>
              <Text style={{color: dark}}>
                Curated properties based on your interests
              </Text>
            </View>
            <View style={styles.switchContainer1}>
              <CustomSwitchBtn
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
              <Text style={{color: dark}}>
                Curated projects based on your interests
              </Text>
            </View>
            <View style={styles.switchContainer2}>
              <CustomSwitchBtn
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
    paddingVertical:
      Platform.OS === 'android'
        ? responsiveScreenHeight(3)
        : responsiveScreenHeight(0),
    gap: responsiveScreenWidth(5),
  },
  notificationText: {
    color: dark,
    fontSize: responsiveFontSize(3),
  },
  body: {
    flex: 1,
    marginTop: responsiveHeight(5),
    gap: responsiveScreenHeight(5),
  },
  bodyFirst: {
    flexDirection: 'row',
  },
  bodySecond: {
    flexDirection: 'row',
  },
  headerText: {
    color: dark,
    fontSize: responsiveFontSize(2.3),
    fontWeight: 'bold',
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
    marginLeft: responsiveWidth(5),
  },
});
