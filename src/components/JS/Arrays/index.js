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

const fname = user?.fname;
console.log(fname);