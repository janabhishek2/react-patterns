// Currying: f(a,b,c) -> f(a)(b)(c);

function f(a) {
    console.log(a);
    return function(b) {
        console.log(b);
        return function(c) {
            console.log(c);
        }
    }
}

function f(a, b, c){
    console.log(a, b, c);
}

f(1)(2)(3);
