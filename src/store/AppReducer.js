import { combineReducers } from 'redux';
import input from './InputReducer';
import misc from './DefaultReducer';
import teaching from './TeachingReducer';
export default combineReducers({
  input,
  teaching,
  misc
})