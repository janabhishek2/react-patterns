function maximum(){
    console.log(arguments);
    return Math.max.apply(null, arguments);
};

console.log(maximum(1, 3, 88, -1));
