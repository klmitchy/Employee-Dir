const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(Name, ID, Email, Github) {
    super(Github);
    this.Github = Github
  }

  getGithub(){
    return this.Github;
  }

  getRole(){
    return "Engineer";
  }
}
module.export = Engineer