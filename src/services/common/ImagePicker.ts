import {URL} from '@env';
import axios from 'axios';



export const ImageUploadService = async (data: any) => {
   const url = `${URL}upload/image-book-upload`;

   
   return axios.post(url, data, {
     headers: {
       'Content-Type': 'multipart/form-data',
     },
   });
}