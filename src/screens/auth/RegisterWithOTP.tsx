//@ts-ignore
import {
  View,
  StyleSheet,
  TextInput,
  Pressable,
  Text,
  Keyboard,
  Platform,
  Modal,
  TouchableWithoutFeedback,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, {LegacyRef, RefObject, useEffect, useRef, useState} from 'react';
import {Alert} from 'react-native';
import {
  responsiveFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
} from 'react-native-responsive-dimensions';
import {
  colorGrey,
  colorPrimary,
  colorSecondary,
  danger,
  dark,
  mediumFont,
  systemGrey,
  systemGreyBg,
} from '../../../assets/Styles/GlobalTheme';
import {useNavigation} from '@react-navigation/native';
import {OtpScreenLabels} from '../../utils/constants/OtpScreenConst';
import ButtonPrimary from '../../component/common/buttons/ButtonPrimary';
import useKeyboardVisibleListener from '../../hooks/CommonHooks/isKeyboardVisibleHook';
import HeaderWithBackBtn from '../../component/common/buttons/HeaderWithBackBtn';
import useAuthServiceHandler from '../../hooks/serviceHandler/AuthServiceHandler';
import {useSelector} from 'react-redux';
import {generateOTPService} from '../../services/common/OtpService';

type otpInterface = {
  [key: string]: string;
};
const initialState: otpInterface = {
  pin1: '',
  pin2: '',
  pin3: '',
  pin4: '',
};

interface param {
  val: string;
  key: string;
}

interface params {
  params: {
    email: string;
    type: string;
    flow: string;
  };
}

const labels = {
  notRecieveCode: 'Didn’t received code? ',
  resend: 'Resend',
  verify: 'Verify',
};

const OTP: React.FC<any> = ({route}) => {
  const {registerUserDetails} = useSelector((state: any) => state.user);
  const {type} = route?.params;

  const {
    VerifyOTPServiceHandler,
    GenerateOtpServiceHandler,
    isWrongOTPModalVisible,
    setWrongOTPModalVisible,
  } = useAuthServiceHandler();
  const isKeyboardVisible = useKeyboardVisibleListener();
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(59);
  const [show, setShow] = useState(false);
  const [activePin, setActivePin] = useState('pin1');
  const [isActiveBtn, setIsActiveBtn] = useState(false);
  const [error, setError] = useState(false);
  const [otp, setOtp] = useState(initialState);
  const [otpError, setOtpError] = useState('');
  const navigation = useNavigation();

  const pin1Ref = React.createRef<TextInput>();
  const pin2Ref = React.createRef<TextInput>();
  const pin3Ref = React.createRef<TextInput>();
  const pin4Ref = React.createRef<TextInput>();

  // const verifyOTP = async (otp: string) => {
  //   try {
  //     const data = {
  //       phoneNumber,
  //       otp: parseInt(otp, 10),
  //       type,
  //     };

  //     const res = await confirmOTPService(data);
  //     setOtp(initialState);
  //     if (flow === 'Signup') {
  //       Alert.alert(SuccessMessage.signUp);
  //       navigation.reset({
  //         index: 0,
  //         routes: [{name: 'HomePage'} as any],
  //       });
  //     } else if (flow === 'passwordForget') {
  //       navigation.navigate('ChangePassword' as never, {email, otp} as never);
  //     }
  //   } catch (error: any) {
  //     if (error.response.data.errors[0].message === 'Otp Is Invalid') {
  //       Alert.alert('Notification', 'OTP is invalid');
  //     } else {
  //       Alert.alert('Notification', error.response.data.errors[0].message);
  //     }
  //   }
  // };

  // useEffect(() => {
  //   console.log('Modal visibility updated:', isWrongOTPModalVisible);
  // }, [isWrongOTPModalVisible]);

  // const handleShowModal = () => {
  //   console.log('Setting isWrongOTPModalVisible to true');
  //   setWrongOTPModalVisible(true);
  // };

  const handleOTPVerification = () => {
    // OTP VERIFICATION
    const userOTP = Object.keys(otp).reduce((sum, pin): string => {
      const localPin = otp[pin];
      return sum + localPin;
    }, '');
    if (userOTP.length === 4) {
      const data = {
        phoneNumber: registerUserDetails?.phoneNumber,
        otp: userOTP,
        type,
      };
      VerifyOTPServiceHandler(data);
    } else {
      setOtpError('Enter Valid OTP !');
      return;
    }
  };

  const handleChange = ({val, key}: param) => {
    setOtp(oldOtp => {
      return {
        ...oldOtp,
        [key]: val,
      };
    });
  };

  useEffect(() => {
    if (!pin1Ref.current) {
      return;
    }
    pin1Ref.current.focus();
  }, []);

  // active btn when user enter 4 digit otp
  useEffect(() => {
    setError(false);
    if (otp.pin1 && otp.pin2 && otp.pin3 && otp.pin4) {
      setIsActiveBtn(true);
    } else {
      setIsActiveBtn(false);
    }
  }, [otp]);

  const clickHandler = async () => {
    setOtp(initialState);
    setShow(false);
    setTimer(59);
    const data = {
      phoneNumber: registerUserDetails?.phoneNumber,
      type: 'GENERATE',
    };
    GenerateOtpServiceHandler(data);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (timer >= 1) {
        setTimer(timer - 1);
      }
      if (timer === 0) {
        setShow(true);
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timer]);

  const GenerateOtp = async () => {
    try {
      setOtp(initialState);
      setShow(false);
      setTimer(59);
      await generateOTPService({
        phoneNumber: registerUserDetails?.phoneNumber,
        type: 'GENERATE',
      });
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.mainContainer}>
        <View
          style={{
            paddingHorizontal: responsiveScreenWidth(4),
            paddingVertical:
              Platform.OS === 'android' ? responsiveScreenHeight(2) : 0,
          }}>
          <HeaderWithBackBtn />
        </View>
        <View style={styles.body}>
          {
            <View style={styles.container}>
              <View>
                <Text style={styles.primaryText}>
                  {OtpScreenLabels.primaryText}
                </Text>
                <Text style={styles.secondaryHeading}>
                  {OtpScreenLabels.subText}
                </Text>
              </View>
              <View style={styles.inputsContainer}>
                <View
                  style={
                    error
                      ? styles.errorTextInputView
                      : activePin === 'pin1'
                      ? styles.focusTextInputView
                      : styles.TextInputView
                  }>
                  <TextInput
                    keyboardType="number-pad"
                    ref={pin1Ref}
                    selectionColor={colorSecondary}
                    maxLength={1}
                    onFocus={() => setActivePin('pin1')}
                    value={otp.pin1}
                    onChangeText={val => {
                      handleChange({val, key: 'pin1'});
                      if (val) {
                        if (!pin2Ref.current) {
                          return;
                        }
                        //@ts-ignore
                        pin2Ref.current.focus();
                        setActivePin('pin2');
                      }
                    }}
                    style={styles.otpInput}
                  />
                </View>
                <View
                  style={
                    error
                      ? styles.errorTextInputView
                      : activePin === 'pin2'
                      ? styles.focusTextInputView
                      : styles.TextInputView
                  }>
                  <TextInput
                    keyboardType="number-pad"
                    ref={pin2Ref}
                    selectionColor={colorSecondary}
                    onFocus={() => setActivePin('pin2')}
                    onKeyPress={({nativeEvent}) => {
                      if (nativeEvent.key === 'Backspace') {
                        if (!pin1Ref.current) {
                          return;
                        }
                        pin1Ref.current.focus();
                        setActivePin('pin1');
                      }
                    }}
                    maxLength={1}
                    value={otp.pin2}
                    onChangeText={val => {
                      handleChange({val, key: 'pin2'});
                      if (val) {
                        if (!pin3Ref.current) {
                          return;
                        }
                        pin3Ref.current.focus();
                        setActivePin('pin3');
                      }
                    }}
                    style={styles.otpInput}
                  />
                </View>
                <View
                  style={
                    error
                      ? styles.errorTextInputView
                      : activePin === 'pin3'
                      ? styles.focusTextInputView
                      : styles.TextInputView
                  }>
                  <TextInput
                    keyboardType="number-pad"
                    maxLength={1}
                    selectionColor={colorSecondary}
                    ref={pin3Ref}
                    onFocus={() => setActivePin('pin3')}
                    value={otp.pin3}
                    onKeyPress={({nativeEvent}) => {
                      if (nativeEvent.key === 'Backspace') {
                        if (!pin2Ref.current) {
                          return;
                        }
                        pin2Ref.current.focus();
                        setActivePin('pin2');
                      }
                    }}
                    onChangeText={val => {
                      handleChange({val, key: 'pin3'});
                      if (val) {
                        if (!pin4Ref.current) {
                          return;
                        }
                        pin4Ref.current.focus();
                        setActivePin('pin4');
                      }
                    }}
                    style={styles.otpInput}
                  />
                </View>
                <View
                  style={
                    error
                      ? styles.errorTextInputView
                      : activePin === 'pin4'
                      ? styles.focusTextInputView
                      : styles.TextInputView
                  }>
                  <TextInput
                    keyboardType="number-pad"
                    ref={pin4Ref}
                    selectionColor={colorSecondary}
                    onKeyPress={({nativeEvent}) => {
                      if (nativeEvent.key === 'Backspace') {
                        if (!pin3Ref.current) {
                          return;
                        }
                        pin3Ref.current.focus();
                        setActivePin('pin3');
                      }
                    }}
                    value={otp.pin4}
                    onFocus={() => setActivePin('pin4')}
                    maxLength={1}
                    onChangeText={val => {
                      handleChange({val, key: 'pin4'});
                      if (pin4Ref.current) {
                        pin4Ref.current.focus();
                        setActivePin('pin4');
                      }
                    }}
                    style={styles.otpInput}
                  />
                </View>
              </View>
              {otpError ? (
                <Text style={styles.errorOtp}>{otpError}</Text>
              ) : null}
              <View style={styles.btnContainer}>
                <ButtonPrimary
                  isActive={isActiveBtn}
                  label={labels.verify}
                  handleBtnPress={handleOTPVerification}
                />
              </View>
            </View>
          }
        </View>
        {isKeyboardVisible ? null : (
          <View style={styles.resendOtp}>
            <Text style={styles.message}>{labels.notRecieveCode}</Text>
            {show ? (
              <Pressable onPress={GenerateOtp}>
                <Text style={styles.linkMessage}>{labels.resend}</Text>
              </Pressable>
            ) : (
              <Text style={styles.linkMessage}>
                {timer < 10 ? `00:0${timer}` : `00:${timer}`}
              </Text>
            )}
          </View>
        )}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isWrongOTPModalVisible}
          onRequestClose={() => setWrongOTPModalVisible(false)}>
          <TouchableWithoutFeedback
            onPress={() => setWrongOTPModalVisible(false)}>
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                <View style={styles.modalContent}>
                  <Text style={styles.modalText}>Wrong OTP</Text>
                  <TouchableOpacity
                    style={styles.modalButton}
                    onPress={() => setWrongOTPModalVisible(false)}>
                    <Text style={styles.modalButtonText}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default OTP;

const styles = StyleSheet.create({
  primaryText: {
    fontSize: responsiveFontSize(2.7),
    marginBottom: responsiveScreenHeight(3),
    textAlign: 'center',
    color: colorSecondary,
    fontWeight: 'bold',
  },
  secondaryHeading: {
    fontSize: responsiveFontSize(2),
    color: colorGrey,
    textAlign: 'center',
    fontWeight: '600',
  },
  body: {
    marginTop: responsiveScreenHeight(3),
    paddingHorizontal: responsiveScreenWidth(4.5),
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  container: {
    height: responsiveScreenHeight(84),
    marginTop: responsiveScreenHeight(3),
    position: 'relative',
  },
  inputsContainer: {
    position: 'relative',
    marginTop: responsiveScreenHeight(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  errorOtp: {
    color: 'red',
    textAlign: 'right',
  },
  btnContainer: {
    marginTop: responsiveScreenHeight(5),
  },
  TextInputView: {
    borderWidth: 2,
    borderColor: systemGrey,
    backgroundColor: systemGreyBg,
    width: responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(2),
    height: responsiveScreenHeight(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTextInputView: {
    borderWidth: 2,
    borderColor: danger,
    backgroundColor: systemGreyBg,
    width: responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(2),
    height: responsiveScreenHeight(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  focusTextInputView: {
    borderWidth: 2,
    borderColor: colorSecondary,
    width: responsiveScreenWidth(20),
    borderRadius: responsiveScreenWidth(2),
    height: responsiveScreenHeight(9),
    justifyContent: 'center',
    alignItems: 'center',
  },
  otpInput: {
    color: '#000000',
    fontSize: responsiveFontSize(2.5),
  },
  otpInputHiglight: {},
  resendOtp: {
    position: 'absolute',
    bottom: responsiveScreenHeight(3),
    left: responsiveScreenWidth(25),
    marginTop: responsiveScreenWidth(13),
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  message: {
    color: '#000000',
    fontSize: responsiveFontSize(2),
  },
  linkMessage: {
    fontSize: responsiveFontSize(2),
    color: colorPrimary,
  },
  backBtnContainer: {
    width: responsiveScreenWidth(15),
    paddingHorizontal: responsiveScreenWidth(2),
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'red',
  },
  modalButton: {
    backgroundColor: '#8BC83F',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  modalButtonText: {
    color: dark,
    fontSize: 18,
  },
});
