const getName = (name) => {
    return name.firstName;
};

const getSurname = (name) => {
    return name.lastName;
}

const getFullName = (name) => {
    return `${name.firstName} ${name.lastName}`;
};

module.exports = {
    getSurname,
    getName,
    getFullName
};
