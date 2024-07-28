const person = {
    name: "Maxi"
};

const persons = new WeakSet([person]);

// person is garbage collected
person = null;

// persons will not refer to person now.
console.log(persons);
