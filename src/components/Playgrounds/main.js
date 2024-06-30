const maximum = (...args) => {
    // return Math.max.apply(null, [...args]);

    // or 

    return Math.max.call(null, ...args);
};

console.log(maximum(1, 3, 88, -1));
