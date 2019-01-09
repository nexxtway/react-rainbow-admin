import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Application from 'react-rainbow-components/components/Application';
import store from './redux/store';
import Routes from './routes';
import SectionHeading from './sections/SectionHeading';
import Sidebar from './sections/Sidebar';
import SidebarItem from './sections/Sidebar/sidebarItem';
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
    paddingTop: 68,
    backgroundColor: '#fff',
    minHeight: '100vh',
    marginTop: 24,
};

const routerContainer = {
    paddingLeft: 88,
    paddingTop: 68,
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
                        <SidebarItem icon={<DashboardIcon />} name="dashboard" label="Dashboard" onClick={() => navigateTo('/dashboard')} />
                        <SidebarItem icon={<PagesIcon />} name="pages" label="Pages" onClick={() => navigateTo('/pages')} />
                        <SidebarItem icon={<ApplicationIcon />} name="applications" label="Applications" onClick={() => navigateTo('/applications')} />
                        <SidebarItem icon={<PuzzleIcon />} name="components" label="Components" onClick={() => navigateTo('/components')} />
                        <SidebarItem icon={<MessageIcon />} name="messages" label="Messages" onClick={() => navigateTo('/messages')} />
                        <SidebarItem icon={<FormsIcon />} name="forms" label="Forms" onClick={() => navigateTo('/forms')} />
                        <SidebarItem icon={<ChartsIcon />} name="charts" label="Charts" onClick={() => navigateTo('/charts')} />
                    </Sidebar>
                    <div style={routerContainer}>
                        <Routes />
                    </div>
                </Application>
            </Provider>
        );
    }
}
