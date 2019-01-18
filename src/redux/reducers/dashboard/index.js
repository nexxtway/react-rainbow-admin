import {
    START_LOADING_DASHBOARD,
    STOP_LOADING_DASHBOARD,
    LOAD_DASHBOARD_DATA,
} from '../../actions/dashboard';

const initialState = {
    totals: {
        orders: 0,
        users: 0,
        followers: 0,
        errors: 0,
        successfulyOrdersAmount: 0,
        totalUsers: 0,
        followersActive: 0,
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
        followersActive: {
            labels: [],
            googleValue: [0, 0, 0, 0, 0, 0, 0],
            facebookValue: [0, 0, 0, 0, 0, 0, 0],
        },
    },
    lastMessages: [],
    newUsers: [],
    isLoading: false,
    isFirstTime: true,
};

function loadData(state, action) {
    const newState = {
        ...state,
        totals: action.totals,
        chartsData: action.chartsData,
        lastMessages: action.lastMessages,
        newUsers: action.newUsers,
        isFirstTime: false,
    };
    return newState;
}

function startLoading(state) {
    return {
        ...state,
        isLoading: true,
    };
}

function stopLoading(state) {
    return {
        ...state,
        isLoading: false,
    };
}

export default function dashboardData(state = initialState, action) {
    switch (action.type) {
        case LOAD_DASHBOARD_DATA:
            return loadData(state, action);
        case START_LOADING_DASHBOARD:
            return startLoading(state);
        case STOP_LOADING_DASHBOARD:
            return stopLoading(state);
        default:
            return state;
    }
}
