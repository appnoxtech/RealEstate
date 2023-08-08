import { EditUserDetails } from "../services/properties";
import { useDispatch } from "react-redux";
import { updateUserDetails } from "../redux/reducers/userReducer";

export function useProfileHooks() {
  const dispatch = useDispatch();
  const updatePofileHandler = async (updateProfile: any, userDetails: any) => {
    try {
      const res = await EditUserDetails(updateProfile, userDetails);
      const {result} = res.data;
      console.log(result);
      
      dispatch(updateUserDetails(result))
    } catch (error: any) {
      const ErrorMsg =  error.response.data.error.errors;
      console.log('Error----->', ErrorMsg);
    }
  };

  return {
    updatePofileHandler,
  };
}
