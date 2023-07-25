import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CommonReducer from './commonReducer';
import FilterReducer from './filterReducer';

const appReducer = combineReducers({
  user: UserReducer,
  common: CommonReducer,
  filter: FilterReducer
});

export const rootReducers = (state: any, action: any) => {
  return appReducer(state, action);
};