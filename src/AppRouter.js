import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import subjects_view from './View/SubjectsView';
import Teaching_View from './View/TeachingView';

const AppRouter= () => (
    <BrowserRouter>
        <div>
            {/*changes components based on changes to path*/}
            <Switch>
                {/*displays all topics from home*/}
                <Route path="/" exact component={subjects_view}/>
                <Route path="/teachings/:teachingName" component={Teaching_View}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;