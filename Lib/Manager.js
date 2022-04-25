const Employee = require('./Employee.js');

class Manager extends Employee {
  constructor(name, id, email, managerofficenumber) {
    super(name, id, email);
    this.managerofficenumber = managerofficenumber;
  }

getManagerOfficeNumber(){
  return this.managerofficenumber;
}

getRole() {
  return "Manager";
}
}

module.exports = Manager;
  