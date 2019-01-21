import fetchFollowersData from '..';
import resolveTotals from '../../../services/followers/resolveTotals';

jest.mock('./../../../services/followers/resolveTotals.js', () => jest.fn(() => Promise.resolve('totals')));
jest.mock('./../../../services/followers/resolveChartsData.js', () => jest.fn(() => Promise.resolve('charts')));

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    getState.mockReturnValue({ followers: { isFirstTime: true } });
});

describe('fetchFollowersData action', () => {
    it('should dispatch START_LOADING_FOLLOWERS when is first time', () => {
        fetchFollowersData()(dispatch, getState);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'START_LOADING_FOLLOWERS' });
    });
    it('should dispatch LOAD_FOLLOWERS_DATA and STOP_LOADING_FOLLOWERS when is first time', () => {
        expect.assertions(3);
        return fetchFollowersData()(dispatch, getState)
            .then(() => {
                expect(dispatch.mock.calls[1][0]).toEqual({
                    type: 'LOAD_FOLLOWERS_DATA',
                    totals: 'totals',
                    chartsData: 'charts',
                });
                expect(dispatch.mock.calls[2][0]).toEqual({ type: 'STOP_LOADING_FOLLOWERS' });
                expect(dispatch).toHaveBeenCalledTimes(3);
            });
    });
    it('should dispatch STOP_LOADING_FOLLOWERS when first time and there is a reject', () => {
        expect.assertions(2);
        const ERROR = 'testing followers page action';
        resolveTotals.mockReset();
        resolveTotals.mockReturnValue(Promise.reject(ERROR));

        return fetchFollowersData()(dispatch, getState)
            .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch.mock.calls[1][0]).toEqual({ type: 'STOP_LOADING_FOLLOWERS' });
            });
    });
    it('should not call dispatch when is not first time', () => {
        getState.mockReturnValue({ followers: { isFirstTime: false } });
        expect(fetchFollowersData()(dispatch, getState)).toBeNull();
        expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
