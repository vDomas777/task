const list = [
    {
        firstName: 'Vardenis',
        lastName: 'Pavardenis',
        email: 'pavardenisvardenis@outlook.com',
        country: 'Lithuania',
        address: 'Gatvė g., 11, Vilnius'
    },
    {
        firstName: 'Vardenis',
        lastName: 'Pavardenis',
        email: 'pavardenisvardenis@outlook.com',
        country: 'Lithuania',
        address: 'Gatvė g., 11, Vilnius'
    },
];

const User = {
    getUsers() {
        return list
    },
    addUser(data) {
        list.push(data)
    }
}

export default User