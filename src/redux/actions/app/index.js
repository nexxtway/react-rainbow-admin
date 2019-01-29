import { navigateTo } from '../../../history';

export const APP_TOOGLE_SIDEBAR = 'APP_TOOGLE_SIDEBAR';

export default function toggleSidebar(path) {
    navigateTo(path);
    return { type: APP_TOOGLE_SIDEBAR };
}
