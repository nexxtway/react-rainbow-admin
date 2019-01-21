const totals = {
    orders: 1003,
    users: 10011,
    followers: '+50K',
    errors: 1,
    successfulyOrdersAmount: '$20058',
    totalUsers: '+140K',
    followersActive: '+20K',
};

export default function resolveTotals() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(totals), 2000);
    });
}
