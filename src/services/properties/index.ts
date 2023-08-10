import axios from 'axios';
import {URL} from '@env';

export const SearchPropertyService = async (cityName: string) => {
  const url = `${URL}properties/?search=${cityName}`;
  return axios.get(url);
};

export const GetPropertyByUserIdService = async (userId: string) => {
  const url = `${URL}PropertyByUsersId/${userId}`;
  return axios.get(url);
};

export const GetPropertyType = async (propertyType: string) => {
  const url = `${URL}propertyType/${propertyType}`;
  return axios.get(url);
};

export const CreatePropertyService = async (data: any) => {
  const url = `${URL}property/create`;
  return axios.post(url, data, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export const EditUserDetails = async (profileData: any, userDetails: any) => {
  const url = `${URL}user/update/${userDetails?.id}`;
  console.log('url', url);
  console.log('profileData', profileData);
  console.log('token', userDetails?.token);

  return axios.patch(url, profileData, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userDetails?.token}`,
    },
  });
};

export const GetCountryDataService = async (countryValue: any) => {
  const url = `${URL}stateByCountryCode?countryCode=${countryValue}`;
  return axios.get(url);
};

export const GetCityDataService = async (
  countryValue: string,
  stateValue: string,
) => {
  const url = `${URL}cityByStateCode?countryCode=${countryValue}&stateCode=${stateValue}`;

  return axios.get(url);
};


export const DeletePropertyByIdService = async (id: string) => {
  const url = `${URL}property/delete/${id}`;
  return axios.get(url);
};
