import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from 'react-rainbow-components/components/Application';
import Sidebar from 'react-rainbow-components/components/Sidebar';
import SidebarItem from 'react-rainbow-components/components/SidebarItem';
import store from './redux/store';
import Routes from './routes';
import SectionHeading from './components/SectionHeading';
import {
    ApplicationIcon,
    ChartsIcon,
    DashboardIcon,
    FormsIcon,
    MessageIcon,
    PagesIcon,
    PuzzleIcon,
} from './components/icons';
import history, { navigateTo } from './history';

const navStyles = {
    position: 'fixed',
    width: 88,
    paddingTop: 82,
    backgroundColor: '#fff',
    height: '100%',
    overflowY: 'scroll',
};

const routerContainer = {
    paddingLeft: 88,
    paddingTop: 68,
};

const sidebarItem = {
    marginBottom: 16,
};

function resolveCurrentUrl() {
    return history.location.pathname.split('/')[1] || 'dashboard';
}

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: resolveCurrentUrl(),
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;
        return (
            <Provider store={store}>
                <Application>
                    <SectionHeading />
                    <Sidebar
                        selectedItem={selectedItem}
                        onSelect={this.handleOnSelect}
                        style={navStyles}>
                        <SidebarItem
                            style={sidebarItem}
                            icon={<DashboardIcon />}
                            name="dashboard"
                            label="Dashboard"
                            onClick={() => navigateTo('/dashboard')} />
                        <SidebarItem
                            className="react-rainbow-admin_sidebar-item"
                            icon={<PagesIcon />}
                            name="pages"
                            label="Pages"
                            onClick={() => navigateTo('/pages')} />
                        <SidebarItem
                            className="react-rainbow-admin_sidebar-item"
                            icon={<ApplicationIcon />}
                            name="applications"
                            label="Applications"
                            onClick={() => navigateTo('/applications')} />
                        <SidebarItem
                            className="react-rainbow-admin_sidebar-item"
                            icon={<PuzzleIcon />}
                            name="components"
                            label="Components"
                            onClick={() => navigateTo('/components')} />
                        <SidebarItem
                            className="react-rainbow-admin_sidebar-item"
                            icon={<MessageIcon />}
                            name="messages"
                            label="Messages"
                            onClick={() => navigateTo('/messages')} />
                        <SidebarItem
                            className="react-rainbow-admin_sidebar-item"
                            icon={<FormsIcon />}
                            name="forms"
                            label="Forms"
                            onClick={() => navigateTo('/forms')} />
                        <SidebarItem
                            className="react-rainbow-admin_sidebar-item"
                            icon={<ChartsIcon />}
                            name="charts"
                            label="Charts"
                            onClick={() => navigateTo('/charts')} />
                    </Sidebar>
                    <div style={routerContainer}>
                        <Routes />
                    </div>
                </Application>
            </Provider>
        );
    }
}
