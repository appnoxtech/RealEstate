const initialState = {
    isLoading: false,
    hasLaunched: false
}

interface setIsLoading {
    type: 'SET_IS_LOADING_STATE';
    payload: boolean;
}

interface updateAppLaunchedState {
    type: 'UPDATE_APP_LAUNCH_STATE',
    payload: boolean
}

type action = setIsLoading | updateAppLaunchedState;
  

const CommonReducer = (state=initialState, action: action) => {
   switch (action.type) {
    case 'SET_IS_LOADING_STATE':{
        return {
            ...state,
            isLoading: action.payload
        }
    }

    case 'UPDATE_APP_LAUNCH_STATE': {
        return {
            ...state,
            hasLaunched: action.payload
        }
    }
   
    default:
        return state;
   }
}

export default CommonReducer;

export const UpdateAppLaunchedState = (currState: boolean):updateAppLaunchedState => {
   return {
    type: 'UPDATE_APP_LAUNCH_STATE',
    payload: currState
   }
}