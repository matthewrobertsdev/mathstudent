import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import subjects_view from './View/SubjectsView';
import Create_View from './View/CreateView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
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