//const Test = require('jest');
const Employee = require('../Lib/Employee.js');
const employee = new Employee("Bob", "123", "bob@hotmail.com");


test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(employee.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(employee.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(employee.getEmail().toBe("bob@hotmail.com"));
});

test ("MAke sure the right role is grabbed from the getRole METHOD",()=>{
    expect(employee.getRole().toBe("Employee"));
});

test ("Make sure constructor will grab values for new employee OBJECT",()=>{
    expect(employee.Name).toBe("Bob");
    expect(employee.ID).toBe("123");
    expect(employee.Email).toBe("bob@hotmail.com");
});

module.exports = Employee
