/* eslint-disable no-console */
import { resolveUserOrders } from '../../services/orders';
import resolveUserDetails from '../../services/userDetails';

export const STOP_LOADING_ORDERS = 'STOP_LOADING_ORDERS';
export const LOAD_USER_DETAILS = 'LOAD_USER_DETAILS';

export default function fetchUserDetailsData(uid) {
    return (dispatch, getState) => {
        const { isFirstTime } = getState().userDetails;
        if (isFirstTime) {
            const promises = [
                resolveUserOrders(uid),
                resolveUserDetails(uid),
            ];
            return Promise.all(promises)
                .then((results) => {
                    const [orders, userDetails] = results;
                    dispatch({
                        type: LOAD_USER_DETAILS,
                        orders,
                        userDetails,
                    });
                    dispatch({ type: STOP_LOADING_ORDERS });
                }).catch((error) => {
                    console.log(error);
                    dispatch({ type: STOP_LOADING_ORDERS });
                });
        }
        return null;
    };
}
