import fetchChartsData from '..';
import resolveChartsData from '../../../services/charts';

jest.mock('./../../../services/charts', () => jest.fn(() => Promise.resolve('data')));

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    getState.mockReturnValue({ charts: { isFirstTime: true } });
});

describe('fetchChartsData action', () => {
    it('should distpatch START_LOADING_CHARTS when is first time', () => {
        fetchChartsData()(dispatch, getState);
        expect(dispatch.mock.calls[0][0]).toEqual({ type: 'START_LOADING_CHARTS' });
    });
    it('should dispatch LOAD_CHARTS_DATA and STOP_LOADING_CHARTS when is first time', () => {
        return fetchChartsData()(dispatch, getState)
            .then(() => {
                expect(dispatch.mock.calls[1][0]).toEqual({
                    type: 'LOAD_CHARTS_DATA',
                    payload: 'data',
                });
                expect(dispatch.mock.calls[2][0]).toEqual({ type: 'STOP_LOADING_CHARTS' });
                expect(dispatch).toHaveBeenCalledTimes(3);
            });
    });
    it('shoulf dispatch STOP_LOADING_CHARTS when first time and there is a reject', () => {
        expect.assertions(2);
        const ERROR = 'testing charts action';
        resolveChartsData.mockReset();
        resolveChartsData.mockReturnValue(Promise.reject(ERROR));

        return fetchChartsData()(dispatch, getState)
            .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(2);
                expect(dispatch.mock.calls[1][0]).toEqual({ type: 'STOP_LOADING_CHARTS' });
            });
    });
    it('should not call dispatch when is not first time', () => {
        getState.mockReturnValue({ charts: { isFirstTime: false } });
        expect(fetchChartsData()(dispatch, getState)).toBeNull();
        expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
