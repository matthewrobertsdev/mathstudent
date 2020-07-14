//react and react-router-dom
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
//components
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop'
//pages
import VersionPage from './pages/VersionPage'
import HomePage from './pages/HomePage'
import CurriculumPage from './pages/CurriculumPage'
import PageNotFoundPage from './pages/PageNotFoundPage'
import EnterProblemsPage from './pages/EnterProblemsPage'
import GenerateProblemsPage from './pages/GenerateProblemsPage'
import TeachingPage from './pages/TeachingPage'
import SolvePage from './pages/SolvePage'
import MethodPage from './pages/MethodPage'
import RecentsPage from './pages/RecentsPage'

//router for entire app
const AppRouter = () => (
  <BrowserRouter>
    {/* links */}
    <Header />
    {/* scrolls to top on navigation */}
    <ScrollToTop />
    <Switch>
      {/* home page */}
      <Route path="/" exact component={HomePage} />
      {/* all the curriculum */}
      <Route path="/curriculum" exact component={CurriculumPage} />
      {/* let's user know what version is chached by the service worker */}
      <Route path="/version" exact component={VersionPage} />
      {/* for solving a problem */}
      <Route path='/solve/:teachingName/:method/:parameters' exact component={SolvePage} />
      {/* enter a problem for this topic */}
      <Route path="/EnterProblems/:teachingName" exact component={EnterProblemsPage} />
      {/* genrate problems for this topic */}
      <Route path="/GenerateProblems/:teachingName" exact component={GenerateProblemsPage} />
      {/* about topic, teaching table of contents, and problem links for this topic */}
      <Route path="/teachings/:teachingName" exact component={TeachingPage} />
      {/* teaching about a method */}
      <Route path="/teachings/:teachingName/:method" exact component={MethodPage} />
      {/* or solving a problem, again */}
      <Route path='/teachings/:teachingName/:method/:parameters' exact component={SolvePage} />
      {/* history from Math Teacher displayed */}
      <Route path='/recents' exact component={RecentsPage} />
      {/* if you don't match the route */}
      <Route component={PageNotFoundPage} />
    </Switch>
  </BrowserRouter>
);
export default AppRouter;