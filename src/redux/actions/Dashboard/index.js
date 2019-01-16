import {
    getDashboardTotals,
    getDashboardChartsData,
    getDashboardLastMessages,
    getDashboardNewUsers,
} from '../../services/Dashboard';

export const LOADING_DASHBOARD_DATA = 'LOADING_DASHBOARD_DATA';
export const STOP_LOADING_DASHBOARD_DATA = 'STOP_LOADING_DASHBOARD_DATA';
export const LOAD_DASHBOARD_DATA = 'LOAD_DASHBOARD_DATA';

export function fetchDashboardData() {
    return (dispatch) => {
        dispatch({ type: LOADING_DASHBOARD_DATA });
        const promises = [
            getDashboardTotals(),
            getDashboardChartsData(),
            getDashboardLastMessages(),
            getDashboardNewUsers(),
        ];
        Promise.all(promises)
            .then((dashboardData) => {
                dispatch({ type: STOP_LOADING_DASHBOARD_DATA });

                dispatch({
                    type: LOAD_DASHBOARD_DATA,
                    totals: dashboardData[0],
                    chartsData: dashboardData[1],
                    lastMessages: dashboardData[2],
                    newUsers: dashboardData[3],
                });
            }).catch((error) => {
            // eslint-disable-next-line no-console
                console.error(error);
                dispatch({ type: STOP_LOADING_DASHBOARD_DATA });
            });
    };
}
