import { APP_TOOGLE_SIDEBAR } from '../../actions/app';

const initialState = {
    isSidebarVisible: true,
};

function toogleSidebar(state) {
    return { isSidebarVisible: !state.isSidebarVisible };
}

export default function dashboardData(state = initialState, action) {
    switch (action.type) {
        case APP_TOOGLE_SIDEBAR:
            return toogleSidebar(state);
        default:
            return state;
    }
}
