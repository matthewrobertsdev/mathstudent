import React from 'react';
import ReactDOM from 'react-dom';
import * as homeWorker from './serviceWorker';
import App from './App'
import './styles/app.css';
import './styles/index.css';

//render App
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

/*
Progressive Web App (PWA) --for users to download update, 
must make a change in home worker file
*/
homeWorker.register();
