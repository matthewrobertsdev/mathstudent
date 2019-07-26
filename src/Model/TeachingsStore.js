import { createStore, applyMiddleware } from "redux";
import AppReducer from './AppReducer';
import thunk from 'redux-thunk';
//To hold the Teachings and Topics
const teachingStore=() => {
    return createStore(AppReducer, applyMiddleware(thunk));
};
export default teachingStore;