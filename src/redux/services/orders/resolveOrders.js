const orders = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg' },
        status: 'VERIFIED',
        amount: '$144.55',
        date: '11/07/2018',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg' },
        status: 'PROCESSING',
        amount: '$285.05',
        date: '11/07/2018',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg' },
        status: 'PROCESSING',
        amount: '$125.25',
        date: '11/06/2018',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg' },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pepe' },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Jose' },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pedro' },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juan' },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pablo' },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Maria' },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juana' },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Julio' },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Olga' },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
];

export default function resolveOrders() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(orders), 2000);
    });
}
