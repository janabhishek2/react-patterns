let t = 0;

function recPrint() {
    // base
    if(t === 11) return;

    console.log(t);
    t++;
    recPrint();
}

recPrint();
