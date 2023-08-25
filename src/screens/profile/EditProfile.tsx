import {
  Alert,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {dark} from '../../../assets/Styles/GlobalTheme';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';
import {useNavigation} from '@react-navigation/native';
import {useProfileHooks} from '../../hooks/ProfileHooks';

import ExploreButton from '../../component/common/buttons/ExploreButton';

var padding =
  Platform.OS === 'android'
    ? responsiveScreenHeight(2)
    : responsiveScreenHeight(0);

const EditProfile = () => {
  const fullNamePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const {updatePofileHandler} = useProfileHooks();

  const {userDetails} = useSelector((state: any) => state?.user);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [nameValidError, setNameValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');

  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
  });

  const validation = () => {
    if (!fullNamePattern.test(name)) {
      setNameValidError('Enter valid name');
      setEmailValidError('');
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setNameValidError('');
      setEmailValidError('Enter valid email !');
      return false;
    } else {
      setNameValidError('');
      setEmailValidError('');

      return true;
    }
  };

  const handleSaveProfile = async (
    updatedProfile: React.SetStateAction<{
      name: string;
      email: string;
      phoneNumber: string;
    }>,
  ) => {
    const isValid = validation();
    if (isValid) {
      const data = {
        name: name,
        email: email,
      };
      setProfileData(data);
      console.log(profileData);

      try {
        const res = await updatePofileHandler(profileData, userDetails);
        navigation.goBack();
      } catch (error: any) {
        Alert.alert('Error -------1111111', error.message);
      }
    }
  };

  const OnHandleChangeName = (params: string) => {
    setName(params);
    if (!params.length) {
      setNameValidError('Required');
      return false;
    } else if (!fullNamePattern.test(params)) {
      setNameValidError('Enter valid Name !');
      return false;
    } else {
      setNameValidError('');
      return true;
    }
  };

  const OnHandleChangeEmail = (params: string) => {
    setEmail(params);
    if (!params.length) {
      setEmailValidError('Required');
      return false;
    } else if (!EMAIL_REGEX.test(params)) {
      setEmailValidError('Enter valid Email !');
      return false;
    } else {
      setEmailValidError('');
      return true;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={styles.mainContainer}>
        <View style={styles.backButton}>
          <HeaderWithBackBtn />
          <Text style={styles.profileText}>Profile Detail</Text>
        </View>
        <View style={styles.userIcon}>
          <Fontisto name="person" size={responsiveWidth(10)} color={dark} />
        </View>
        <View style={styles.containerInput}>
          <View>
            <TextInput
              style={
                nameValidError ? styles.inputContainer1 : styles.inputContainer
              }
              placeholder="Full Name"
              placeholderTextColor={dark}
              value={name}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={OnHandleChangeName}
            />
          </View>
          {nameValidError ? (
            <Text style={styles.errorText}>{nameValidError}</Text>
          ) : null}
          <View style={{paddingVertical: responsiveScreenHeight(3)}}>
            <TextInput
              style={
                emailValidError ? styles.inputContainer1 : styles.inputContainer
              }
              placeholder="Email"
              placeholderTextColor={dark}
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={OnHandleChangeEmail}
            />
          </View>
          {emailValidError ? (
            <Text style={styles.errorText}>{emailValidError}</Text>
          ) : null}
        </View>
        <ExploreButton onPress={handleSaveProfile} title="Save" />
      </View>
    </SafeAreaView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: responsiveScreenWidth(4),
    paddingVertical: padding,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveScreenWidth(10),
  },
  profileText: {
    color: dark,
    fontSize: responsiveFontSize(2.5),
  },
  userIcon: {
    backgroundColor: '#F5F4F8',
    borderRadius: responsiveScreenWidth(48),
    paddingHorizontal: responsiveScreenWidth(5),
    paddingVertical: responsiveScreenHeight(2.1),
    alignSelf: 'center',
    marginVertical: responsiveScreenHeight(5),
  },
  containerInput: {
    marginTop: responsiveScreenHeight(6),
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: '100%',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
  },
  inputContainer1: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    height: responsiveScreenHeight(7),
    width: '100%',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F5F4F8',
    borderRadius: 3,
    padding: 10,
    fontSize: 12,
  },
  input: {
    flex: 1,
    color: dark,
  },
  profileImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  errorText: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    textAlign: 'right',
  },
  emailImage: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2),
  },
});
