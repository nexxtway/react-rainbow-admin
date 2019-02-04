/* eslint-disable no-console */
import {
    resolveOrders,
    resolveChartsData,
} from '../../services/orders';

export const START_LOADING_ORDERS = 'START_LOADING_ORDERS';
export const STOP_LOADING_ORDERS = 'STOP_LOADING_ORDERS';
export const LOAD_ORDERS_DATA = 'LOAD_ORDERS_DATA';

export default function fetchOrdersData() {
    return (dispatch, getState) => {
        const { isFirstTime } = getState().orders;
        if (isFirstTime) {
            const promises = [
                resolveOrders(),
                resolveChartsData(),
            ];
            dispatch({ type: START_LOADING_ORDERS });
            return Promise.all(promises)
                .then((results) => {
                    const [orders, chartsData] = results;
                    dispatch({
                        type: LOAD_ORDERS_DATA,
                        orders,
                        chartsData,
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
