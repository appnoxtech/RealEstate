const initialState = {
    isLoading: false
}

interface setIsLoading {
    type: 'SET_IS_LOADING_STATE';
    payload: boolean;
}

type action = setIsLoading;
  

const CommonReducer = (action: action, state=initialState) => {
   switch (action.type) {
    case 'SET_IS_LOADING_STATE':{
        return {
            ...state,
            isLoading: action.payload
        }
    }
   
    default:
        return state;
   }
}

export default CommonReducer;