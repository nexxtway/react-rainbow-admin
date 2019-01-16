/* eslint-disable no-param-reassign */
import {
    LOADING_DASHBOARD_DATA,
    STOP_LOADING_DASHBOARD_DATA,
    LOAD_DASHBOARD_DATA,
} from '../../actions/Dashboard/index';

const initialState = {
    totals: {
        orders: 0,
        users: 0,
        fallowers: 0,
        errors: 0,
        successfulyOrdersAmount: 0,
        totalUsers: 0,
        fallowersActive: 0,
    },
    chartsData: {
        successfulyOrders: {
            labels: [],
            value: [0, 0, 0, 0, 0],
        },
        totalUsers: {
            labels: [],
            value: [0, 0, 0, 0, 0],
        },
        fallowersActive: {
            labels: [],
            googleValue: [0, 0, 0, 0, 0, 0, 0],
            facebookValue: [0, 0, 0, 0, 0, 0, 0],
        },
    },
    lastMessages: [],
    newUsers: [],
    isLoading: false,
};

function loadData(state, action) {
    const newState = {
        ...state,
        ...action.totals,
        ...action.chartsData,
        lastMessages: action.lastMessages,
        newUsers: action.newUsers,
    };
    return newState;
}

function setIsLoading(state, action) {
    const isLoading = {
        isLoading: state.isLoading,
    };
    const newState = {
        ...state,
        ...isLoading,
        isLoading: action,
    };
    return newState;
}

export default function dashboardData(state = initialState, action) {
    switch (action.type) {
        case LOAD_DASHBOARD_DATA:
            return loadData(state, action);
        case LOADING_DASHBOARD_DATA:
            return setIsLoading(state, true);
        case STOP_LOADING_DASHBOARD_DATA:
            return setIsLoading(state, false);
        default:
            return state;
    }
}
