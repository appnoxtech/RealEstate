import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import {useDispatch, useSelector} from 'react-redux';
import {UpdateRegisterUserDetails} from '../../redux/reducers/userReducer';
import {dark} from '../../../assets/Styles/GlobalTheme';
import PrimaryButton from '../../component/common/buttons/PrimaryButton';
import InputWithIcon from '../../component/common/inputs/InputWithIcon';

export default function Register() {
  const {userDetails} = useSelector((state: any) => state?.user);
  const {registerUserDetails} = useSelector((state: any) => state.user);
  const navigation = useNavigation();
  const {handleRegisterService} = useAuthServiceHandler();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState(userDetails?.phoneNumber);
  const [nameValidError, setNameValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [phoneValidError, setPhoneValidError] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const profile = '../../../assets/images/Profilecopy.png';
  const groupImg = require('../../../assets/images/Group.png');
  const callImg = require('../../../assets/images/Call.png');
  const dispatch = useDispatch();
  const reg = /^[6-9]\d{9}$/;
  const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const fullNamePattern = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
  const validation = () => {
    if (!name.length) {
      setNameValidError('Required !');
      setEmailValidError('');
      setPhoneValidError('');
      return false;
    } else if (!email.length) {
      setNameValidError('');
      setEmailValidError('Required !');
      setPhoneValidError('');
      return false;
    } else if (!EMAIL_REGEX.test(email)) {
      setNameValidError('');
      setEmailValidError('Enter valid email !');
      setPhoneValidError('');
      return false;
    } else if (!reg.test(phone)) {
      setNameValidError('');
      setEmailValidError('');
      setPhoneValidError('Enter valid phone number !');
      return false;
    } else {
      setNameValidError('');
      setEmailValidError('');
      setPhoneValidError('');
      return true;
    }
  };

  const handleSubmit = () => {
    const isValid = validation();
    if (isValid) {
      const data = {
        name: name,
        email: email,
        phoneNumber: phone,
        profilePhoto: '',
        role: 'tenant',
      };
      dispatch(UpdateRegisterUserDetails({...data}));
      // handleRegisterService(registerUserDetails);
      navigation.navigate('SelectUserType' as never);
    }
  };

  const OnHandleChangeNumber = (value: string) => {
    if (!value.length) {
      setPhoneValidError('Required');
      return false;
    } else if (!reg.test(value)) {
      setPhoneValidError('Enter valid number !');
      return false;
    } else {
      setPhoneValidError('');
      return true;
    }
  };

  const OnHandleChangeName = (value: string) => {
    if (!value.length) {
      setNameValidError('Required');
      return false;
    } else if (!fullNamePattern.test(value)) {
      setNameValidError('Enter valid Name !');
      return false;
    } else {
      setNameValidError('');
      return true;
    }
  };

  const OnHandleChangeEmail = (value: string) => {
    if (!value.length) {
      setEmailValidError('Required');
      return false;
    } else if (!EMAIL_REGEX.test(value)) {
      setEmailValidError('Enter valid Email !');
      return false;
    } else {
      setEmailValidError('');
      return true;
    }
  };

  const EmailTextChangeHandler = (value: string) => {
    OnHandleChangeEmail(value);
    setEmail(value);
  };

  const NameTextChangeHandler = (value: string) => {
    OnHandleChangeName(value);
    setName(value);
  }
 
  return (
    <SafeAreaView style={styles.mainContainer}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <View style={styles.headerBackButton}>
            <HeaderWithBackBtn />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.textH}>
              Create your<Text style={{color: '#1F4C6B'}}> account</Text>
            </Text>
            <Text style={styles.textP}>In few simple steps</Text>
            <View style={styles.containerInput}>
              <InputWithIcon
                errorText={nameValidError}
                value={name}
                placeholder="Full Name"
                id="name"
                onTextChangeHandler={NameTextChangeHandler}
                iconFamily="MaterialIcons"
                iconName="person"
                iconColor="black"
                iconStyle={{}}
              />
              <InputWithIcon
                errorText={emailValidError}
                value={email}
                placeholder="Email"
                id="email"
                onTextChangeHandler={EmailTextChangeHandler}
                iconFamily="MaterialCommunityIcons"
                iconName="email-outline"
                iconColor="black"
                iconStyle={{}}
              />
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: responsiveScreenHeight(2),
              }}>
              <View style={styles.btnContainer}>
                <PrimaryButton label="Register" onPresshandler={handleSubmit} />
              </View>
            </View>
          </ScrollView>
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    backgroundColor: 'white',
    textAlign: 'center',
    paddingTop: 0,
    paddingHorizontal: responsiveScreenWidth(5),
  },

  headerBackButton: {
    marginVertical: responsiveScreenHeight(3),
    marginBottom: responsiveScreenHeight(5),
  },

  profileImage: {
    width: responsiveScreenWidth(6),
    height: responsiveScreenHeight(3),
  },
  btnContainer: {
    width: responsiveScreenWidth(70),
  },
  emailImage: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2),
  },

  imagePhone: {
    width: responsiveScreenWidth(5),
    height: responsiveScreenHeight(2),
  },

  textH: {
    color: dark,
    marginVertical: responsiveScreenHeight(2),
    fontSize: 25,
  },

  textP: {
    color: dark,
    marginBottom: responsiveScreenHeight(1.2),
    fontSize: responsiveFontSize(1.9),
  },

  inputContainerEmail: {
    borderWidth: 1,
    borderRadius: 3,
  },

  containerInput: {
    marginTop: responsiveScreenHeight(6),
  },

  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: '99%',
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    borderRadius: 10,
    padding: 10,
    fontSize: 12,
  },
  inputContainer1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    height: responsiveScreenHeight(7),
    width: '99%',
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
    paddingVertical: responsiveScreenHeight(1),
    color: dark,
    backgroundColor: '#F5F4F8',
  },
  passwordFS: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    color: '#234F68',
    marginVertical: responsiveScreenHeight(1.5),
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
    marginVertical: responsiveScreenHeight(2),
  },

  btnText: {color: 'white', fontSize: 16, textAlign: 'center'},
  errorText: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    textAlign: 'right',
  },
});
