import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubjectsView from './View/SubjectsView';
import CreateView from './View/CreateView';
import TeachingView from './View/TeachingView';
import HeaderView from './View/HeaderView';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <HeaderView/>
            {/*changes components based on changes to path*/}
            <Switch>
                {/*displays all topics from home*/}
                <Route path="/" exact component={SubjectsView}/>
                {/*displays UI for creating objects from teaching*/}
                <Route path="/create/:teachingName" component={CreateView}/>
                <Route path="/teaching/:teachingName" component={TeachingView}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;