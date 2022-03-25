const list = [
 
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