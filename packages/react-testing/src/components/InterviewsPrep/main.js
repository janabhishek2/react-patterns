let users = [
    {
        name: "John"
    },
    {
        name: "Jack"
    }
];

const isNameExists = (name, users) => {
    return users.some(user => user.name === name);
};

console.log(isNameExists("John", users));