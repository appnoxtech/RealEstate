const initialState = {

  isLogin: false,
  userDetails: {
  },
};
interface user {
  isLogin: boolean,
  userDetails: any,
}

interface setIsLogin {
  type: 'UPDATE_IS_LOGIN';
  payload: boolean;
}
interface setIsLogout {
  type: 'UPDATE_LOGOUT';
  payload: boolean;
}
interface updateUserDetails {
  type: 'UPDATE_USER_DETAILS',
  payload: user
}

type action = setIsLogin | setIsLogout | updateUserDetails

const UserReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case 'UPDATE_IS_LOGIN': {
      return {
        ...state,
        isLogin: action.payload,
      };
    }
    case 'UPDATE_LOGOUT':  {
      return {
        ...state,
        isLogin: false,
        userDetails: null,
      };
    }
    case 'UPDATE_USER_DETAILS': {
      return {
        ...state,
        userDetails: {...action.payload}
      }
    }
    default:
      return state;
  }
};

export default UserReducer;

export const UpdateIsLoginState = (state: boolean) => {
  return {
    type: 'UPDATE_IS_LOGIN',
    payload: state,
  };
};


export const UpdateLogout = () => {
  return {
    type: 'UPDATE_LOGOUT',
  };
};
export const updateUserDetails = (data: any): updateUserDetails => {
  return {
    type: 'UPDATE_USER_DETAILS',
    payload: data,
  }
}
