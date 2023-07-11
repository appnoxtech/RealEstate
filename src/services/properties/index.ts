import axios from "axios";
import { URL } from "@env";

export const SearchPropertyService = async(cityName: string) => {
   const url = `${URL}properties/?search=${cityName}`;
   console.log('url', url);
   return axios.get(url)
}