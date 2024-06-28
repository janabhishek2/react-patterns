class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(name) {
        if(typeof name !== "string") {
            throw new Error("Not a valid fullname");
        }
        const [fname, lname, ...rest] = name.trim().split(" ");
        if(fname && lname && rest.length === 0) {
            this.firstName = fname;
            this.lastName = lname;
        } else {
            throw new Error("Not a valid fullname")
        }
    }
}

const user = new User("Abhishek", "Jan");