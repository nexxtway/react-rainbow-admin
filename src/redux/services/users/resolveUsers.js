const users = [
    {
        user: { name: 'Sara', photoUrl: '/assets/images/user2.jpg', id: 1 },
        email: 'sara@gmail.com',
        phoneNumber: '+1 111 111 1111',
        status: 'ONLINE',
    },
    {
        user: { name: 'Reinier', photoUrl: '/assets/images/user1.jpg', id: 2 },
        email: 'rey@gmail.com',
        phoneNumber: '+1 222 222 2222',
        status: 'ONLINE',
    },
    {
        user: { name: 'Leo', photoUrl: '/assets/images/user3.jpg', id: 3 },
        email: 'leo@gmail.com',
        phoneNumber: '+1 333 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Tahimi', photoUrl: '/assets/images/user4.jpg', id: 4 },
        email: 'tahy@gmail.com',
        phoneNumber: '+1 444 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pepe', id: 5 },
        email: 'pepe@gmail.com',
        phoneNumber: '+1 555 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Jose', id: 6 },
        email: 'jose@gmail.com',
        phoneNumber: '+1 666 666 6666',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Pedro', id: 7 },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan', id: 8 },
        email: 'juan@gmail.com',
        phoneNumber: '+1 888 888 8888',
        status: 'ONLINE',
    },
    {
        user: { name: 'Pablo', id: 9 },
        email: 'pablo@gmail.com',
        phoneNumber: '+1 999 999 9999',
        status: 'ONLINE',
    },
    {
        user: { name: 'Maria', id: 10 },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana', id: 11 },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio', id: 12 },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga', id: 13 },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando', id: 14 },
        email: 'armando@gmail.com',
        phoneNumber: '+1 166 666 6666',
        status: 'ONLINE',
    },

    {
        user: { name: 'Pedro', id: 15 },
        email: 'pedro@gmail.com',
        phoneNumber: '+1 777 777 7777',
        status: 'ONLINE',
    },
    {
        user: { name: 'Juan', id: 16 },
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
        user: { name: 'Maria', id: 18 },
        email: 'maria@gmail.com',
        phoneNumber: '+1 122 222 2222',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Juana', id: 19 },
        email: 'juana@gmail.com',
        phoneNumber: '+1 133 333 3333',
        status: 'ONLINE',
    },
    {
        user: { name: 'Julio', id: 20 },
        email: 'julio@gmail.com',
        phoneNumber: '+1 144 444 4444',
        status: 'ONLINE',
    },
    {
        user: { name: 'Olga', id: 21 },
        email: 'olga@gmail.com',
        phoneNumber: '+1 155 555 5555',
        status: 'OFFLINE',
    },
    {
        user: { name: 'Armando', id: 22 },
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
