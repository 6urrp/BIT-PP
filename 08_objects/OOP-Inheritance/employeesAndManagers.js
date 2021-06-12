
function Person (name, surname) {
    this.name = name;
    this.surname = surname;
}

var person1 = new Person("Sandra", "Tasic");
console.log(person1);






function Employee (name, surname, job, salary) {
    Person.call(this, name, surname);
    this.job = job;
    this.salary = salary; 
}
Employee.prototype.getData = function () {
    return this.name + " " + this.surname + " " + this.salary;
}
Employee.prototype.getSalary = function () {
    console.log(this.salary);
}
Employee.prototype.increaseSalary = function () {
    this.salary += (this.salary * 0.1);
}

var emp1 = new Employee("Sandra", "Tasic", "frontend developer", 70000);
console.log(emp1.hasOwnProperty("name"));//zasto je true ako je nasledio?!
console.log(emp1.increaseSalary());
console.log(emp1);






function Developer (name, surname, job, salary, specialization) {
    Employee.call(this, name, surname, job, salary);
    this.specialization = specialization;
}
Developer.prototype = Object.create(Employee.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.getSpecialization = function () {
    console.log(this.specialization);
}


var dev = new Developer ("Sandra", "Tasic", "frontend developer", 70000, "JavaScript");
console.log(dev.getSpecialization()); //poziva se bez prototype!
console.log(dev.hasOwnProperty("getSpecialization")); //false
console.log(dev);




function Manager (name, surname, job, salary, department) {
    Employee.call(this, name, surname, job, salary);
    this.department = department;
}
Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.getDepartment = function () {
    console.log(this.department);
}
Manager.prototype.changeDepartment = function(department){
    this.department = department || "undefined";
}

var manager = new Manager ("Sandra", "Tasic", "developer", 70000, "HR");
console.log(manager.changeDepartment("javascript"));
console.log(manager);