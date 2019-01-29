import { navigateTo } from '../../../history';

export const APP_TOOGLE_SIDEBAR = 'APP_TOOGLE_SIDEBAR';

export default function fetchSidebarState(path) {
    return (dispatch) => {
        dispatch({ type: APP_TOOGLE_SIDEBAR });
        navigateTo(path);
    };
}
