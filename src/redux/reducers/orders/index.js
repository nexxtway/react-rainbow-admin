import {
    STOP_LOADING_ORDERS,
    LOAD_ORDERS_DATA,
} from '../../actions/orders';

const initialState = {
    orders: [],
    chartsData: {
        totalOrders: {
            labels: [],
            value: [],
        },
    },
    isLoading: true,
    isFirstTime: true,
};

function loadData(state, action) {
    const newState = {
        ...state,
        orders: action.orders,
        chartsData: action.chartsData,
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

export default function ordersData(state = initialState, action) {
    switch (action.type) {
        case LOAD_ORDERS_DATA:
            return loadData(state, action);
        case STOP_LOADING_ORDERS:
            return stopLoading(state);
        default:
            return state;
    }
}
