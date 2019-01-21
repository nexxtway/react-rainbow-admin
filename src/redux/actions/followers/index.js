import {
    resolveTotals,
    resolveChartsData,
} from '../../services/followers';

export const START_LOADING_FOLLOWERS = 'START_LOADING_FOLLOWERS';
export const STOP_LOADING_FOLLOWERS = 'STOP_LOADING_FOLLOWERS';
export const LOAD_FOLLOWERS_DATA = 'LOAD_FOLLOWERS_DATA';

export default function fetchFollowersData() {
    return (dispatch, getState) => {
        const { isFirstTime } = getState().followers;
        if (isFirstTime) {
            const promises = [
                resolveTotals(),
                resolveChartsData(),
            ];
            dispatch({ type: START_LOADING_FOLLOWERS });
            return Promise.all(promises)
                .then((results) => {
                    const [totals, chartsData] = results;
                    dispatch({
                        type: LOAD_FOLLOWERS_DATA,
                        totals,
                        chartsData,
                    });
                    dispatch({ type: STOP_LOADING_FOLLOWERS });
                }).catch((error) => {
                    // eslint-disable-next-line no-console
                    console.error(error);
                    dispatch({ type: STOP_LOADING_FOLLOWERS });
                });
        }
        return null;
    };
}
