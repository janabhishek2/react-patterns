const n = 4;

function printOpposite(i, n) {
    if( i > n ) return;

    printOpposite(i+1, n);
    console.log(i);
}

function printPositiveWithouPlus(i, n) {
    if( i < 1 ) return;
    printPositiveWithouPlus(i-1, n);

    console.log(i);
}

printPositiveWithouPlus(4, 4);

