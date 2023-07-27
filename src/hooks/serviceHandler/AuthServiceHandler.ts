import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {
  GenerateOTPService,
  VerifyOTPService,
  RegisterService,
  LogoutService,
} from '../../services/auth/authService';
import {useDispatch} from 'react-redux';
import {UpdateIsLoginState} from '../../redux/reducers/userReducer';
import { useEffect } from 'react';

const useAuthServiceHandler = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const GenerateOtpServiceHandler = async (data: any) => {
    try {
      const res = await GenerateOTPService(data);
      const {result} = res.data;
      Alert.alert('OTP', result.generateOTP);
      Navigation.navigate('RegisterWithOTP', {phoneNumber: data.phoneNumber});
    } catch (error: any) {
      const ErrorMsg = error.response.data.error.message;
      if(ErrorMsg === 'Phone number is not verified'){
        Navigation.navigate('RegisterWithOTP', {phoneNumber: data.phoneNumber});
      }else{
        Alert.alert('', 'User Not Register!');
        Navigation.navigate('Register' as never);
      }
    }
  };

  const VerifyOTPServiceHandler = async (data: any) => {
    try {
      const res = await VerifyOTPService(data);
      const {result} = res.data;
      if (typeof result === 'string') {
        Navigation.navigate('Register' as never);
      } else {
        Navigation.navigate('SuccessPage' as never, {title : "Login"});
      }
    } catch (error: any) {
      Alert.alert('Wrong OTP');
    }
  };

  const getFCMToken = async () => {
    try {
      const token = await messaging().getToken();
      Alert.alert(token);
      console.log(token);
      
    } catch (error) {
      console.log(error);
    }
  };
  
  
  useEffect(() => {
    getFCMToken();
  }, []);

  const handleRegisterService = async (data: any) => {
    try {
      const res = await RegisterService(data);
      const {result} = res.data;
      Alert.alert('OTP', result.generateOTP);
      Navigation.navigate('RegisterWithOTP', {phoneNumber: data.phoneNumber});
    } catch (error: any) {
      Alert.alert('Error', error.response.data.error.message);
    }
  };

  const handleLogoutService = async (data: any) => {
    try {
      dispatch(SetIsLoadingState(true));
      const res = await LogoutService(data);
      dispatch(SetIsLoadingState(false));
      const {result} = res.data;
      Navigation.navigate('SplashScreen' as never);
    } catch (error: any) {
      dispatch(SetIsLoadingState(false));
      Alert.alert('Error', error.response.data.error.message);
    }
  };

  

  return {
    GenerateOtpServiceHandler,
    VerifyOTPServiceHandler,
    handleRegisterService,
    handleLogoutService,
  };
};

export default useAuthServiceHandler;
function SetIsLoadingState(arg0: boolean): any {
  throw new Error('Function not implemented.');
}
