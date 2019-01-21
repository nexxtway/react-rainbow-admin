import {
    START_LOADING_FOLLOWERS,
    STOP_LOADING_FOLLOWERS,
    LOAD_FOLLOWERS_DATA,
} from '../../actions/followers';

const initialState = {
    totals: {
        facebook: 0,
        google: 0,
        twitter: 0,
        linkedin: 0,
    },
    chartsData: {
        facebook: {
            labels: [],
            value: [0, 0, 0, 0, 0, 0, 0],
        },
        google: {
            labels: [],
            value: [0, 0, 0, 0, 0, 0, 0],
        },
        twitter: {
            labels: [],
            value: [0, 0, 0, 0, 0, 0, 0],
        },
        linkedin: {
            labels: [],
            value: [0, 0, 0, 0, 0, 0, 0],
        },
    },
    isLoading: false,
    isFirstTime: true,
};

function loadData(state, action) {
    const newState = {
        ...state,
        totals: action.totals,
        chartsData: action.chartsData,
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

export default function followersData(state = initialState, action) {
    switch (action.type) {
        case LOAD_FOLLOWERS_DATA:
            return loadData(state, action);
        case START_LOADING_FOLLOWERS:
            return startLoading(state);
        case STOP_LOADING_FOLLOWERS:
            return stopLoading(state);
        default:
            return state;
    }
}
