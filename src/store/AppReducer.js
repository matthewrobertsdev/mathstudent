import { combineReducers } from 'redux';
import input from './InputReducer';
import misc from './DefaultReducer';
import teacher from './TeacherReducer';
export default combineReducers({
  input,
  teacher,
  misc
})