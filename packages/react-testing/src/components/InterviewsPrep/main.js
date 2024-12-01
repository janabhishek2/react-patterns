class Employee {
    salary = null;
    constructor(name, id) {
        this._name = name;
        this._id = id;
    }

    get details() {
        return `Employee has name: ${this._name}, id: ${this._id} and salary as ${this.salary}`;
    }
};

const e1 = new Employee("Abhishek", 123);

console.log(e1.details);
