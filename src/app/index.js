import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Application from 'react-rainbow-components/components/Application';
import Sidebar from 'react-rainbow-components/components/Sidebar';
import SidebarItem from 'react-rainbow-components/components/SidebarItem';
import ButtonIcon from 'react-rainbow-components/components/ButtonIcon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
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
import toogleSidebar, { navigate } from '../redux/actions/app';
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

    componentDidUpdate() {
        const { isSidebarHidden } = this.props;
        const isSidebarOpen = !isSidebarHidden;
        const isMobileViewPort = document.body.offsetWidth < 600;
        document.body.style.overflow = 'auto';
        if (isSidebarOpen && isMobileViewPort) {
            document.body.style.overflow = 'hidden';
        }
    }

    getSidebarClassNames() {
        const { isSidebarHidden } = this.props;
        return classnames('react-rainbow-admin-app_sidebar', {
            'react-rainbow-admin-app_sidebar--hidden': isSidebarHidden,
        });
    }

    getBackdropClassNames() {
        const { isSidebarHidden } = this.props;
        return classnames('react-rainbow-admin-app_backdrop', {
            'react-rainbow-admin-app_backdrop--sidebar-hidden': isSidebarHidden,
        });
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { selectedItem } = this.state;
        const { toogleSidebar, navigate } = this.props;
        return (
            <Application>
                <button type="button" onClick={toogleSidebar} className={this.getBackdropClassNames()} />
                <SectionHeading onToogleSidebar={toogleSidebar} />
                <Sidebar
                    className={this.getSidebarClassNames()}
                    selectedItem={selectedItem}
                    onSelect={this.handleOnSelect}>
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<DashboardIcon />}
                        name="dashboard"
                        label="Dashboard"
                        onClick={() => navigate('/dashboard')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<PagesIcon />}
                        name="pages"
                        label="Pages"
                        onClick={() => navigate('/pages')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<ApplicationIcon />}
                        name="applications"
                        label="Applications"
                        onClick={() => navigate('/applications')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<PuzzleIcon />}
                        name="components"
                        label="Components"
                        onClick={() => navigate('/components')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<MessageIcon />}
                        name="messages"
                        label="Messages"
                        onClick={() => navigate('/messages')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<FormsIcon />}
                        name="forms"
                        label="Forms"
                        onClick={() => navigate('/forms')} />
                    <SidebarItem
                        className="react-rainbow-admin-app_sidebar-item"
                        icon={<ChartsIcon />}
                        name="charts"
                        label="Charts"
                        onClick={() => navigate('/charts')} />
                    <div className="react-rainbow-admin-app_sidebar-back-button-container">
                        <ButtonIcon
                            onClick={toogleSidebar}
                            size="large"
                            icon={
                                <FontAwesomeIcon className="react-rainbow-admin-app_sidebar-backb-button-icon" icon={faArrowLeft} />
                            } />
                    </div>
                </Sidebar>
                <div className="react-rainbow-admin-app_router-container">
                    <Routes />
                </div>
            </Application>
        );
    }
}

App.propTypes = {
    toogleSidebar: PropTypes.func.isRequired,
    navigate: PropTypes.func.isRequired,
    isSidebarHidden: PropTypes.bool.isRequired,
};

function stateToProps(state) {
    return state.app;
}

function dispatchToProps(dispatch) {
    return bindActionCreators({
        toogleSidebar,
        navigate,
    }, dispatch);
}

export default connect(stateToProps, dispatchToProps)(App);
