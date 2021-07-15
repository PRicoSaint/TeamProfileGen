// Engineer script
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){
        super(name, id, email);
        this.github = github;
        this.role =  "👓 Engineer";
    }

    getGithub(){
        console.log(`Github: ${this.github}`)
        return this.github;
    }
}

module.exports = Engineer;
