import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SubjectsView from '../view/curriculum-views/SubjectsView';
import TeachingView from '../view/teaching-views/TeachingView';
import HeaderView from '../view/views-general/HeaderView';
import PageNotFoundView from '../view/views-general/PageNotFoundView'
const AppRouter= () => (
    <BrowserRouter>
        <div>
            <HeaderView/>
            {/*changes components based on changes to path*/}
            <Switch>
                {/*displays all topics from home*/}
                <Route path="/" exact component={SubjectsView}/>
                <Route path="/teaching/:teachingName" exact component={TeachingView}/>
                <Route component={PageNotFoundView}/>
                {/*displays UI for creating objects from teaching*/}

            </Switch>
        </div>
    </BrowserRouter>
);
export default AppRouter;

/* <Route path="/teaching/:teachingName" component={TeachingView}/>
<Route path="/create/:teachingName" component={CreateView}/> */