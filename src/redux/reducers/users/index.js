import {
    STOP_LOADING_USERS,
    LOAD_USERS_DATA,
    START_LOADING_USERS,
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
    isLoading: true,
    isFirstTime: true,
};

function startLoading(state) {
    return {
        ...state,
        isLoading: true,
    };
}

function loadData(state, action) {
    const newState = {
        ...state,
        chartsData: action.chartsData,
        users: action.users,
        isFirstTime: false,
    };
    return newState;
}

function stopLoading(state) {
    return {
        ...state,
        isLoading: false,
    };
}

export default function users(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_USERS:
            return startLoading(state);
        case LOAD_USERS_DATA:
            return loadData(state, action);
        case STOP_LOADING_USERS:
            return stopLoading(state);
        default:
            return state;
    }
}
