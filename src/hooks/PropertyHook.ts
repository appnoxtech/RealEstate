import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import { UpdateNewListing } from '../redux/reducers/postReducer';
import { CreatePropertyService } from '../services/properties';

const usePropertyHook = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const createPropertyHandler = async (data: any) => {
    try {
      const res = await CreatePropertyService(data);
  
      Alert.alert("Property posted successfully");
      
      
    } catch (error: any) {
      const ErrorMsg = error.response.data;
      console.log("Error",ErrorMsg);
      
    }
  };

  

  return {
    createPropertyHandler,
  };
};

export default usePropertyHook;

