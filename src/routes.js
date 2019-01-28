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
import Components from './sections/components';
import Pages from './sections/pages';
import Users from './sections/pages/users';
import UserDetail from './sections/pages/userDetail';
import Orders from './sections/pages/orders';
import Followers from './sections/pages/followers';
import ComingSoon from './sections/comingSoon';

export default function Routes() {
    return (
        <Router history={history}>
            <Switch>
                <Redirect from="/" exact to="/dashboard" />
                <Route path="/applications" component={Applications} />
                <Route path="/charts" component={Charts} />
                <Route path="/components" component={Components} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/forms" component={ComingSoon} />
                <Route path="/messages" component={ComingSoon} />
                <Route path="/pages" exact component={Pages} />
                <Route path="/pages/users" exact component={Users} />
                <Route path="/pages/users/detail" exact component={UserDetail} />
                <Route path="/pages/orders" component={Orders} />
                <Route path="/pages/followers" component={Followers} />
                <Route path="/comingSoon" component={ComingSoon} />
            </Switch>
        </Router>
    );
}
