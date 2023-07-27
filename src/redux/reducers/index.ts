import { combineReducers } from 'redux';
import UserReducer from './userReducer';
import CommonReducer from './commonReducer';
import FilterReducer from './filterReducer';
import PostReducer from './postReducer';

const appReducer = combineReducers({
  user: UserReducer,
  common: CommonReducer,
  filter: FilterReducer,
  post: PostReducer
});

export const rootReducers = (state: any, action: any) => {
  return appReducer(state, action);
};