import { EditUserDetails } from "../services/properties";
import { useDispatch, useSelector } from "react-redux";
import { updateUserDetails } from "../redux/reducers/userReducer";

export function useProfileHooks() {
  const dispatch = useDispatch();
  const {userDetails} = useSelector((state: any) => state?.user);

  const updatePofileHandler = async (updateProfile: any) => {
    try {
      const res = await EditUserDetails(updateProfile, userDetails);
      const {result} = res.data;
      console.log('result', result);
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
