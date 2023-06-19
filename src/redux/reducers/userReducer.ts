const initialState = {
    isLogin: false,
    userDetails: {},
}

interface setIsLogin {
   type: 'UPDATE_IS_LOGIN',
   payload: boolean
}

type action = setIsLogin;

const UserReducer = (action: action, state = initialState) => {
   switch (action.type) {
    case 'UPDATE_IS_LOGIN':{
        return {
            ...state,
            isLogin: action.payload
        }
    }
   
    default:
        return state;
   }
}

export default UserReducer