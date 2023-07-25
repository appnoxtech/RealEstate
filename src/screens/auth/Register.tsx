import {
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';


const EMAIL_REGEX = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
export default function Register() {
  const navigation = useNavigation();
  const {handleRegisterService} = useAuthServiceHandler();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [nameValidError, setNameValidError] = useState('');
  const [emailValidError, setEmailValidError] = useState('');
  const [phoneValidError, setPhoneValidError] = useState('');
  const [isFocus, setIsFocus] = useState(false);
  const vectorImg = require('../../../assets/images/Vector1.png');
  const profile = '../../../assets/images/Profile.png';
  const groupImg = require('../../../assets/images/Group.png');
  const callImg = require('../../../assets/images/Call.png')

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
    } else if (phone.length < 10) {
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
        type: 'GENERATE',
      };
      handleRegisterService(data);
      console.log(data);
      Alert.alert('Success !');
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.containerImg}>
          <Image
            style={styles.image}
            source={vectorImg}
          />
        </TouchableOpacity>

        <Text style={styles.textH}>
          Create your<Text style={{color: '#1F4C6B'}}> account</Text>
        </Text>
        <Text style={styles.textP}>
          quis nostrud exercitation ullamco laboris nisi ut
        </Text>
        <View style={styles.containerInput}>
          <View
            style={
              nameValidError ? styles.inputContainer1 : styles.inputContainer
            }>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => {
                setName(value);
              }}
              onFocus={() => setIsFocus(true)}></TextInput>
            <Image source={require(profile)} />
          </View>
          {nameValidError ? (
            <Text style={styles.errorText}>{nameValidError}</Text>
          ) : null}
          <View
            style={
              emailValidError ? styles.inputContainer1 : styles.inputContainer
            }>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              autoCorrect={false}
              autoCapitalize="none"
              onChangeText={value => {
                setEmail(value);
              }}
              onFocus={() => setIsFocus(true)}
            />
            <Image source={groupImg} />
          </View>
          {emailValidError ? (
            <Text style={styles.errorText}>{emailValidError}</Text>
          ) : null}
          <View
            style={
              phoneValidError ? styles.inputContainer1 : styles.inputContainer
            }>
            <TextInput
              style={styles.input}
              placeholder="Phone "
              value={phone}
              keyboardType="number-pad"
              onChangeText={value => {
                // OnHandleChange(value);
                setPhone(value);
              }}
              onFocus={() => setIsFocus(true)}
            />
            <Image
              style={styles.imagePhone}
              source={callImg}
            />
          </View>
          {phoneValidError ? (
            <Text style={styles.errorText}>{phoneValidError}</Text>
          ) : null}
        </View>

        <View style={styles.button__}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    padding: 20,
  },

  containerImg: {
    borderWidth: 1,
    borderRadius: responsiveScreenWidth(7),
    backgroundColor: '#F5F4F8',
    borderColor: '#F5F4F8',
    width: responsiveScreenWidth(12),
    height: responsiveScreenWidth(12),
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 5,
    height: 10,
  },
  imagePhone: {
    width: 20,
    height: 20,
  },

  textH: {
    marginVertical: responsiveScreenHeight(2),
    fontSize: 25,
  },

  textP: {
    marginBottom: responsiveScreenHeight(1.2),
    fontSize: 12,
  },

  inputContainerEmail: {
    borderWidth: 1,
    borderRadius: 3,
  },

  containerInput: {
    marginTop: responsiveScreenHeight(6),
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(90),
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
    width: responsiveScreenWidth(90),
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: '#F5F4F8',
    borderRadius: 3,
    padding: 10,
    fontSize: 12,
  },
  input: {
    flex: 3,
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
