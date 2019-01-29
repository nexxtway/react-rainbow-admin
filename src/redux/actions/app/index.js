export const APP_TOOGLE_SIDEBAR = 'APP_TOOGLE_SIDEBAR';

export default function fetchSidebarState() {
    return (dispatch) => {
        dispatch({ type: APP_TOOGLE_SIDEBAR });
    };
}
