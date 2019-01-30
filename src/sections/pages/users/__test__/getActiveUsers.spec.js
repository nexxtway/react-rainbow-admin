import getActiveUsers from '../getActiveUsers';

const users = [
    {
        email: 'sara@gmail.com',
        status: 'ONLINE',
    },
    {
        email: 'rey@gmail.com',
        status: 'ONLINE',
    },
    {
        email: 'leo@gmail.com',
        status: 'ONLINE',
    },
    {
        email: 'tahy@gmail.com',
        status: 'ONLINE',
    },
    {
        email: 'pepe@gmail.com',
        status: 'OFFLINE',
    },
    {
        email: 'jose@gmail.com',
        status: 'OFFLINE',
    },
];
describe('getActiveUsers', () => {
    it('should return only de users with ONLINE status', () => {
        const activeUsers = [
            {
                email: 'sara@gmail.com',
                status: 'ONLINE',
            },
            {
                email: 'rey@gmail.com',
                status: 'ONLINE',
            },
            {
                email: 'leo@gmail.com',
                status: 'ONLINE',
            },
            {
                email: 'tahy@gmail.com',
                status: 'ONLINE',
            },
        ];
        expect(getActiveUsers(users)).toEqual(activeUsers);
    });
    it('should return no users when there are no one with ONLINE status', () => {
        const users = [
            {
                email: 'sara@gmail.com',
                status: 'OFFLINE',
            },
            {
                email: 'rey@gmail.com',
                status: 'OFFLINE',
            },
            {
                email: 'leo@gmail.com',
                status: 'OFFLINE',
            },
            {
                email: 'tahy@gmail.com',
                status: 'OFFLINE',
            },
        ];
        expect(getActiveUsers(users)).toEqual([]);
    });
});
