const userDetails = {
    dataProvider: 'Facebook user',
    name: 'Leandro Torres',
    status: 'VERIFIED',
    payments: 'Enabled',
    totalBalance: '$ 100 000',
    birth: '01/01/1992',
    address: '185 Berry St. San Francisco, CA',
    email: 'leandro@gmail.com',
    phoneNumber: '+1 111 111 1111',
};

export default function resolveUserDetails() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(userDetails), 2000);
    });
}
