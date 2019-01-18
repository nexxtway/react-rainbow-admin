import { START_LOADING_CHARTS, STOP_LOADING_CHARTS, LOAD_CHARTS_DATA } from '../../actions/charts';

const initialState = {
    data: {
        lineCharts: {
            title: '',
            type: 'line',
            labels: [],
            dataSet: [{
                title: '',
                values: [],
                borderColor: '',
                backgroundColor: '',
                type: 'line',
            }],
        },
        areaCharts: {
            title: '',
            type: 'line',
            labels: [],
            disableCurves: true,
            dataSet: [{
                title: '',
                values: [],
                borderColor: '',
                backgroundColor: '',
                type: 'line',
                fill: true,
            }],
        },
        barCharts: {
            title: '',
            type: 'line',
            labels: [],
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: '',
            },
            {
                title: '',
                values: [],
                backgroundColor: '',
            },
            {
                title: '',
                values: [],
                backgroundColor: '',
            },
            {
                title: '',
                values: [],
                backgroundColor: '',
            }],
        },
        horizontalBarCharts: {
            title: '',
            type: 'line',
            labels: [],
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: '',
            },
            {
                title: '',
                values: [],
                backgroundColor: '',
            }],
        },
        radarCharts: {
            title: '',
            type: 'line',
            labels: [],
            legendPosition: 'bottom',
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: '',
                fill: true,
            },
            {
                title: '',
                values: [],
                borderColor: '',
                backgroundColor: '',
                fill: true,
            }],
        },
        polarAreaCharts: {
            labels: [''],
            dataSet: [{
                values: [],
            }],
        },
        pieCharts: {
            title: '',
            type: 'line',
            labels: [],
            legendPosition: 'bottom',
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: [],
            }],
        },
        doughnutCharts: {
            title: '',
            type: 'line',
            labels: [],
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: [],
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
