const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email, "Engineer");
        this.github = github;
    }

    getGithub(){
        console.log(`Github: ${this.github}`)
        return this.github;
    }
}