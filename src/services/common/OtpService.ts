import axios from 'axios';
import {OTPData, generateOTP} from '../../interfaces/auth/authServiceInterface';


export const confirmOTPService = async (data: OTPData) => {
  const url = `${URL}account/generate-otp`;
  return axios.post(url, data);
};

export const generateOTPService = async (data: generateOTP) => {
  console.log('URL', URL);
  const url = `${URL}account/generate-otp`;
  return axios.post(url, data);
};
