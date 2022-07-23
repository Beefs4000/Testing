const Employee = require("./Employees");

class Engineer extends Employee{

    constructor (id, email, name, gitHub){
        super(id, email, name,);
        this.gitHub = gitHub;

    }

    getGithub(){
        return this.gitHub;
    }

    getRole(){
        return 'Engineer';
    }
}

module.exports = Engineer;