const initialState = {
  isLogin: false,
  userDetails: {},
};

interface setIsLogin {
  type: 'UPDATE_IS_LOGIN';
  payload: boolean;
}

type action = setIsLogin;

const UserReducer = (state = initialState, action: action) => {
  switch (action.type) {
    case 'UPDATE_IS_LOGIN': {
      return {
        ...state,
        isLogin: action.payload,
      };
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
