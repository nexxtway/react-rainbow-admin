import { APP_TOOGLE_SIDEBAR } from '../../actions/app';

const initialState = {
    isSidebarHidden: true,
};

function toogleSidebar(state) {
    return { isSidebarHidden: !state.isSidebarHidden };
}

export default function dashboardData(state = initialState, action) {
    switch (action.type) {
        case APP_TOOGLE_SIDEBAR:
            return toogleSidebar(state);
        default:
            return state;
    }
}
