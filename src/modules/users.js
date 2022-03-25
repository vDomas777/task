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
    getUser(index) {
        return list[index]
    },
    addUser(data) {
        list.push(data)
    },
    deleteUser(index) {
        list.splice(index, 1);
        console.log(list)
    }
}

export default User