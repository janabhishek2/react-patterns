const n = 5;

function printName(n, name) {
    if(n === 0) return;

    console.log(name);
    printName(n-1, name);
}

printName(n, "Abhishek");
