import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateLogout} from '../../redux/reducers/userReducer';
import Fontisto from 'react-native-vector-icons/Fontisto';

import ModalScreen from '../Modals/ModalScreen';
import UpdateProfileModal from '../../component/homepages/Modal/UpdateProfileModal';
import ProfileCard from '../../component/common/Card/ProfileCard';
import {useNavigation} from '@react-navigation/native';
import {useProfileHooks} from '../../hooks/ProfileHooks';
import useKeyboardVisibleListener from '../../hooks/CommonHooks/isKeyboardVisibleHook';
import {colorPrimary, dark} from '../../../assets/Styles/GlobalTheme';
import ProfileItemCard from '../../component/common/Card/ProfileItemCard';
import LoadIcon from '../../component/common/LoadIcon';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';

export default function Profile() {

  const {handleLogoutService} = useAuthServiceHandler();
  const isKeyboardVisible = useKeyboardVisibleListener();
  const {userDetails} = useSelector((state: any) => state.user);

  

  const dispatch = useDispatch();
  

  

  const navigation = useNavigation();

  const userName = userDetails?.name;
  const phone = userDetails?.phoneNumber
  
  const handelCommunePress = () => {
    navigation.navigate('CommunicationSetting' as never);
  };
  const handelFeedBackPress = () => {
    navigation.navigate('ShareFeedback' as never);
  };
  const handelAppVersionPress = () => {
    navigation.navigate('ChangelogScreen' as never);
  };

  const UpdateProfileBtnPress = () => {
    navigation.navigate('EditProfile' as never);
  };

  const handleLogout = () => {
    dispatch(UpdateLogout());
    // handleLogoutService(phone) 
   
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <ModalScreen />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              paddingRight: responsiveScreenWidth(12),
            }}>
            <Text style={styles.headerText}>Profile</Text>
          </View>
        </View>
        <View style={{flex: 1}}>
        <ScrollView
          contentContainerStyle={{flex: 1,paddingHorizontal: responsiveScreenWidth(3)}}
          showsVerticalScrollIndicator={false}>
          <View style={{flex: 1}}>
            <ProfileItemCard onPressHandler={UpdateProfileBtnPress}>
              <View style={styles.userCard}>
                <View>
                  <Text style={styles.userName}>{userName}</Text>
                  <Text style={styles.phoneNumber}>
                    +91 {userDetails.phoneNumber}
                  </Text>
                </View>
                <LoadIcon
                  iconFamily="MaterialCommunityIcons"
                  iconName="account-edit-outline"
                  color={colorPrimary}
                  size={30}
                  style={{}}
                />
              </View>
            </ProfileItemCard>
            <ProfileItemCard onPressHandler={handelCommunePress}>
              <View style={styles.socialCard}>
                <View style={styles.leftSideContainer}>
                  <LoadIcon
                    iconFamily="Ionicons"
                    iconName="settings"
                    style={{}}
                    size={30}
                    color={'black'}
                  />
                  <Text style={styles.leftSideContainerText}>
                    Communication Setting
                  </Text>
                </View>
                <LoadIcon
                  iconFamily="MaterialIcons"
                  iconName="keyboard-arrow-right"
                  color="rgba(0,0,0,0.5)"
                  size={30}
                  style={{}}
                />
              </View>
            </ProfileItemCard>
            <ProfileItemCard onPressHandler={handelFeedBackPress}>
              <View style={styles.socialCard}>
                <View style={styles.leftSideContainer}>
                  <LoadIcon
                    iconFamily="Ionicons"
                    iconName="document-text-outline"
                    style={{}}
                    size={30}
                    color={'black'}
                  />
                  <Text style={styles.leftSideContainerText}>
                    Share Feedback
                  </Text>
                </View>
                <LoadIcon
                  iconFamily="MaterialIcons"
                  iconName="keyboard-arrow-right"
                  color="rgba(0,0,0,0.5)"
                  size={30}
                  style={{}}
                />
              </View>
            </ProfileItemCard>
            <ProfileItemCard onPressHandler={handelAppVersionPress}>
              <View style={styles.socialCard}>
                <View style={styles.leftSideContainer}>
                  <LoadIcon
                    iconFamily="Ionicons"
                    iconName="add"
                    style={{}}
                    size={30}
                    color={'black'}
                  />
                  <Text style={styles.leftSideContainerText}>About App</Text>
                </View>
                <LoadIcon
                  iconFamily="MaterialIcons"
                  iconName="keyboard-arrow-right"
                  color="rgba(0,0,0,0.5)"
                  size={30}
                  style={{}}
                />
              </View>
            </ProfileItemCard>
          </View>

          <ProfileItemCard onPressHandler={handleLogout}>
            <View style={styles.logoutContainer}>
              <LoadIcon
                iconFamily="AntDesign"
                iconName="logout"
                style={{}}
                color="rgba(0,0,0,0.7)"
                size={30}
              />
              <Text style={styles.textLogout}>Log out</Text>
            </View>
          </ProfileItemCard>
        </ScrollView>
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
    gap: responsiveHeight(1),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(6),
    paddingVertical: responsiveScreenHeight(1.8),
  },
  headerText: {
    fontSize: responsiveFontSize(3),
    color: dark,
    fontWeight: '700',
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    // alignSelf: 'center',
    gap: responsiveScreenHeight(1),
  },
  userIcon: {
    backgroundColor: '#F5F4F8',
    borderRadius: responsiveScreenWidth(48),
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.1),
  },
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
  emailText: {
    color: dark,
    fontSize: responsiveFontSize(2),
  },

  editYourProfile: {
    textAlign: 'center',
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    color: '#234F68',
    marginVertical: responsiveScreenHeight(2),
  },
  button__: {
    marginVertical: responsiveScreenHeight(10),
  },

  btnText: {
    color: 'white',
    fontSize: responsiveFontSize(2),
  },
  subText: {
    color: '#234F68',
  },
  userCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userName: {
    fontSize: responsiveFontSize(2.5),
    color: 'black',
    marginBottom: responsiveScreenHeight(0.8),
    textTransform: 'capitalize',
    fontWeight: '600',
    letterSpacing: 0.55,
  },
  phoneNumber: {
    fontSize: responsiveFontSize(1.9),
    color: 'black',
    opacity: 0.5,
  },
  socialCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: responsiveScreenHeight(1),
  },
  leftSideContainer: {
    flexDirection: 'row',
    gap: 15,
    alignItems: 'center',
  },
  leftSideContainerText: {
    fontSize: responsiveFontSize(2.2),
    fontWeight: '600',
    color: 'black',
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveWidth(4),
  },
  textLogout: {
    fontSize: responsiveFontSize(2.2),
    color: 'black',
    opacity: 0.7,
    fontWeight: '600',
  },
});


