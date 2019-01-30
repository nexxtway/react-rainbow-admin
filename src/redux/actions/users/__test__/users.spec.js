import fetchUsersData from '..';
import resolveUsers from '../../../services/users/resolveUsers';

jest.mock('./../../../services/users/resolveUsers.js', () => jest.fn(() => Promise.resolve('users')));
jest.mock('./../../../services/users/resolveChartsData.js', () => jest.fn(() => Promise.resolve('chartsData')));

const dispatch = jest.fn();
const getState = jest.fn();

beforeEach(() => {
    dispatch.mockReset();
    getState.mockReset();
    getState.mockReturnValue({ users: { isFirstTime: true } });
});

describe('fetchUsersData action', () => {
    it('should dispatch LOAD_USERS_DATA and STOP_LOADING_USERS when is first time', () => {
        expect.assertions(3);
        return fetchUsersData()(dispatch, getState)
            .then(() => {
                expect(dispatch.mock.calls[0][0]).toEqual({
                    type: 'LOAD_USERS_DATA',
                    users: 'users',
                    chartsData: 'chartsData',
                });
                expect(dispatch.mock.calls[1][0]).toEqual({ type: 'STOP_LOADING_USERS' });
                expect(dispatch).toHaveBeenCalledTimes(2);
            });
    });
    it('should dispatch STOP_LOADING_USERS when first time and there is a reject', () => {
        expect.assertions(2);
        const ERROR = 'testing users action';
        resolveUsers.mockReset();
        resolveUsers.mockReturnValue(Promise.reject(ERROR));

        return fetchUsersData()(dispatch, getState)
            .then(() => {
                expect(dispatch).toHaveBeenCalledTimes(1);
                expect(dispatch.mock.calls[0][0]).toEqual({ type: 'STOP_LOADING_USERS' });
            });
    });
    it('should not call dispatch when is not first time', () => {
        getState.mockReturnValue({ users: { isFirstTime: false } });
        expect(fetchUsersData()(dispatch, getState)).toBeNull();
        expect(dispatch).toHaveBeenCalledTimes(0);
    });
});
