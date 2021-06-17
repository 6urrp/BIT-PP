class Person {
    constructor(name, surname) {
        this.name = name
        this.surname = surname
    }
}



class Employee extends Person { 
    constructor(name, surname, job, salary) {
        super(name, surname)

        this.job = job
        this.salary = salary
    }

    getData() {
        return this.name + " " + this.surname + ", " + this.salary
    }

    getSalary() {
        return this.salary
    }
    
    increaseSalary() {
        this.salary += (this.salary * 0.1)
    }
}



class Developer extends Employee {
    constructor (name, surname, job, salary, specialization) {
        super(name, surname, job, salary)

        this.specialization = specialization
    }

    getSpecialization() {
        return this.specialization
    }
}



class Manager extends Employee {
    constructor(name, surname, job, salary, specialization, department) {
        super(name, surname, job, salary, specialization)

        this.department = department
    }

    getDepartment() {
        return this.department
    }

    changeDepartment(dep) {
        this.department = dep || "undefined"
    }
}




var per = new Person("Jon", "Thron");
var empl = new Employee("Jon", "Thron", "Doctor", 1000);
var dev = new Developer("Jon", "Thron", "Doctor", 1000, "Dermatologists")
var manager = new Manager("Jon", "Thron", "Doctor", 1000, "Dermatologists", "Dermatology")
console.log(per);
console.log(empl);
console.log(dev.getSpecialization());
console.log(dev.getSalary());
console.log(manager.changeDepartment("Emergency Medicine"));
console.log(manager);