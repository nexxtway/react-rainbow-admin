import dashboardData from '..';

const START_LOADING_DASHBOARD = 'START_LOADING_DASHBOARD';
const STOP_LOADING_DASHBOARD = 'STOP_LOADING_DASHBOARD';
const LOAD_DASHBOARD_DATA = 'LOAD_DASHBOARD_DATA';

describe('dashboardData reducer', () => {
    describe(`when ${START_LOADING_DASHBOARD} action`, () => {
        it('should set isLoading to true', () => {
            const initialState = {
                isLoading: false,
            };
            const state = dashboardData(initialState, { type: START_LOADING_DASHBOARD });
            expect(state.isLoading).toBe(true);
        });
    });

    describe(`when ${STOP_LOADING_DASHBOARD} action`, () => {
        const initialState = {
            isLoading: true,
        };
        it('should set isLoading to false', () => {
            const state = dashboardData(initialState, { type: STOP_LOADING_DASHBOARD });
            expect(state.isLoading).toBe(false);
        });
    });

    describe(`when ${LOAD_DASHBOARD_DATA} action`, () => {
        it('should set the right loaded data', () => {
            const initialState = {
                totals: {},
                chartsData: {},
                lastMessages: [],
                newUsers: [],
                isFirstTime: true,
            };
            const action = {
                type: LOAD_DASHBOARD_DATA,
                totals: { test: 1 },
                chartsData: { test: 1 },
                lastMessages: [1, 2, 3],
                newUsers: [1, 2, 3],
            };
            const state = dashboardData(initialState, action);
            expect(state).toEqual({
                totals: action.totals,
                chartsData: action.chartsData,
                lastMessages: action.lastMessages,
                newUsers: action.newUsers,
                isFirstTime: false,
            });
        });
    });
});
