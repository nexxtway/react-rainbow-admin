import reducer from '..';

const START_LOADING_CHARTS = 'START_LOADING_CHARTS';
const STOP_LOADING_CHARTS = 'STOP_LOADING_CHARTS';
const LOAD_CHARTS_DATA = 'LOAD_CHARTS_DATA';

describe('charts reducer', () => {
    describe(`when ${START_LOADING_CHARTS} actions`, () => {
        it('should set isLoading to true', () => {
            const inititialState = {
                isLoading: false,
            };
            const state = reducer(inititialState, { type: START_LOADING_CHARTS });
            expect(state.isLoading).toBe(true);
        });
    });

    describe(`when ${STOP_LOADING_CHARTS} action`, () => {
        it('should set isLoading to false', () => {
            const inititialState = {
                isLoading: true,
            };
            const state = reducer(inititialState, { type: STOP_LOADING_CHARTS });
            expect(state.isLoading).toBe(false);
        });
    });
    describe(`when ${LOAD_CHARTS_DATA} action`, () => {
        it('should set isFirstTime to false', () => {
            const inititialState = {
                isFirstTime: true,
                data: {},
            };
            const action = {
                type: LOAD_CHARTS_DATA,
                payload: {},
            };
            const state = reducer(inititialState, action);
            expect(state.isFirstTime).toBe(false);
        });
        it('should set the right loaded data', () => {
            const inititialState = {
                data: {
                    lineCharts: {},
                    areaCharts: {},
                    barCharts: {},
                    horizontalBarCharts: {},
                    radarCharts: {},
                    polarAreaCharts: {},
                    pieCharts: {},
                    doughnutCharts: {},
                },
            };
            const action = {
                type: LOAD_CHARTS_DATA,
                payload: {
                    lineCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    areaCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    barCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    horizontalBarCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    radarCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    polarAreaCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    pieCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                    doughnutCharts: {
                        labels: [5, 4, 3, 2, 1],
                        dataSet: [{
                            values: [5, 4, 3, 2, 1],
                        }],
                    },
                },
            };
            const state = reducer(inititialState, action);
            expect(state.data).toEqual(action.payload);
        });
    });
});
