export function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                chartsData: {
                    lineCharts: {
                        title: 'Line Charts',
                        type: 'line',
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        dataSet: [{
                            title: 'Blue',
                            values: [350, 410, 900, 620, 700, 1000],
                            borderColor: '#01b6f5',
                            backgroundColor: '#0094c8',
                            type: 'line',
                        }],
                    },
                    areaCharts: {
                        title: 'Area Charts',
                        type: 'line',
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        disableCurves: true,
                        dataSet: [{
                            title: 'Green',
                            values: [350, 90, 410, 900, 600, 620, 700],
                            borderColor: '#8ef4da',
                            backgroundColor: 'rgba(142,244,218,0.65)',
                            type: 'line',
                            fill: true,
                        }],
                    },
                    barCharts: {
                        title: 'Bar Charts',
                        type: 'bar',
                        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                        dataSet: [{
                            title: 'Red',
                            values: [18, 42, 58, 50, 19, undefined],
                            backgroundColor: '#fe4849',
                        },
                        {
                            title: 'Orange',
                            values: [undefined, 40, undefined, 45, 95, 33],
                            backgroundColor: '#ff6837',
                        },
                        {
                            title: 'Yellow',
                            values: [undefined, 30, 80, undefined, 65, 50],
                            backgroundColor: '#ffcc00',
                        },
                        {
                            title: 'Green',
                            values: [undefined, 15, undefined, 60, 45, 85],
                            backgroundColor: '#1ad1a3',
                        }],
                    },
                    horizontalBarCharts: {
                        title: 'Horizontal Bar Charts',
                        type: 'horizontalBar',
                        labels: ['January', 'February', 'March', 'April', 'May'],
                        dataSet: [{
                            title: 'Red',
                            values: [-18, 42, -58, 50, 19, undefined],
                            backgroundColor: '#fe4849',
                        },
                        {
                            title: 'Green',
                            values: [undefined, 15, undefined, -60, 45, 85],
                            backgroundColor: '#1ad1a3',
                        }],
                    },
                    radarCharts: {
                        title: 'Radar Charts',
                        type: 'radar',
                        labels: ['Coding', 'Drinking', 'Sleeping', 'Reading', 'Runnig', 'Learning', 'Designing'],
                        legendPosition: 'right',
                        dataSet: [{
                            title: 'Yellow',
                            values: [300, 50, 200, 250, 100, 220, 100],
                            backgroundColor: 'rgba(255, 214, 51, 0.44)',
                            fill: true,
                        },
                        {
                            title: 'Blue',
                            values: [220, 150, 100, 200, 150, 300, 250],
                            borderColor: '#01b6f5',
                            backgroundColor: 'rgba(1,182,245,0.55)',
                            fill: true,
                        }],
                    },
                    polarAreaCharts: {
                        title: 'Polar Area Charts',
                        type: 'polarArea',
                        labels: ['Yellow', 'Blue', 'Green', 'Red', 'Orange'],
                        legendPosition: 'right',
                        dataSet: [{
                            title: 'Red',
                            values: [250, 150, 300, 250, 150],
                            backgroundColor: ['#ffcc00', '#00a6e0', '#1ad1a3', '#fe4849', '#ff6837'],
                        }],
                    },
                    pieCharts: {
                        title: 'Pie Charts',
                        type: 'pie',
                        labels: ['Yellow', 'Green', 'Red', 'Orange'],
                        legendPosition: 'right',
                        dataSet: [{
                            title: 'Red',
                            values: [80, 145, 45, 90],
                            backgroundColor: ['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837'],
                        }],
                    },
                    doughnutCharts: {
                        title: 'Boughnut Charts',
                        type: 'doughnut',
                        labels: ['Yellow', 'Green', 'Red', 'Orange'],
                        dataSet: [{
                            title: 'Red',
                            values: [350, 410, 900, 620, 700, 1000],
                            backgroundColor: ['#ffcc00', '#1ad1a3', '#fe4849', '#ff6837'],
                        }],
                    },
                },
            });
        }, 2000);
    });
}
