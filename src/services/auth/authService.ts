import axios from 'axios';
import {URL} from '@env';

export const GenerateOTPService = async (data: any) => {
  const url = `${URL}login`;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const VerifyOTPService = async (data: any) => {
  console.log('------------>>>', data);
  const url = `${URL}verify-otp`;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const RegisterService = async (data: any) => {
  const url = `${URL}user/create`;
  console.log('url', url);
  console.log('data', data);
  return axios.post(url, data);
};

export const LogoutService = async (data: any) => {
  const url = `${URL}user/logout`;
  return axios.post(url, data);
};
