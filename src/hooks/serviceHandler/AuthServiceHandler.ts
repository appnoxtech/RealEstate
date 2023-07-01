import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {
  GenerateOTPService,
  VerifyOTPService,
  RegisterService,
} from '../../services/auth/authService';

const useAuthServiceHandler = () => {
  const Navigation = useNavigation();

  const GenerateOtpServiceHandler = async (data: any) => {
    try {
      const res = await GenerateOTPService(data);

      const {result} = res.data;

      Alert.alert('OTP', result.generateOTP);

      console.log('data->>>>>>>>>', data, result.generateOTP);

      Navigation.navigate(
        'RegisterWithOTP' as never,
        {phoneNumber: data.phoneNumber} as never,
      );
      
    } catch (error: any) {
      console.log('error', error.response.data.error.message);

      Alert.alert('', 'User Not Register!');

      Navigation.navigate('Register' as never);
    }
  };

  const VerifyOTPServiceHandler = async (data: any) => {
    try {
      const res = await VerifyOTPService(data);
      // console.log(res.status)
      const {result} = res.data;
      if (typeof result === 'string') {
        Navigation.navigate('Register' as never);
      } else {
        Navigation.navigate('HomePage' as never);
      }
    } catch (error: any) {
      console.log('error->>>>>', error.response.data.error.message);

      Navigation.navigate('Register' as never);
    }
  };

  const handleRegisterService = async (data: any) => {
    try {
      const res = await RegisterService(data);
      // dispatch(SetIsLoadingState(false));
      const {result} = res.data;
      console.log(result);
      Navigation.navigate('HomePage' as never);
    } catch (error: any) {
      Alert.alert('Error', error.response.data.errors.message);
    }
  };

  return {
    GenerateOtpServiceHandler,
    VerifyOTPServiceHandler,
    handleRegisterService,
  };
};

export default useAuthServiceHandler;
