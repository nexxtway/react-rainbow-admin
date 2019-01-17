/* eslint-disable import/no-named-as-default */
import React from 'react';
import {
    Router,
    Switch,
    Redirect,
    Route,
} from 'react-router-dom';
import history from './history';
import Applications from './sections/applications';
import Charts from './sections/charts';
import Components from './sections/components';
import Dashboard from './sections/dashboard';
import Forms from './sections/forms';
import Messages from './sections/messages';
import Pages from './sections/pages';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Redirect from="/" exact to="/dashboard" />
                <Route path="/applications" component={Applications} />
                <Route path="/charts" component={Charts} />
                <Route path="/components" component={Components} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/forms" component={Forms} />
                <Route path="/messages" component={Messages} />
                <Route path="/pages" component={Pages} />
            </Switch>
        </Router>
    );
}
