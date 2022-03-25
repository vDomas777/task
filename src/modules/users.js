const list = [
    {
        firstName: 'Vardenis',
        lastName: 'Pavardenis',
        email: 'pavardenisvardenis@outlook.com',
        country: 'Lithuania',
        address: 'Gatvė g., 11, Vilnius'
    },
    {
        firstName: 'Gedvinas',
        lastName: 'Gedvinaitis',
        email: 'gedvinas@gmail.com',
        country: 'Germany',
        address: 'Peter Bauer, Rosenweg 20, 12345 Berlin'
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