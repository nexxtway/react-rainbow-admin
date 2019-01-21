const chartsData = {
    facebook: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [270, 190, 350, 930, 500, 960, 1000],
    },
    google: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [270, 190, 350, 930, 500, 960, 1000],
    },
    twitter: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [270, 190, 350, 930, 500, 960, 1000],
    },
    linkedin: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [270, 190, 350, 930, 500, 960, 1000],
    },
};

export default function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(chartsData), 2000);
    });
}
