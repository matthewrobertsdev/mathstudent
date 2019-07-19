import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import subjects_view from './View/SubjectsView';
import Create_View from './View/CreateView';
import HeaderView from './View/HeaderView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
            <HeaderView/>
            {/*changes components based on changes to path*/}
            <Switch>
                {/*displays all topics from home*/}
                <Route path="/" exact component={subjects_view}/>
                {/*displays UI for creating objects from teaching*/}
                <Route path="/create/:teachingName" component={Create_View}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;