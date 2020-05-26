import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import TeachingsPage from './pages/TeachingsPage'
import VersionPage from './pages/VersionPage';
import HomePage from './pages/HomePage';
import CurriculumPage from './pages/CurriculumPage';
import PageNotFoundPage from './pages/PageNotFoundPage';
import EnterProblemsPage from './pages/EnterProblemsPage';
import TeachingView from './pages/TeachingPage';
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/curriculum" exact component={CurriculumPage}/>
                <Route path="/teachings" exact component={TeachingsPage}/>
                <Route path="/version" exact component={VersionPage}/>
                <Route path="/EnterProblems/:teachingName" exact component={EnterProblemsPage}/>
                <Route path="/teachings/:teachingName" exact component={TeachingView}/>
                <Route path="/teach/:teachingName" exact component={PageNotFoundPage}/>
                <Route component={PageNotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;