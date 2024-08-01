// New features in JS

// optional chaining: to check if a property method exists? then call it else returns
// why: to prevent errors.
const user = {
    fname: "Abhishek",
    lname: "Jan",
    fullName: function() {
        return this.fname + " " + this.lname;
    }
}

// check if fname exists then set it to var
const fname = user?.fname;

const age = user?.age; // undefined

// call a function if it exists
user?.imaginaryFunction?.();