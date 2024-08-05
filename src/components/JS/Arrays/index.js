for(let i=1; i<=5; i++) {
    // let variable has scope of this block so the callback function will have access to the variable of i when it is run.
    setTimeout(() => {
        console.log("TIMES UP!! ", i);
    }, 1000 * i);
}