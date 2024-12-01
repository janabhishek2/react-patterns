class Employee {
    salary = null;
    constructor(name, id) {
        this._name = name;
        this._id = id;
    }

    get details() {
        return `Employee has name: ${this._name}, id: ${this._id} and salary as ${this.salary}$`;
    }

    get salary() {
        return this.salary;
    }

    set salary(sal) {
        this.salary = sal;
    }
};

const e1 = new Employee("Abhishek", 123);
e1.salary = 300;

console.log(e1.details);
