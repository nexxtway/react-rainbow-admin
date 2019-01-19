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

export default function resolveNewUsers() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(newUsers), 2000);
    });
}
