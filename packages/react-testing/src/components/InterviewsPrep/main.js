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
    const message = curr[1].errors.map(item => item.message).join(", ");
    const capitalizedName = curr[0].charAt(0).toUpperCase() + curr[0].slice(1);
    acc.push(`${capitalizedName}: ${message}`);
    return acc;
}, []);

console.log(str);