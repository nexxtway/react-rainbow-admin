import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Application from 'react-rainbow-components/components/Application';
import Sidebar from 'react-rainbow-components/components/Sidebar';
import SidebarItem from 'react-rainbow-components/components/SidebarItem';
import Routes from '../routes';
import SectionHeading from '../components/SectionHeading';
import {
    ApplicationIcon,
    ChartsIcon,
    DashboardIcon,
    FormsIcon,
    MessageIcon,
    PagesIcon,
    PuzzleIcon,
} from '../components/icons';
import history from '../history';
import fetchSidebarState from '../redux/actions/app';
import './styles.css';

function resolveCurrentUrl() {
    return history.location.pathname.split('/')[1] || 'dashboard';
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: resolveCurrentUrl(),
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    getSidebarClassNames() {
        const { isSidebarVisible } = this.props;
        return classnames('react-rainbow-admin-app_sidebar', {
            'react-rainbow-admin-app_sidebar--hidden': isSidebarVisible,
        });
    }

    getRouterContainerClassNames() {
        const { isSidebarVisible } = this.props;
        return classnames('react-rainbow-admin-app_router-container', {
            'react-rainbow-admin-app_router-container--sidebar-hidden': isSidebarVisible,
        });
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;
        const { fetchSidebarState } = this.props;
        return (
            <Application>
                <SectionHeading onToogleSidebar={fetchSidebarState} />
                <Sidebar
                    className={this.getSidebarClassNames()}
                    selectedItem={selectedItem}
                    onSelect={this.handleOnSelect}>
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<DashboardIcon />}
                        name="dashboard"
                        label="Dashboard"
                        onClick={() => fetchSidebarState('/dashboard')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<PagesIcon />}
                        name="pages"
                        label="Pages"
                        onClick={() => fetchSidebarState('/pages')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<ApplicationIcon />}
                        name="applications"
                        label="Applications"
                        onClick={() => fetchSidebarState('/applications')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<PuzzleIcon />}
                        name="components"
                        label="Components"
                        onClick={() => fetchSidebarState('/components')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<MessageIcon />}
                        name="messages"
                        label="Messages"
                        onClick={() => fetchSidebarState('/messages')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<FormsIcon />}
                        name="forms"
                        label="Forms"
                        onClick={() => fetchSidebarState('/forms')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<ChartsIcon />}
                        name="charts"
                        label="Charts"
                        onClick={() => fetchSidebarState('/charts')} />
                </Sidebar>
                <div className={this.getRouterContainerClassNames()}>
                    <Routes />
                </div>
            </Application>
        );
    }
}

App.propTypes = {
    fetchSidebarState: PropTypes.func.isRequired,
    isSidebarVisible: PropTypes.bool.isRequired,
};

function stateToProps(state) {
    return state.app;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        fetchSidebarState,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(App);
