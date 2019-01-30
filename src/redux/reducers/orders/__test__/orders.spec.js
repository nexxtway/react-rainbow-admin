import reducer from '..';

export const STOP_LOADING_ORDERS = 'STOP_LOADING_ORDERS';
export const LOAD_ORDERS_DATA = 'LOAD_ORDERS_DATA';

describe('orders reducer', () => {
    describe(`when ${STOP_LOADING_ORDERS} action`, () => {
        const initialState = {
            isLoading: true,
        };
        it('should set isLoading to false', () => {
            const state = reducer(initialState, { type: STOP_LOADING_ORDERS });
            expect(state.isLoading).toBe(false);
        });
    });

    describe(`when ${LOAD_ORDERS_DATA} action`, () => {
        it('should set the right loaded data', () => {
            const initialState = {
                orders: [],
                chartsData: {},
                isFirstTime: true,
            };
            const action = {
                type: LOAD_ORDERS_DATA,
                orders: [1, 2, 3],
                chartsData: { test: 1 },
            };
            const state = reducer(initialState, action);
            expect(state).toEqual({
                orders: action.orders,
                chartsData: action.chartsData,
                isFirstTime: false,
            });
        });
    });
});
