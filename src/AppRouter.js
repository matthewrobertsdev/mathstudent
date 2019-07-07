import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import topics_view from './TopicsView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Switch>
                <Route path="/" component={topics_view}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;