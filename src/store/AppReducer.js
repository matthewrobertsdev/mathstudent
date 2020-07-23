
import { combineReducers } from 'redux';
import auth from './AuthReducer'
import teaching from './TeachingReducer'
export default combineReducers({
  auth,
  teaching
})