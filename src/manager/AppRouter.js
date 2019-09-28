import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubjectsView from '../view/curriculum-views/SubjectsView';
import TeachingView from '../view/teaching-views/TeachingView';
import HeaderView from '../view/views-general/HeaderView';
import PageNotFoundView from '../view/views-general/PageNotFoundView';
import VersionView from '../view/views-general/VersionView';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <HeaderView/>
            <Switch>
                <Route path="/" exact component={SubjectsView}/>
                <Route path="/version" exact component={VersionView}/>
                <Route path="/teaching/:teachingName" exact component={TeachingView}/>
                <Route component={PageNotFoundView}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;