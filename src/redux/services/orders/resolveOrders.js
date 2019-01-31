const orders = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg', id: 1 },
        status: 'VERIFIED',
        amount: '$144.55',
        date: '11/07/2018',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg', id: 2 },
        status: 'PROCESSING',
        amount: '$285.05',
        date: '11/07/2018',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg', id: 3 },
        status: 'PROCESSING',
        amount: '$125.25',
        date: '11/06/2018',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg', id: 4 },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pepe', id: 5 },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Jose', id: 6 },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pedro', id: 7 },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juan', id: 8 },
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pablo', id: 9 },
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Maria', id: 10 },
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juana', id: 11 },
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Julio', id: 12 },
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Olga', id: 13 },
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
