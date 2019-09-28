import { createStore, applyMiddleware } from "redux";
import AppReducer from './AppReducer';
import thunk from 'redux-thunk';
const teachingStore=() => {
    return createStore(AppReducer, applyMiddleware(thunk));
};
export default teachingStore;