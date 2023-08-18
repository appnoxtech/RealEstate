import {useNavigation} from '@react-navigation/native';
import {Alert} from 'react-native';
import {useDispatch} from 'react-redux';
import { ResetNewListing, UpdateNewListing } from '../redux/reducers/postReducer';
import { CreatePropertyService } from '../services/properties';

const usePropertyHook = () => {
  const Navigation = useNavigation();
  const dispatch = useDispatch();

  const createPropertyHandler = async (data: any) => {
    try {
      const res = await CreatePropertyService(data);
      Navigation.navigate('PropertyListings' as never);
      dispatch(ResetNewListing())
    } catch (error: any) {
      const ErrorMsg = error.response.message;
      console.log("Error",ErrorMsg);
      
    }
  };

  

  return {
    createPropertyHandler,
  };
};

export default usePropertyHook;

