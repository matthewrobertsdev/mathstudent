import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './AppRouter';
import teachingStore from './Model/TeachingsStore';

const store=teachingStore();
 
const easyMath = (
    <Provider store={store}>
        {console.log('started')}
        <AppRouter />
    </Provider>
);
 
//store.dispatch(getTopics()).then(() => {
    ReactDOM.render(easyMath, document.getElementById('root'));
//});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
