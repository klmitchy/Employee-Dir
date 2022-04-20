const Employee = require('./Lib/Employee.js');

class Intern extends Employee {
  constructor(Name, ID, Email, School) {
    super(Name, ID, Email);
    this.School = School;
    
  }

getSchool(){
  return this.School;
}

getRole(){
  return "Intern"
}
}

module.export = Intern;