import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CurriculumView from '../view/curriculum-views/CurriculumView';
import TeachingView from '../view/teaching-views/TeachingView';
import Header from '../view/views-general/Header';
import PageNotFoundView from '../view/views-general/PageNotFoundView';
import VersionView from '../view/views-general/VersionView';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={CurriculumView}/>
                <Route path="/version" exact component={VersionView}/>
                <Route path="/teaching/:teachingName" exact component={TeachingView}/>
                <Route component={PageNotFoundView}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;