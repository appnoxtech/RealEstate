import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import {useNavigation} from '@react-navigation/native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import SettingButton from '../../component/common/buttons/SettingButton';
import NotificationCard from '../../component/common/Card/NotificationCard';
import {white} from '../../../assets/Styles/GlobalTheme';

export default function Notification() {
  const navigation = useNavigation();

  const notificationData = [
    {
      id: 1,
      title: 'No idea about area 51',
      description:
        "Don't worry! Explore markets, malls, schools etc about area 51.",
      postingTime: '21 hrs ago',
    },
    {
      id: 2,
      title: 'No idea about area 51',
      description:
        "Don't worry! Explore markets, malls, schools etc about area 51.",
      postingTime: '21 hrs ago',
    },
    {
      id: 3,
      title: 'No idea about area 51',
      description:
        "Don't worry! Explore markets, malls, schools etc about area 51.",
      postingTime: '21 hrs ago',
    },
    {
      id: 4,
      title: 'No idea about area 51',
      description:
        "Don't worry! Explore markets, malls, schools etc about area 51.",
      postingTime: '21 hrs ago',
    },
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <View style={{paddingBottom: responsiveScreenHeight(5)}}>
            <HeaderWithBackBtn />
          </View>
          <Text style={styles.notificationText}>Your Notification</Text>

          <SettingButton
            onPress={() => navigation.navigate('CommunicationSetting' as never)}
          />
        </View>
      </View>
      <View style={{flex: 1}}>
        <ScrollView
          style={{flex: 1}}
          contentContainerStyle={{backgroundColor: white}}>
          {notificationData.map(item => (
            <NotificationCard
              key={item.id}
              title={item.title}
              description={item.description}
              postingTime={item.postingTime}
            />
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: responsiveScreenHeight(1),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  notificationText: {
    fontSize: responsiveFontSize(3),
  },
  notificationFeed: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
