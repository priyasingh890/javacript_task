//a Define the Employee Class:

// Define a class named Employee that takes parameters for name, email, age, department, position, and salary.

class Employee {

    constructor( name, email, age, department, position, salary ) {
        this.name = name;
        this.email = email;
        this.age = age;
        this.department = department;
        this.position = position;
        this.salary = salary;
    };
    
   introduce() {
        console.log (`${this.name},${this.position}`);
    };
    
    displaySalary() {
        console.log(`" Salary : $${this.salary} "`);
    };
};

//Inside the class's constructor, set these parameters as properties of the new object.
const employee_name = new Employee("Raja", "rajasingh21@navgurukul.org", 29, "Software developer", "frontend developer", 600000);
console.log( employee_name );

//Add a method named displaySalary inside the class that logs the employee's salary formatted as a string, e.g., "Salary: $5000".
employee_name.displaySalary();

// Create and Log Employee Objects:
//Create an object named newEmployee with properties representing a new employee's name, email, age, department, position, and salary. Log this object to the console.
const newEmployee = new Employee( "Rahul", "Rahulsingh21@navgurukul.org", 24, "software developer", "backend developer", 700000 );
console.log(newEmployee);

//Create another object named manager with properties representing a manager. Log this object to the console.
const manager = new Employee( "Saloni", "saloni@21navgurukul.org", 20, "Software developer", "frontend developer", 300000 );
console.log(manager);

// Call Methods on Employee Objects:
//Call the introduce method on the newEmployee object to log a greeting with the employee's name
 newEmployee.introduce();

//Call the displaySalary() method on the manager object to log the salary details
manager.displaySalary();
