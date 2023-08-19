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
import {dark} from '../../../assets/Styles/GlobalTheme';

export default function Profile() {
  const isKeyboardVisible = useKeyboardVisibleListener();

  const {updatePofileHandler} = useProfileHooks();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(UpdateLogout());
  };

  const {userDetails} = useSelector((state: any) => state.user);

  const navigation = useNavigation();

  const userName = userDetails?.name;
  const handelCommunePress = () => {
    navigation.navigate('CommunicationSetting' as never);
  };
  const handelFeedBackPress = () => {
    navigation.navigate('ShareFeed' as never);
  };
  const handelAppVersionPress = () => {
    navigation.navigate('ChangelogScreen' as never);
  };

  const handleSaveProfile = async (
    updatedProfile: React.SetStateAction<{
      name: string;
      email: string;
      phoneNumber: string;
    }>,
  ) => {
    setProfileData(updatedProfile);
    try {
      const res = await updatePofileHandler(updatedProfile, userDetails);
    } catch (error: any) {
      Alert.alert('Error -------1111111', error);
    }
  };
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <ModalScreen />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Homepage' as never)}>
            <Text style={styles.headerText}>Real Estate</Text>
          </TouchableOpacity>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.profileContainer}>
            <View style={styles.userIcon}>
              <Fontisto name="person" size={responsiveWidth(10)} color={dark} />
            </View>

            {/* <UpdateProfileModal
              isVisible={isModalVisible}
              onClose={() => setIsModalVisible(false)}
              onSave={handleSaveProfile}
              profileData={profileData}
            /> */}

            <Text style={styles.userName}>
              Welcome,<Text style={styles.subText}> {userName} </Text>
            </Text>
            <Text style={styles.emailText}>{userDetails?.email}</Text>
            <Text style={styles.emailText}>{userDetails?.phoneNumber}</Text>

            <TouchableOpacity onPress={() => navigation.navigate('EditProfile' as never)}>
            <Text style={styles.editYourProfile}>Edit Your Profile</Text>
          </TouchableOpacity>
          </View>
         
          <ProfileCard
            onPress={handelCommunePress}
            iconName1="settings"
            title="Communication Settings"
            iconName2="chevron-forward-outline"
          />
          <ProfileCard
            onPress={handelFeedBackPress}
            iconName1="document-text-outline"
            title="Share Feedback"
            iconName2="chevron-forward-outline"
          />
          <ProfileCard
            onPress={handelAppVersionPress}
            iconName1="add"
            title="About App"
            iconName2="chevron-forward-outline"
          />

          
          <View style={styles.button__}>
          <ProfileCard
            onPress={handleLogout}
            iconName1="log-out-outline"
            title="Logout"
            iconName2="chevron-forward-outline"
          />
          </View>
        </ScrollView>
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
    gap: responsiveHeight(1),
  },
  header: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F4F8',
    paddingHorizontal: responsiveScreenWidth(6),
    paddingVertical: responsiveScreenHeight(2.5),
    marginBottom: responsiveHeight(4),
    gap: responsiveScreenWidth(3),
  },
  headerText: {
    fontSize: responsiveFontSize(2),
    color: dark,
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
  userName: {
    color: dark,
    fontSize: responsiveFontSize(2),
  },
  subText: {
    color: '#234F68',
  },
});
