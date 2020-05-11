import React from 'react';
import {Provider} from 'react-redux';
import AppRouter from './AppRouter';
import teachingStore from './store/TeachingsStore';
//get the store, pass it to the provider and make the App Router
//App Router handles switching between links and urls
export default function App(){
    return (
    <Provider store={teachingStore()}>
        <AppRouter/>
    </Provider>
    );
}