import axios from 'axios';
import {URL} from '@env';

export const GenerateOTPService = async (data: any) => {
  const url = `${URL}login`;
  console.log('url', url);
  
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const VerifyOTPService = async (data: any) => {
  
  const url = `${URL}verify-otp`;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const RegisterService = async (data: any) => {
  const url = `${URL}user/create`;
  return axios.post(url, data);
};

export const LogoutService = async (data: any) => {
  const url = `${URL}user/logout`;
  return axios.post(url, data);
};
