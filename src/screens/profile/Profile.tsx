import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
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

export default function Profile() {
  const { updatePofileHandler } = useProfileHooks();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    // Add more profile data fields as needed
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
      Alert.alert('Error',error.message);
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
        <View style={styles.profileContainer}>
          <View style={styles.userIcon}>
            <Fontisto name="person" size={responsiveWidth(18)} />
          </View>

          <Text style={styles.userName}>
            Welcome,<Text style={styles.subText}> {userName} </Text>
          </Text>
          <Text style={styles.emailText}>{userDetails?.email}</Text>
          <Text style={styles.emailText}>{userDetails?.phoneNumber}</Text>
        </View>
        <TouchableOpacity onPress={() => setIsModalVisible(true)}>
          <Text style={styles.editYourProfile}>Edit Your Profile</Text>
          <UpdateProfileModal
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onSave={handleSaveProfile}
            profileData={profileData}
          />
        </TouchableOpacity>
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
        <View style={styles.button__}>
          <TouchableOpacity onPress={handleLogout} style={styles.button}>
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
    fontSize: responsiveFontSize(3),
    color: 'gray',
    fontWeight: 'bold',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginVertical: responsiveScreenHeight(2),
    gap: responsiveScreenHeight(1),
  },
  userIcon: {
    borderWidth: responsiveScreenWidth(0.2),
    borderColor: '#234F68',
    borderRadius: responsiveScreenWidth(50),
    paddingHorizontal: responsiveScreenWidth(7),
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
    fontSize: responsiveFontSize(3),
  },

  editYourProfile: {
    textAlign: 'center',
    fontSize: responsiveFontSize(3),
    color: '#234F68',
    marginBottom: responsiveScreenHeight(2),
  },
  button__: {
    alignItems: 'center',
    marginVertical: responsiveScreenHeight(5),
  },

  btnText: {
    color: 'white',
    fontSize: responsiveFontSize(3),
    textAlign: 'center',
  },
  userName: {
    fontSize: responsiveFontSize(4),
  },
  subText: {
    color: '#234F68',
  },
});
function updatePofileHandler(
  updatedProfile: React.SetStateAction<{
    name: string;
    email: string;
    phoneNumber: string;
  }>,
) {
  throw new Error('Function not implemented.');
}
