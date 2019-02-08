import { navigateTo } from '../../../history';

export const APP_TOOGLE_SIDEBAR = 'APP_TOOGLE_SIDEBAR';

export default function toggleSidebar() {
    return { type: APP_TOOGLE_SIDEBAR };
}

export function navigate(path) {
    const isMobileViewPort = document.body.offsetWidth < 600;
    return (dispatch) => {
        if (isMobileViewPort) {
            navigateTo(path);
            return dispatch(toggleSidebar());
        }
        return navigateTo(path);
    };
}
