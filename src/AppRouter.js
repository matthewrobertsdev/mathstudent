import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TeachingsPage from './pages/TeachingsPage'
import VersionPage from './pages/VersionPage';
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/CurriculumPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import TeachingView from './components/teaching-views/TeachingView';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/curriculum" exact component={CurriculumPage}/>
                <Route path="/teachings" exact component={TeachingsPage}/>
                <Route path="/version" exact component={VersionPage}/>
                <Route path="/teachings/:teachingName" exact component={TeachingView}/>
                <Route component={PageNotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;