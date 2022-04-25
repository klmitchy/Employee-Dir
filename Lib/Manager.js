const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(Name, ID, Email, ManagerOfficeNumber) {
    super(Name, ID, Email);
    this.ManagerOfficeNumber = ManagerOfficeNumber;
  }

getManagerOfficeNumber(){
  return this.ManagerOfficeNumber;
}

getRole() {
  return "Manager";
}
}

module.exports = Manager;
  