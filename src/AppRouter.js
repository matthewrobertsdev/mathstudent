import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import VersionPage from './pages/VersionPage'
import HomePage from './pages/HomePage'
import CurriculumPage from './pages/CurriculumPage'
import PageNotFoundPage from './pages/PageNotFoundPage'
import EnterProblemsPage from './pages/EnterProblemsPage'
import GenerateProblemsPage from './pages/GenerateProblemsPage'
import TeachingPage from './pages/TeachingPage'
import SolvePage from './pages/SolvePage'
import TeachPage from './pages/TeachPage'
import AboutPage from './pages/AboutPage'
import ContentsPage from './pages/ContentsPage'
import ScrollToTop from './components/ScrollToTop'


const AppRouter= () => (
    <BrowserRouter>
        <div>
            <Header/>
            <ScrollToTop/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/curriculum" exact component={CurriculumPage}/>
                {/*<Route path="/teachings" exact component={TeachingsPage}/>*/}
                {/*<Route path="/textbook" exact component={ContentsPage}/>*/}
                <Route path="/textbook/:teachingName" exact component={AboutPage}/>
                <Route path="/version" exact component={VersionPage}/>
                <Route path='/solve/:teachingName/:method/:parameters' exact component={SolvePage}/>
                <Route path="/EnterProblems/:teachingName" exact component={EnterProblemsPage}/>
                <Route path="/GenerateProblems/:teachingName" exact component={GenerateProblemsPage}/>
                <Route path="/teachings/:teachingName" exact component={TeachingPage}/>
                <Route component={PageNotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;