import {Alert} from 'react-native';
import {
  GenerateOTPService,
  VerifyOTPService,
  RegisterService,
  LogoutService,
} from '../../services/auth/authService';
import {useDispatch} from 'react-redux';

import {updateUserDetails} from '../../redux/reducers/userReducer';
import {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import { UpdateIsLoadingState } from '../../redux/reducers/commonReducer';

interface navigationParams {
  SuccessPage: {title: string};
}
interface phoneNumberType {
  phoneNumber: number;
}

const useAuthServiceHandler = () => {
  // Inside useAuthServiceHandler

  const Navigation = useNavigation();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [isWrongOTPModalVisible, setWrongOTPModalVisible] = useState(false);

  const GenerateOtpServiceHandler = async (data: any) => {
    try {
      dispatch(UpdateIsLoadingState(true));
      const res = await GenerateOTPService(data);
      dispatch(UpdateIsLoadingState(false));
      const {result} = res.data;
      Alert.alert('OTP', result?.generateOTP);
      //@ts-ignore
      Navigation.navigate('RegisterWithOTP' as never, {
        phoneNumber: data?.phoneNumber,
        type: 'Login',
      });
    } catch (error: any) {
      dispatch(UpdateIsLoadingState(false))
      const ErrorMsg = error.response.data.error.message;
      if(ErrorMsg === 'user not registered'){
        Alert.alert('', 'User not registered')
      }else{
        Alert.alert(ErrorMsg)
      }
      
      if (ErrorMsg === 'Phone number is not verified') {
        //@ts-ignore
        Navigation.navigate('RegisterWithOTP' as never, {
          phoneNumber: data?.phoneNumber,
          type: 'Register',
        });
      } else {
        // Alert.alert('', 'User Not Register!');
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
        dispatch(updateUserDetails(result));
        //@ts-ignore
        Navigation.navigate('SuccessPage' as never, {title: data?.type});
      }
    } catch (error: any) {
      setWrongOTPModalVisible(true);
    }
  };

  const handleRegisterService = async (data: any) => {
    try {
      const res = await RegisterService(data);
      const {result} = res.data;
      //@ts-ignore
      Navigation.navigate('RegisterWithOTP' as never, {
        phoneNumber: result.phoneNumber,
        type: 'Register',
      });
    } catch (error: any) {
      Alert.alert('Error', error.response.data.error.message);
    }
  };

  const handleLogoutService = async (data: any) => {
    try {
      const res = await LogoutService(data);

      Navigation.navigate('Login' as never);
      const {result} = res.data;
    } catch (error: any) {
      Alert.alert('Error', error.response.data.error.message);
    }
  };

  return {
    GenerateOtpServiceHandler,
    VerifyOTPServiceHandler,
    handleRegisterService,
    handleLogoutService,
    isWrongOTPModalVisible,
    setWrongOTPModalVisible,
  };
};

export default useAuthServiceHandler;
// function SetIsLoadingState(arg0: boolean): any {
//   throw new Error('Function not implemented.');
// }
