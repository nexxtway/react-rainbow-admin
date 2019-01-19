import fetchDashboardData from '..';
import resolveTotals from '../../../services/dashboard/resolveTotals';

jest.mock('./../../../services/dashboard/resolveTotals.js', () => jest.fn(() => Promise.resolve('totals')));
jest.mock('./../../../services/dashboard/resolveChartsData.js', () => jest.fn(() => Promise.resolve('charts')));
jest.mock('./../../../services/dashboard/resolveLastMessages.js', () => jest.fn(() => Promise.resolve('messages')));
jest.mock('./../../../services/dashboard/resolveNewUsers.js', () => jest.fn(() => Promise.resolve('users')));

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    getState.mockReturnValue({ dashboard: { isFirstTime: true } });
});

describe('fetchDashboardData action', () => {
    it('should dispatch START_LOADING_DASHBOARD when is first time', () => {
        fetchDashboardData()(dispatch, getState);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'START_LOADING_DASHBOARD' });
    });
    it('should dispatch LOAD_DASHBOARD_DATA and STOP_LOADING_DASHBOARD when is first time', () => {
        expect.assertions(3);
        return fetchDashboardData()(dispatch, getState)
            .then(() => {
                expect(dispatch.mock.calls[1][0]).toEqual({
                    type: 'LOAD_DASHBOARD_DATA',
                    totals: 'totals',
                    chartsData: 'charts',
                    lastMessages: 'messages',
                    newUsers: 'users',
                });
                expect(dispatch.mock.calls[2][0]).toEqual({ type: 'STOP_LOADING_DASHBOARD' });
                expect(dispatch).toHaveBeenCalledTimes(3);
            });
    });
    it('should dispatch STOP_LOADING_DASHBOARD when first time and there is a reject', () => {
        expect.assertions(2);
        const ERROR = 'testing dashboard action';
        resolveTotals.mockReset();
        resolveTotals.mockReturnValue(Promise.reject(ERROR));

        return fetchDashboardData()(dispatch, getState)
            .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch.mock.calls[1][0]).toEqual({ type: 'STOP_LOADING_DASHBOARD' });
            });
    });
    it('should not call dispatch when is not first time', () => {
        getState.mockReturnValue({ dashboard: { isFirstTime: false } });
        expect(fetchDashboardData()(dispatch, getState)).toBeNull();
        expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
