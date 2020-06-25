import { createStore, applyMiddleware } from "redux";
import AppReducer from './AppReducer';
import thunk from 'redux-thunk';
const mainStore=() => {
    return createStore(AppReducer, applyMiddleware(thunk));
};
export default mainStore;