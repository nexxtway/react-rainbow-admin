import fetchOrdersData from '..';
import resolveOrders from '../../../services/orders/resolveOrders';

jest.mock('./../../../services/orders/resolveOrders.js', () => jest.fn(() => Promise.resolve('orders')));
jest.mock('./../../../services/orders/resolveChartsData.js', () => jest.fn(() => Promise.resolve('chartsData')));

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    getState.mockReturnValue({ orders: { isFirstTime: true } });
});

describe('fetchOrdersData action', () => {
    it('should dispatch LOAD_ORDERS_DATA and STOP_LOADING_ORDERS when is first time', () => {
        expect.assertions(3);
        return fetchOrdersData()(dispatch, getState)
            .then(() => {
                expect(dispatch.mock.calls[0][0]).toEqual({
                    type: 'LOAD_ORDERS_DATA',
                    orders: 'orders',
                    chartsData: 'chartsData',
                });
                expect(dispatch.mock.calls[1][0]).toEqual({ type: 'STOP_LOADING_ORDERS' });
                expect(dispatch).toHaveBeenCalledTimes(2);
            });
    });
    it('should dispatch STOP_LOADING_ORDERS when first time and there is a reject', () => {
        expect.assertions(2);
        const ERROR = 'testing orders action';
        resolveOrders.mockReset();
        resolveOrders.mockReturnValue(Promise.reject(ERROR));

        return fetchOrdersData()(dispatch, getState)
            .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(dispatch.mock.calls[0][0]).toEqual({ type: 'STOP_LOADING_ORDERS' });
            });
    });
    it('should not call dispatch when is not first time', () => {
        getState.mockReturnValue({ orders: { isFirstTime: false } });
        expect(fetchOrdersData()(dispatch, getState)).toBeNull();
        expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
