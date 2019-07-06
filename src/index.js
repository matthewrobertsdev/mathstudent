import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './AppRouter';
import teachingStore from './TeachingsStore';
import './index.css';

const store=teachingStore();
 
const easyMath = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
 
//store.dispatch(func).then(() => {
    ReactDOM.render(easyMath, document.getElementById('root'));
//});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
