// Base class: Employee
class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `${this.name} works in the ${this.department} department.`;
    }
}

// Subclass: Manager
class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${super.describe()} They manage a team of ${this.teamSize}.`;
    }
}

// Company class
class Company {
    constructor() {
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        const listEl = document.getElementById("employeeList");
        this.employees.forEach(emp => {
            const li = document.createElement("li");
            li.textContent = emp.describe();
            listEl.appendChild(li);
        });
    }
}

// Sample objects
const emp1 = new Employee("Alex", "Sales");
const emp2 = new Employee("Jamie", "Engineering");
const mgr1 = new Manager("Morgan", "Product", 5);

// Instantiate company and add employees
const usfCompany = new Company();
usfCompany.addEmployee(emp1);
usfCompany.addEmployee(emp2);
usfCompany.addEmployee(mgr1);

// Display in browser
usfCompany.listEmployees();
