import {
    STOP_LOADING_ORDERS,
    LOAD_USER_DETAILS,
    START_LOADING_ORDERS,
} from '../../actions/userDetails';

const initialState = {
    orders: [],
    userDetails: {},
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
        orders: action.orders,
        userDetails: action.userDetails,
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

export default function userDetails(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_ORDERS:
            return startLoading(state);
        case LOAD_USER_DETAILS:
            return loadData(state, action);
        case STOP_LOADING_ORDERS:
            return stopLoading(state);
        default:
            return state;
    }
}
