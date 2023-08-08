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
import React, {useEffect, useState, useRef} from 'react';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {useNavigation} from '@react-navigation/native';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';
import {useDispatch} from 'react-redux';
import {
  UpdateRegisterUserDetails,
  updateUserDetails,
} from '../../redux/reducers/userReducer';

export default function Login() {
  const vectorImg = require('../../../assets/images/Vector1.png');
  const navigation = useNavigation();
  const {GenerateOtpServiceHandler} = useAuthServiceHandler();

  const [phone, setPhone] = useState('');

  const [phoneValidError, setPhoneValidError] = useState('');

  const [isFocus, setIsFocus] = useState(false);
  const dispatch = useDispatch();

  const Validation = () => {
    if (phone.length < 10) {
      setPhoneValidError('Enter valid number !');
      return false;
    } else {
      setPhoneValidError('');
      return true;
    }
  };

  const handleSubmit = () => {
    const isValid = Validation();

    if (isValid) {
      const data = {
        phoneNumber: phone,
        type: 'GENERATE',
      };
      dispatch(updateUserDetails(data));
      dispatch(UpdateRegisterUserDetails(data));
      GenerateOtpServiceHandler(data);
    }
  };

  const OnHandleChange = (value: string | any[]) => {
    if (!value.length) {
      setPhoneValidError('Required');
      return false;
    } else if (value.length < 10 || value.length > 10) {
      setPhoneValidError('Enter valid number !');
      return false;
    } else {
      setPhoneValidError('');
      return true;
    }
  };

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.containerImg}>
          <Image style={styles.image} source={vectorImg} />
        </TouchableOpacity>

        <View style={styles.textContainer}>
          <Text style={styles.textH}>
            Let's <Text style={{color: '#1F4C6B'}}>Sign In</Text>
          </Text>

          <Text style={styles.textP}>Login with your mobile number</Text>
        </View>

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
              OnHandleChange(value);
              setPhone(value);
            }}
            onFocus={() => setIsFocus(true)}
          />
        </View>
        {phoneValidError ? (
          <Text style={styles.errorText}>{phoneValidError}</Text>
        ) : null}
        <View style={styles.button__}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}>
            <Text style={styles.btnText}>GET OTP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footerText}>
          <Text style={styles.registerText}>
            By continuing, you agree to Real Estate {'\n'}
            <Text style={styles.text}>Privacy Policy</Text> and{' '}
            <Text style={styles.text}>Terms and Conditions</Text>
          </Text>
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
  required: {color: 'red'},

  textContainer: {
    marginVertical: responsiveScreenHeight(4),
  },

  textH: {
    marginVertical: responsiveScreenHeight(2),
    fontSize: 25,
  },

  textP: {
    marginBottom: responsiveScreenHeight(1.2),
    fontSize: 12,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 5,
    height: responsiveScreenHeight(7),
    width: responsiveScreenWidth(90),
    marginVertical: responsiveScreenHeight(1),
    borderWidth: 0,
    borderColor: '#D3D3D3',
    backgroundColor: '#F5F4F8',
    borderRadius: 3,
    padding: 10,
    fontSize: 12,
  },
  input: {
    flex: 3,
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
  registerText: {
    fontSize: 12,
  },

  footerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: responsiveHeight(12),
  },
  errorText: {
    fontSize: responsiveFontSize(1.5),
    color: 'red',
    textAlign: 'right',
  },

  text: {
    fontWeight: '700',
    fontSize: responsiveFontSize(1.5),
  },
});
