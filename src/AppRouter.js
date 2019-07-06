import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TopicsView from './TopicsView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={TopicsView}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;