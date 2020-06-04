import { combineReducers } from 'redux';
import misc from './DefaultReducer';
import teaching from './TeachingReducer';
export default combineReducers({
  teaching,
  misc
})