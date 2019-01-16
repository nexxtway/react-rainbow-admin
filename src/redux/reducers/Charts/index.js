import { LOADING_CHARTS_DATA, LOAD_CHARTS_DATA } from '../../actions/Charts';

const initialState = {
    data: null,
    isLoading: false,
    isFirstTime: true,
};

export default function charts(state = initialState, action) {
    switch (action.type) {
        case LOADING_CHARTS_DATA:
            return { ...state, isLoading: true };
        case LOAD_CHARTS_DATA:
            return {
                ...state,
                isLoading: false,
                isFirstTime: false,
                data: action.payload.chartsData,
            };
        default:
            return state;
    }
}
