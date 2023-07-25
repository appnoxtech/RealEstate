import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {
  GenerateOTPService,
  VerifyOTPService,
  RegisterService,
} from '../../services/auth/authService';
import { useDispatch } from 'react-redux';
import { UpdateIsLoginState } from '../../redux/reducers/userReducer';

const useAuthServiceHandler = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const GenerateOtpServiceHandler = async (data: any) => {
    try {
      const res = await GenerateOTPService(data);

      const {result} = res.data;

      Alert.alert('OTP', result.generateOTP);

      Navigation.navigate('RegisterWithOTP', { phoneNumber: data.phoneNumber } );

      
    } catch (error: any) {
      console.log('error', error.response.data.error.message);
      Alert.alert('', 'User Not Register!');
      Navigation.navigate('Register' as never);
    }
  };

  const VerifyOTPServiceHandler = async (data: any) => {
    try {
      const res = await VerifyOTPService(data);
      const {result} = res.data;
      if (typeof result === 'string') {
        Navigation.navigate('Register' as never);
      } else {
        dispatch(UpdateIsLoginState(true));
        Navigation.navigate('HomePage' as never);
      }
    } catch (error: any) {
       console.log('error');
       
    }
  };

  const handleRegisterService = async (data: any) => {
    try {
      const res = await RegisterService(data);
      dispatch(SetIsLoadingState(true));
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
function SetIsLoadingState(arg0: boolean): any {
  throw new Error('Function not implemented.');
}

