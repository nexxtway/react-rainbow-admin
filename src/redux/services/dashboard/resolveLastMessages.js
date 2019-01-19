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

export default function resolveLastMessages() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(lastMessages), 2000);
    });
}
