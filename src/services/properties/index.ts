import axios from 'axios';
import {URL} from '@env';

export const SearchPropertyService = async (cityName: string) => {
  console.log("-->.>",URL);
  
  const url = `${URL}properties/?search=${cityName}`;
  console.log('url', url);
  return axios.get(url);
};

export const GetPropertyByUserIdService = async (userId: string) => {
  const url = `${URL}PropertyByUsersId/${userId}`;
  console.log('url', url);
  return axios.get(url);
  
}

export const CreatePropertyService = async (data : any) => {
  const url = `${URL}property/create`;
  console.log("url-------->",url);
  console.log("data------->", data);
  
  
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
