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

let data = [];
const newData = loc.map(({ location_key, auto_assign }, loc_index)=> {
    location_key.forEach((loc_key) => {
        data.push({
            location_key: loc_key,
            auto_assign,
            config_key: bulkConfig[loc_index]?.dataValues?.config_key
        })
    })
});

console.log(data);
