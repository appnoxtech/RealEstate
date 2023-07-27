import axios from 'axios';
import {URL} from '@env';

export const SearchPropertyService = async (cityName: string) => {
  const url = `${URL}properties/?search=${cityName}`;
  console.log('url', url);
  return axios.get(url);
};
export const CreatePropertyService = async (data : any) => {
  const url = `${URL}property/create`;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
}
