import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './AppRouter';
import teachingStore from './store/TeachingsStore';
import * as homeWorker from './serviceWorker';
import './styles/app.css';
import './styles/index.css';
const store=teachingStore();
const easyMath = (
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);
ReactDOM.render(easyMath, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
homeWorker.register();
