import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TeachingsPage from '../pages/TeachingsPage'
import TeachingView from '../view/teaching-views/TeachingView';
import Header from '../view/views-general/Header';
import PageNotFoundPage from '../pages/PageNotFoundPage';
import VersionView from '../view/views-general/VersionView';
import HomePage from '../pages/HomePage';
import CurriculumPage from '../pages/CurriculumPage';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/curriculum" exact component={CurriculumPage}/>
                <Route path="/teachings" exact component={TeachingsPage}/>
                <Route path="/version" exact component={VersionView}/>
                <Route path="/teachings/:teachingName" exact component={TeachingView}/>
                <Route component={PageNotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;