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
      Navigation.navigate('Homepage' as never);
      dispatch(ResetNewListing())
    } catch (error: any) {
      const ErrorMsg = error;
     console.log(ErrorMsg);
      
    }
  };

  

  return {
    createPropertyHandler,
  };
};

export default usePropertyHook;

