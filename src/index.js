import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './manager/AppRouter';
import teachingStore from './model/state/TeachingsStore';
import * as homeWorker from './serviceWorker';
import './view/views-general/app.css';
import './index.css';
//document.body.style.backgroundColor = "rgb(209, 28, 28)";
const store=teachingStore();
const easyMath = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
ReactDOM.render(easyMath, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
homeWorker.register();
