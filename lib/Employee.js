class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(){
        console.log(`Employee name: ${this.name}`);
        return this.name;
    }

    getId(){
        console.log(`Employee ID: ${this.id}`);
        return this.id;    
    }

    getEmail(){
        console.log(`Employee email: ${this.email}`);
        return this.email;
    }

    getRole(){
       if (this.role === null){
           return "Employee";
       }else{
           return this.role;
       }
        
    }

}

module.exports = Employee;