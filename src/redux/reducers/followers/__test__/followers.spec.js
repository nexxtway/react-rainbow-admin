import reducer from '..';

const START_LOADING_FOLLOWERS = 'START_LOADING_FOLLOWERS';
const STOP_LOADING_FOLLOWERS = 'STOP_LOADING_FOLLOWERS';
const LOAD_FOLLOWERS_DATA = 'LOAD_FOLLOWERS_DATA';

describe('followers reducer', () => {
    describe(`when ${START_LOADING_FOLLOWERS} action`, () => {
        it('should set isLoading to true', () => {
            const initialState = {
                isLoading: false,
            };
            const state = reducer(initialState, { type: START_LOADING_FOLLOWERS });
            expect(state.isLoading).toBe(true);
        });
    });

    describe(`when ${STOP_LOADING_FOLLOWERS} action`, () => {
        const initialState = {
            isLoading: true,
        };
        it('should set isLoading to false', () => {
            const state = reducer(initialState, { type: STOP_LOADING_FOLLOWERS });
            expect(state.isLoading).toBe(false);
        });
    });

    describe(`when ${LOAD_FOLLOWERS_DATA} action`, () => {
        it('should set the right loaded data', () => {
            const initialState = {
                totals: {},
                chartsData: {},
                isFirstTime: true,
            };
            const action = {
                type: LOAD_FOLLOWERS_DATA,
                totals: { test: 1 },
                chartsData: { test: 1 },
            };
            const state = reducer(initialState, action);
            expect(state).toEqual({
                totals: action.totals,
                chartsData: action.chartsData,
                isFirstTime: false,
            });
        });
    });
});
