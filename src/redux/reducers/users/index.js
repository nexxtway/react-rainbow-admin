import {
    START_LOADING_USERS,
    STOP_LOADING_USERS,
    LOAD_CHARTS_USERS,
} from '../../actions/users';

const initialState = {
    users: [],
    chartsData: {
        totalUsers: {
            labels: [],
            value: [],
        },
        activeUsers: {
            labels: [],
            value: [],
        },
    },
    isLoading: false,
    isFirstTime: true,
};

function loadData(state, action) {
    const newState = {
        ...state,
        chartsData: action.chartsData,
        users: action.users,
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

export default function usersData(state = initialState, action) {
    switch (action.type) {
        case LOAD_CHARTS_USERS:
            return loadData(state, action);
        case START_LOADING_USERS:
            return startLoading(state);
        case STOP_LOADING_USERS:
            return stopLoading(state);
        default:
            return state;
    }
}
