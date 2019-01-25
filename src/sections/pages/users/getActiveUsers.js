export default function getActiveUsers(users) {
    return users.filter(user => user.status === 'ONLINE');
}
