const Employee = require('./Employee.js');

class Engineer extends Employee {
  constructor(Name, ID, Email, Github) {
    super(Name, ID, Email);
    this.Github = Github
  }

  getGithub(){
    return this.Github;
  }

  getRole(){
    return "Engineer";
  }
}
module.exports = Engineer;