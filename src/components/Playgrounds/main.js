const ringo = {
    name: "Ringo",
    greet: function(greeting) {
        console.log(`${ringo.name} says ${greeting}`);
    }
};

const george = {
    name: "George"
};

//  apply can be called on array like objects: Array, Iterable, etc.
ringo.greet.apply(george, ["Bye"]);