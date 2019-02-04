import reducer from '..';

const STOP_LOADING_ORDERS = 'STOP_LOADING_ORDERS';
const START_LOADING_ORDERS = 'START_LOADING_ORDERS';
const LOAD_USER_DETAILS = 'LOAD_USER_DETAILS';

describe('userDetails reducer', () => {
    describe(`when ${START_LOADING_ORDERS} action`, () => {
        it('should set isLoading to true', () => {
            const initialState = {
                isLoading: false,
            };
            const state = reducer(initialState, { type: START_LOADING_ORDERS });
            expect(state.isLoading).toBe(true);
        });
    });

    describe(`when ${STOP_LOADING_ORDERS} action`, () => {
        const initialState = {
            isLoading: true,
        };
        it('should set isLoading to false', () => {
            const state = reducer(initialState, { type: STOP_LOADING_ORDERS });
            expect(state.isLoading).toBe(false);
        });
    });

    describe(`when ${LOAD_USER_DETAILS} action`, () => {
        it('should set the right loaded data', () => {
            const initialState = {
                orders: [],
                userDetails: {},
                isFirstTime: true,
            };
            const action = {
                type: LOAD_USER_DETAILS,
                orders: [1, 2, 3],
                userDetails: { test: 1 },
            };
            const state = reducer(initialState, action);
            expect(state).toEqual({
                orders: action.orders,
                userDetails: action.userDetails,
                isFirstTime: false,
            });
        });
    });
});
