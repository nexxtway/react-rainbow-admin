import reducer from '..';

export const STOP_LOADING_USERS = 'STOP_LOADING_USERS';
export const LOAD_USERS_DATA = 'LOAD_USERS_DATA';

describe('users reducer', () => {
    describe(`when ${STOP_LOADING_USERS} action`, () => {
        const initialState = {
            isLoading: true,
        };
        it('should set isLoading to false', () => {
            const state = reducer(initialState, { type: STOP_LOADING_USERS });
            expect(state.isLoading).toBe(false);
        });
    });

    describe(`when ${LOAD_USERS_DATA} action`, () => {
        it('should set the right loaded data', () => {
            const initialState = {
                users: [],
                chartsData: {},
                isFirstTime: true,
            };
            const action = {
                type: LOAD_USERS_DATA,
                users: [1, 2, 3],
                chartsData: { test: 1 },
            };
            const state = reducer(initialState, action);
            expect(state).toEqual({
                users: action.users,
                chartsData: action.chartsData,
                isFirstTime: false,
            });
        });
    });
});
