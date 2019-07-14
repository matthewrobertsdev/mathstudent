import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import subjects_view from './View/SubjectsView';
import Creation_View from './View/CreationView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
            {/*changes components based on changes to path*/}
            <Switch>
                {/*displays all topics from home*/}
                <Route path="/" exact component={subjects_view}/>
                <Route path="/teachings/:teachingName" component={Creation_View}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;