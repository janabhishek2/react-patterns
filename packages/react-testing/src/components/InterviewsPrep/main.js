// map data recevied from 2 promises;

const users = [
    {
        id: 1,
        name: "Abhishek"
    },
    {
        id: 2,
        name: "John"
    }
];

const userStatus = [
    {
        id: 1,
        isActive: true
    },
    {
        id: 2,
        isActive: false
    }
];

const getUsers = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(users);
        }, 1000);
    })
};

const getUserStatus = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(userStatus);
        }, 3000);
    })
};

const getParallelRequests = (reqs) => {
    const data = new Array(reqs.length);
    let counter = 0;
    return new Promise((resolve) => {
        reqs.forEach(async (req, index) => {
            const reqData = await req();
            data[index] = reqData;
            counter++;

            if(counter >= reqs.length) {
                resolve(data);
            }
        });
    })
};

const mapAndCombine = async () => {
    try{
        const [users, userStatus] = await getParallelRequests([getUserStatus, getUsers]);
        let newUsers = {};
        users.forEach(user => {
            newUsers[user.id] = user;
        });
        let newUserStatus ={}
        userStatus.forEach(userStatus => {
            newUserStatus[userStatus.id] = userStatus;
        });
        let newData = [];
        Object.keys(newUsers).forEach(userId => {
            let data = {
                ...newUsers[userId],
                ...newUserStatus[userId]
            };
            newData.push(data);
        });
        console.log(newData);
    } catch(err) {
        console.log(err);
    }
};

mapAndCombine();