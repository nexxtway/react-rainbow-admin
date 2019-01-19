const chartsData = {
    successfulyOrders: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        value: [23, 45, 123, 56, 100],
    },
    totalUsers: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        value: [250, 45, 900, 500, 630],
    },
    followersActive: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        googleValue: [350, 90, 410, 900, 600, 620, 700],
        facebookValue: [90, 350, 349, 190, 380, 350, 300],
    },
};

export default function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(chartsData), 2000);
    });
}
