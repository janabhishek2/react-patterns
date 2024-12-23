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

const str = Object.entries(backendErrors).reduce((acc, curr) => {
    debugger;
    const message = curr[1].errors.map(item => item.message).join(", ");
    acc.push(`${curr[0]}: ${message}`);
    return acc;
}, []);

console.log(str);