// convert time from 12 to 24 hrs

const convertTo24Hours = (time) => {
    debugger;
    const timeRegex = /(.*):(\d{1,2})(.*)/;
    
    const values = timeRegex.exec(time);
    
    let hour = Number(values[1]);
    let min = Number(values[2]);
    let timeOfDay = values[3];

    if(timeOfDay === "AM") {
        hour = hour%12;
    } else if(timeOfDay === "PM" && hour !== 12) {
        hour = hour + 12;
    }
    return `${hour}:${min}`;
    
};

const time = "10:02PM";
const ans = convertTo24Hours(time);

console.log(ans);
