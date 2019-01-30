import { navigateTo } from '../../../history';

export const APP_TOOGLE_SIDEBAR = 'APP_TOOGLE_SIDEBAR';

export default function toggleSidebar() {
    return { type: APP_TOOGLE_SIDEBAR };
}

export function navigate(path) {
    navigateTo(path);
    return toggleSidebar();
}
