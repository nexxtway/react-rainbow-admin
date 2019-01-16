import { LOADING_CHARTS_DATA, LOAD_CHARTS_DATA } from '../../actions/charts';

const initialState = Object.assign({
    data: {
        lineCharts: {
            title: '',
            type: '',
            labels: [],
            dataSet: [{
                title: '',
                values: [],
                borderColor: '',
                backgroundColor: '',
                type: '',
            }],
        },
        areaCharts: {
            title: '',
            type: '',
            labels: [],
            disableCurves: true,
            dataSet: [{
                title: '',
                values: [],
                borderColor: '',
                backgroundColor: '',
                type: '',
                fill: true,
            }],
        },
        barCharts: {
            title: '',
            type: '',
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
            type: '',
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
            type: '',
            labels: [],
            legendPosition: '',
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
            title: '',
            type: '',
            labels: [''],
            legendPosition: '',
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: [],
            }],
        },
        pieCharts: {
            title: '',
            type: '',
            labels: [],
            legendPosition: '',
            dataSet: [{
                title: '',
                values: [],
                backgroundColor: [],
            }],
        },
        doughnutCharts: {
            title: '',
            type: '',
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
});

export default function charts(state = initialState, action) {
    switch (action.type) {
        case LOADING_CHARTS_DATA:
            return { ...state, isLoading: true };
        case LOAD_CHARTS_DATA:
            return Object.assign({}, state, {
                ...state,
                isLoading: false,
                isFirstTime: false,
                data: action.payload.chartsData,
            });
        default:
            return state;
    }
}
