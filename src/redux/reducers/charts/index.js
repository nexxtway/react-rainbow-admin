import { START_LOADING_CHARTS, STOP_LOADING_CHARTS, LOAD_CHARTS_DATA } from '../../actions/charts';

const initialState = {
    data: {
        lineCharts: {
            labels: [],
            dataSet: [{
                values: [],
            }],
        },
        areaCharts: {
            labels: [],
            dataSet: [{
                values: [],
            }],
        },
        barCharts: {
            labels: [],
            dataSet: [{
                values: [],
            },
            {
                values: [],
            },
            {
                values: [],
            },
            {
                values: [],
            }],
        },
        horizontalBarCharts: {
            labels: [],
            dataSet: [{
                values: [],
            },
            {
                values: [],
            }],
        },
        radarCharts: {
            labels: [],
            legendPosition: 'bottom',
            dataSet: [{
                values: [],
            },
            {
                values: [],
            }],
        },
        polarAreaCharts: {
            labels: [''],
            dataSet: [{
                values: [250],
            }],
        },
        pieCharts: {
            labels: [],
            dataSet: [{
                values: [],
            }],
        },
        doughnutCharts: {
            labels: [],
            dataSet: [{
                values: [],
            }],
        },
    },
    isLoading: false,
    isFirstTime: true,
};

function loadData(state, action) {
    const newState = {
        ...state,
        data: action.payload,
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
        isFirstTime: false,
    };
}

export default function charts(state = initialState, action) {
    switch (action.type) {
        case START_LOADING_CHARTS:
            return startLoading(state);
        case LOAD_CHARTS_DATA:
            return loadData(state, action);
        case STOP_LOADING_CHARTS:
            return stopLoading(state);
        default:
            return state;
    }
}
