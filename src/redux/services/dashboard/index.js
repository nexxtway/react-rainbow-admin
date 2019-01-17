const totals = {
    orders: 1003,
    users: 10011,
    followers: '+50K',
    errors: 1,
    successfulyOrdersAmount: '$20058',
    totalUsers: '+140K',
    followersActive: '+20K',
};

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

const lastMessages = [
    {
        avatar: 'assets/images/user2.jpg',
        userName: 'Saray Pacheco',
        date: '8:30 am',
        content: 'A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …',
        avatarTitle: 'Saray Pacheco',
    },
    {
        avatar: 'assets/images/user3.jpg',
        userName: 'Reinier Guerra',
        date: '7:25 am',
        content: 'A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …',
        avatarTitle: 'Reinier Guerra',
    },
    {
        avatar: 'assets/images/user1.jpg',
        userName: 'Jose Leandro Torres',
        date: 'yesterday',
        content: 'A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …',
        avatarTitle: 'Jose Leandro Torres',
    },
    {
        avatar: 'assets/images/user4.jpg',
        userName: 'Tahimi León',
        date: 'yesterday',
        content: 'A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …',
        avatarTitle: 'Tahimi León',
    },
    {
        userName: 'Carlos Miguel',
        date: 'Monday',
        content: 'A rainbow is a meteorological phenomenon that is caused by reflection, refraction and dispersion of light in water droplets resulting in a spectrum …',
        avatarTitle: 'Carlos Miguel',
    },
];

const newUsers = [
    {
        avatar: 'assets/images/user2.jpg',
        userName: 'Saray Pacheco',
        city: 'San Francisco',
        avatarTitle: 'Saray Pacheco',
        date: 'Now',
        isActive: true,
    },
    {
        avatar: 'assets/images/user1.jpg',
        userName: 'Jose Leandro Torres',
        city: 'Guadalajara',
        avatarTitle: 'Jose Leandro Torres',
        date: 'Now',
        isActive: true,
    },
    {
        avatar: 'assets/images/user3.jpg',
        userName: 'Reinier Guerra',
        city: 'San Francisco',
        avatarTitle: 'Reinier Guerra',
        date: '10min ago',
        isActive: false,
    },
    {
        avatar: 'assets/images/user4.jpg',
        userName: 'Tahimi León',
        city: 'Guadalajara',
        avatarTitle: 'Tahimi León',
        date: '1hour ago',
        isActive: false,
    },
    {
        userName: 'Carlos Miguel',
        city: 'La Habana',
        avatarTitle: 'Carlos Miguel',
        date: 'yesterday',
        isActive: false,
    },
];

export function resolveTotals() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(totals); }, 2000);
    });
}

export function resolveChartsData() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(chartsData); }, 2000);
    });
}

export function resolveLastMessages() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(lastMessages); }, 2000);
    });
}

export function resolveNewUsers() {
    return new Promise((resolve) => {
        setTimeout(() => { resolve(newUsers); }, 2000);
    });
}
