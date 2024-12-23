// concat errors
const backendErrors = {
    email: {
        errors: [
            {
                message: "Can't be blank"
            }
        ]
    },
    password: {
        errors: [
            {
                message: "Must contain symbols in different case"
            },
            {
                message: "Must be at least 8 symbols length"
            }
        ]
    }
};

const str = Object.keys(backendErrors).reduce((acc, curr) => {
    let currString = `${curr}: `;
    currString += backendErrors[curr].errors.map(item => item.message).join(", ");
    acc.push(currString);
    return acc;
}, []);

console.log(str);