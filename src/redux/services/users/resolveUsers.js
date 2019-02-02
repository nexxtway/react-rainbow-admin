const users = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg', id: 'vkCiMz1SoueTkGImRIXwib4WT8a2' },
        email: 'sara@gmail.com',
        phoneNumber: '+1 111 111 1111',
        status: 'ONLINE',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        email: 'rey@gmail.com',
        phoneNumber: '+1 222 222 2222',
        status: 'ONLINE',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        email: 'leo@gmail.com',
        phoneNumber: '+1 333 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        email: 'tahy@gmail.com',
        phoneNumber: '+1 444 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pepe', id: 'vkCiMz1SoueTkGImRIXwib4WT8a2' },
        email: 'pepe@gmail.com',
        phoneNumber: '+1 555 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Jose', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        email: 'jose@gmail.com',
        phoneNumber: '+1 666 666 6666',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Pedro', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        email: 'juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pablo', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        email: 'pablo@gmail.com',
        phoneNumber: '+1 999 999 9999',
        status: 'ONLINE',
    },
    {
        user: { name: 'Maria', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana', id: '5y12TA2ySWVrVm9Ld5jGGf836Us1' },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga', id: 'eSYrZNLQypg1aQM7gFM6OmTnafr2' },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando', id: 'ievq929donfHNAADTdCv8m3WYh23' },
        email: 'armando@gmail.com',
        phoneNumber: '+1 166 666 6666',
        status: 'ONLINE',
    },

    {
        user: { name: 'Pedro', id: 'ievq929donfHNAADTdCv8m3WYh76' },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan', id: 'rfgc929donfHNAADTdCv8m3WYh76' },
        email: 'juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pablo', id: 17 },
        email: 'pablo@gmail.com',
        phoneNumber: '+1 999 999 9999',
        status: 'ONLINE',
    },
    {
        user: { name: 'Maria', id: 'vkCiMz1SoueTkGImRIXwib4WT8a2' },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana', id: 'bnvc929donfHNAADTdCv8m3WYh76' },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio', id: 'qvjr784donfHNAADTdCv8m3WYh76' },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga', id: 'ievq929donfHNAADTdCv8m3WYh76' },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando', id: 'vkCiMz1SoueTkGImRIXwib4WT8a2' },
        email: 'armando@gmail.com',
        phoneNumber: '+1 166 666 6666',
        status: 'ONLINE',
    },

];

export default function resolveUsers() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(users), 2000);
    });
}
