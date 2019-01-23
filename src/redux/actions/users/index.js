/* eslint-disable no-console */
import {
    resolveUsers,
    resolveChartsData,
} from '../../services/users';

export const START_LOADING_USERS = 'START_LOADING_USERS';
export const STOP_LOADING_USERS = 'STOP_LOADING_USERS';
export const LOAD_CHARTS_USERS = 'LOAD_CHARTS_USERS';

export default function fetchUsersData() {
    return (dispatch, getState) => {
        const { isFirstTime } = getState().users;
        if (isFirstTime) {
            const promises = [
                resolveUsers(),
                resolveChartsData(),
            ];
            dispatch({ type: START_LOADING_USERS });
            return Promise.all(promises)
                .then((results) => {
                    const [users, chartsData] = results;
                    dispatch({
                        type: LOAD_CHARTS_USERS,
                        users,
                        chartsData,
                    });
                    dispatch({ type: STOP_LOADING_USERS });
                }).catch((error) => {
                    console.log(error);
                    dispatch({ type: STOP_LOADING_USERS });
                });
        }
        return null;
    };
}
