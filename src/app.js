import React from 'react';
import { Provider } from 'react-redux';
import Application from 'react-rainbow-components/components/Application';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import VerticalSection from 'react-rainbow-components/components/VerticalSection';
import VerticalItem from 'react-rainbow-components/components/VerticalItem';
import store from './redux/store';
import Routes from './routes';
import { navigateTo } from './history';

const navStyles = {
    position: 'fixed',
    width: 300,
};

const routerContainer = {
    paddingLeft: 300,
};

export default function App() {
    return (
        <Provider store={store}>
            <Application>
                <VerticalNavigation style={navStyles}>
                    <VerticalSection>
                        <VerticalItem label="Dashboard" onClick={() => navigateTo('/dashboard')} />
                        <VerticalItem label="Pages" onClick={() => navigateTo('/pages')} />
                        <VerticalItem label="Applications" onClick={() => navigateTo('/applications')} />
                        <VerticalItem label="Components" onClick={() => navigateTo('/components')} />
                        <VerticalItem label="Forms" onClick={() => navigateTo('/forms')} />
                        <VerticalItem label="Messages" onClick={() => navigateTo('/messages')} />
                        <VerticalItem label="Charts" onClick={() => navigateTo('/charts')} />
                    </VerticalSection>
                </VerticalNavigation>
                <div style={routerContainer}>
                    <Routes />
                </div>
            </Application>
        </Provider>
    );
}
