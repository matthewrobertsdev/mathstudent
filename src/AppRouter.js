import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import subjects_view from './SubjectsView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={subjects_view}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;