import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CommonReducer from './commonReducer';

const appReducer = combineReducers({
  user: UserReducer,
  common: CommonReducer
});

export const rootReducers = (state: any, action: any) => {
  return appReducer(state, action);
};