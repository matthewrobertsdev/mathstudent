import { combineReducers } from 'redux';
import inputReducer from './InputReducer';
import defaultReducer from './DefaultReducer';
export default combineReducers({
  inputReducer,
  defaultReducer
})