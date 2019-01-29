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
import Dashboard from './sections/dashboard';
import Pages from './sections/pages';
import Users from './sections/pages/users';
import Orders from './sections/pages/orders';
import Followers from './sections/pages/followers';
import Forms from './sections/forms';
import ComingSoon from './sections/comingSoon';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Redirect from="/" exact to="/dashboard" />
                <Route path="/applications" component={Applications} />
                <Route path="/charts" component={Charts} />
                <Route path="/components" component={ComingSoon} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/forms" component={Forms} />
                <Route path="/messages" component={ComingSoon} />
                <Route path="/pages" exact component={Pages} />
                <Route path="/pages/users" component={Users} />
                <Route path="/pages/orders" component={Orders} />
                <Route path="/pages/followers" component={Followers} />
                <Route path="/comingSoon" component={ComingSoon} />
            </Switch>
        </Router>
    );
}
