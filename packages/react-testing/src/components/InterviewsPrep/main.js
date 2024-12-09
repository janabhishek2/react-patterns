// method: using prototype funcitons

function Employee(name, id) {
    this.name = name;
    this.id = id;
}

Employee.prototype.getDetails = function() {
    console.log(`Employee name is ${this.name} and id is ${this.id}`);
}

function Manager(params) {
    Employee.call(this, ...arguments);
}

// first extend then add properties
// this wont be added to prototype
Manager.prototype.test = 'test';

// Extend the employee class and re-assign the manager constructor
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

// add methods for Manager class
Manager.prototype.getManagerDetails = function() {
    console.log("Manager is", this.name);
}
const mgr = new Manager("abhishek", 123);
console.log(mgr);



// Manager.prototype = {
//     ...Employee.prototype,
//     ...Manager.prototype,
//     constructor: Manager
// }


// const mgr = new Manager("Abhishek", 123);
// console.log(mgr);

// function Manager(params) {
//     Employee.apply(this, arguments);
//     console.log("This is manager constructor");
// }

// Manager.prototype.getManagerInfo = () => {
//     console.log('Manager info');
// }

// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// const mgr = new Manager("Bhakti Gujar", 333);
// method: using prototypes

// const employee = {
//     name: "Abhishek",
//     id: 123,
//     salary: 300
// };

// const manager = {
//     department: "CSD"
// }

// manager.__proto__ = employee;

// class Employee {
//     salary = null;
//     constructor(name, id) {
//         this._name = name;
//         this._id = id;
//     }

//     get details() {
//         return `Employee has name: ${this._name}, id: ${this._id} and salary as ${this.salary}$`;
//     }

//     get salary() {
//         return this.salary;
//     }

//     set salary(sal) {
//         this.salary = sal;
//     }
// };

// class Manager extends Employee {
//     constructor(name, id) {
//         super(name, id);
//     }

//     department = null;

//     set department(dept) {
//         this.department = dept;
//     }

//     get department() {
//         return this.department;
//     }
// }

// const manager = new Employee("Rakesh", 23);

// manager.department = "CSD";

// console.log(manager.department);
