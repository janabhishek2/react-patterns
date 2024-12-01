const employee = {
    name: "Abhishek",
    id: 123,
    salary: 300
};

const manager = {
    department: "CSD"
}

manager.__proto__ = employee;

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
