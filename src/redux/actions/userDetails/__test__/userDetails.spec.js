import fetchUserDetailsData from '..';
import resolveUserOrders from '../../../services/userDetails';

jest.mock('./../../../services/orders/resolveUserOrders.js', () => jest.fn(() => Promise.resolve('orders')));
jest.mock('./../../../services/userDetails/index.js', () => jest.fn(() => Promise.resolve('userDetails')));

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    getState.mockReturnValue({ userDetails: { isFirstTime: true } });
});

describe('fetchUserDetailsData action', () => {
    it('should dispatch START_LOADING_ORDERS when is first time', () => {
        fetchUserDetailsData()(dispatch, getState);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'START_LOADING_ORDERS' });
    });
    it('should dispatch LOAD_USER_DETAILS and STOP_LOADING_ORDERS when is first time', () => {
        expect.assertions(3);
        return fetchUserDetailsData()(dispatch, getState)
            .then(() => {
                expect(dispatch.mock.calls[1][0]).toEqual({
                    type: 'LOAD_USER_DETAILS',
                    orders: 'orders',
                    userDetails: 'userDetails',
                });
                expect(dispatch.mock.calls[2][0]).toEqual({ type: 'STOP_LOADING_ORDERS' });
                expect(dispatch).toHaveBeenCalledTimes(3);
            });
    });
    it('should dispatch STOP_LOADING_ORDERS when first time and there is a reject', () => {
        expect.assertions(2);
        const ERROR = 'testing userDetails action';
        resolveUserOrders.mockReset();
        resolveUserOrders.mockReturnValue(Promise.reject(ERROR));

        return fetchUserDetailsData()(dispatch, getState)
            .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch.mock.calls[1][0]).toEqual({ type: 'STOP_LOADING_ORDERS' });
            });
    });
    it('should not call dispatch when is not first time', () => {
        getState.mockReturnValue({ userDetails: { isFirstTime: false } });
        expect(fetchUserDetailsData()(dispatch, getState)).toBeNull();
        expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
