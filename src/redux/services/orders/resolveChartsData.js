const chartsData = {
    totalOrders: {
        labels: ['January', 'February', 'March', 'April', 'May', 'Jun', 'Jul'],
        value: [370, 90, 950, 530, 800, 960, 650],
    },
};

export default function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(chartsData), 2000);
    });
}
