import {
    resolveTotals,
    resolveChartsData,
    resolveLastMessages,
    resolveNewUsers,
} from '../../services/dashboard';

export const START_LOADING_DASHBOARD = 'START_LOADING_DASHBOARD';
export const STOP_LOADING_DASHBOARD = 'STOP_LOADING_DASHBOARD';
export const LOAD_DASHBOARD_DATA = 'LOAD_DASHBOARD_DATA';

export default function fetchDashboardData() {
    return (dispatch, getState) => {
        if (getState().dashboard.isFirstTime) {
            const promises = [
                resolveTotals(),
                resolveChartsData(),
                resolveLastMessages(),
                resolveNewUsers(),
            ];
            dispatch({ type: START_LOADING_DASHBOARD });
            Promise.all(promises)
                .then((results) => {
                    const [totals, chartsData, lastMessages, newUsers] = results;
                    dispatch({
                        type: LOAD_DASHBOARD_DATA,
                        totals,
                        chartsData,
                        lastMessages,
                        newUsers,
                    });
                    dispatch({ type: STOP_LOADING_DASHBOARD });
                }).catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error(error);
                    dispatch({ type: STOP_LOADING_DASHBOARD });
                });
        }
    };
}
