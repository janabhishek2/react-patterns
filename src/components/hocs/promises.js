const fetchUser = () => new Promise((resolve) => {
    const user = {
        name: 'Abhishek',
        age: 24,
        country: "India",
        books: [
            {
                id: 1,
                name: 'Test-1'
            },
            {
                id: 2,
                name: 'Test-2'
            },
            {
                id: 3,
                name: 'Test-3'
            }
        ]
    };
    setTimeout(() => {
        resolve(user);
    }, 2000);
});

const updateUser = (user) => new Promise((resolve) => {
    setTimeout(() => {
        resolve(user);
    }, 2000);
});

export {
    fetchUser,
    updateUser
};
