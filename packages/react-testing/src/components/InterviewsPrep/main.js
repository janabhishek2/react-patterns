let users = [
    {
        name: "John"
    },
    {
        name: "Jack"
    }
];

const isNameExists = (name, users) => {
    return !!users.find(user => user.name === name);
};

console.log(isNameExists("Joh1n", users));