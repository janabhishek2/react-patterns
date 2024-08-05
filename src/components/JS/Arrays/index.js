for(var i=1; i<=5; i++) {
    // we need to do this to preserve the value of i on each increment;
    // because var variables are not under the block scope so they are not part of closure of the setTimeout funciton
    (function(j){
        setTimeout(() => {
            console.log("TIMES UP!! ", j);
        }, 1000 * j);
    })(i);
}