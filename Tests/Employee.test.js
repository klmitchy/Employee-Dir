const Test = require('jest');
const Employee = require('./Employee.js');
const Employee = NewEmployee ("Bob", "123", "bob@hotmail.com");

test ("Make sure constructor will grab values for new employee OBJECT",()=>{
    expect(Employee.Name).toBe("Bob");
    expect(Employee.ID).toBe("123");
    expect(Employee.Email).toBe("bob@hotmail.com");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(Employee.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(Employee.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(Employee.getEmail().toBe("bob@hotmail.com"));
});

test ("MAke sure the role is grabbed from the getRole METHOD",()=>{
    expect(Employee.getRole().toBe("Employee"));
});


