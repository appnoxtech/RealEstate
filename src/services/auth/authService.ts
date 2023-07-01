import axios from "axios";

export const GenerateOTPService = async (data: any) => {
    const url = `http://192.168.68.103:5000/api/v1/login`;
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };

  export const VerifyOTPService = async (data: any) => {
    console.log("------------>>>",data)
    const url = `http://192.168.68.103:5000/api/v1/verify-otp`;
    return axios.post(url, data, {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  };


  export const RegisterService = async (data: any) => {
    const url = `http://192.168.68.103:5000/api/v1/user/create`;
    return axios.post(url, data);
  };
  


  
  