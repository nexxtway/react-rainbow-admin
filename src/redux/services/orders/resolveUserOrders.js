const orders = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg', id: 'vkCiMz1SoueTkGImRIXwib4WT8a2' },
        id: '-L1g4sS1DPSCw46sgssR',
        status: 'VERIFIED',
        amount: '$144.55',
        date: '11/07/2018',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        id: '-L1gRVwPsDusrJpNDe71',
        status: 'PROCESSING',
        amount: '$285.05',
        date: '11/07/2018',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        id: '-L1huoR2Y_YlsPU5uRgw',
        status: 'PROCESSING',
        amount: '$125.25',
        date: '11/06/2018',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        id: '-L1i6Uz2WD9uilhR4NaN',
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pepe', id: 'vkCiMz1SoueTkGImRIXwib4WT8a2' },
        id: '-L1i8pm_jvx3tldpF6ka',
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Jose', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        id: '-L1iDIKdJNJhqKMVMEB6',
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pedro', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        id: '-L1izya9qkA2_JPWlshM',
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juan', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        id: '-L1j-8nNgGbs2FDEZS_C',
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Pablo', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        id: '-L1j-JOa14BJ5p7w-HH4',
        status: 'EXPIRED',
        amount: '$104.55',
        date: '11/04/2018',
    },
    {
        user: { name: 'Maria', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        id: '-L1j-x-6MIoUtf_SCWnS',
        status: 'VERIFIED',
        amount: '$124.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Juana', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        id: '-L1oqfYQFcXHrq2FCOu6',
        status: 'VERIFIED',
        amount: '$144.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Julio', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        id: '-L1zs61Y4IVhM5pIcQq2',
        status: 'PROCESSING',
        amount: '$94.05',
        date: '11/04/2018',
    },
    {
        user: { name: 'Olga', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        id: '-L27k48Gc9JpFXEprazz',
        status: 'PROCESSING',
        amount: '$124.05',
        date: '11/04/2018',
    },
];

export default function resolveUserOrders() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(orders), 2000);
    });
}
