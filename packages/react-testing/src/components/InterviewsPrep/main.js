// mapping data
const loc = [
    {
        location_key: [2, 3, 4],
        auto_assign:1
    },
    {
        location_key: [8,9,10],
        auto_assign:1
    }
];

const bulkConfig = [
    {
        dataValues: {
            config_key: 100
        }
    },
    {
        dataValues: {
            config_key: 200
        }
    }
];

const newData = loc.map(({ location_key, auto_assign }, loc_index)=> {
    return location_key.map((loc_key) => {
        return ({
            location_key: loc_key,
            auto_assign,
            config_key: bulkConfig[loc_index]?.dataValues?.config_key
        });
    })
}).reduce((acc, curr) => {
    acc = [...acc, ...curr];
    return acc;
}, []);

console.log(newData);
