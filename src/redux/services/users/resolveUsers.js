const users = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg' },
        email: 'sara@gmail.com',
        phoneNumber: '+1 111 111 1111',
        status: 'ONLINE',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg' },
        email: 'rey@gmail.com',
        phoneNumber: '+1 222 222 2222',
        status: 'ONLINE',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg' },
        email: 'leo@gmail.com',
        phoneNumber: '+1 333 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg' },
        email: 'tahy@gmail.com',
        phoneNumber: '+1 444 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pepe' },
        email: 'pepe@gmail.com',
        phoneNumber: '+1 555 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Jose' },
        email: 'jose@gmail.com',
        phoneNumber: '+1 666 666 6666',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Pedro' },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan' },
        email: 'juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pablo' },
        email: 'pablo@gmail.com',
        phoneNumber: '+1 999 999 9999',
        status: 'ONLINE',
    },
    {
        user: { name: 'Maria' },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana' },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio' },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga' },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando' },
        email: 'armando@gmail.com',
        phoneNumber: '+1 166 666 6666',
        status: 'ONLINE',
    },

    {
        user: { name: 'Pedro' },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan' },
        email: 'juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pablo' },
        email: 'pablo@gmail.com',
        phoneNumber: '+1 999 999 9999',
        status: 'ONLINE',
    },
    {
        user: { name: 'Maria' },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana' },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio' },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga' },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando' },
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
