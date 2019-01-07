import React from 'react';
import { Provider } from 'react-redux';
import Application from 'react-rainbow-components/components/Application';
import store from './redux/store';
import Routes from './routes';
import SectionHeading from './sections/SectionHeading';
import Sidebar from './sections/Sidebar';
import SidebarItem from './sections/Sidebar/sidebarItem';
import AplicatoinIcon from './sections/Sidebar/icons/aplicatoinIcon';
import ChartsIcon from './sections/Sidebar/icons/chartsIcon';
import DashboardIcon from './sections/Sidebar/icons/dashboardIcon';
import FormsIcon from './sections/Sidebar/icons/formsIcon';
import MessageIcon from './sections/Sidebar/icons/messageIcon';
import PagesIcon from './sections/Sidebar/icons/pagesIcon';
import PuzzleIcon from './sections/Sidebar/icons/puzzleIcon';
import { navigateTo } from './history';

const navStyles = {
    position: 'fixed',
    width: 88,
    paddingTop: 68,
};

const routerContainer = {
    paddingLeft: 88,
    paddingTop: 68,
};

export default function App() {
    return (
        <Provider store={store}>
            <Application>
                <SectionHeading />
                <Sidebar style={navStyles}>
                    <SidebarItem icon={<DashboardIcon />} name="Dashboard" label="Dashboard" onClick={() => navigateTo('/dashboard')} />
                    <SidebarItem icon={<PagesIcon />} name="Pages" label="Pages" onClick={() => navigateTo('/pages')} />
                    <SidebarItem icon={<AplicatoinIcon />} name="Applications" label="Applications" onClick={() => navigateTo('/applications')} />
                    <SidebarItem icon={<PuzzleIcon />} name="Components" label="Components" onClick={() => navigateTo('/components')} />
                    <SidebarItem icon={<MessageIcon />} name="Messages" label="Messages" onClick={() => navigateTo('/messages')} />
                    <SidebarItem icon={<FormsIcon />} name="Forms" label="Forms" onClick={() => navigateTo('/forms')} />
                    <SidebarItem icon={<ChartsIcon />} name="Charts" label="Charts" onClick={() => navigateTo('/charts')} />
                </Sidebar>
                <div style={routerContainer}>
                    <Routes />
                </div>
            </Application>
        </Provider>
    );
}
