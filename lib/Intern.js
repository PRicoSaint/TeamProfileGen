const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){
        super(name, id, email, "Engineer");
        this.school = school;
    }

    getSchool(){
        console.log(`School: ${this.school}`)
        return this.school;
    }
}