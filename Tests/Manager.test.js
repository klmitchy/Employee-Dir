//const Test = require('jest');
const Manager = require('../Lib/Manager.js');
const manager = new Manager ("Bob", "123", "bob@hotmail.com", "987");

test ("Make sure constructor will grab values for new manager OBJECT",()=>{
    expect(manager.name).toBe("Bob");
    expect(manager.id).toBe("123");
    expect(manager.email).toBe("bob@hotmail.com");
    expect(manager.managerofficenumber).toBe("987");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(manager.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(manager.getId().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(manager.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the manager office number is grabbed from getOfficeNumber METHOD", ()=>{
    expect(manager.getManagerOfficeNumber().toBe("987"));
});

test ("MAke sure the role is grabbed from the getRole METHOD",()=>{
    expect(manager.getRole().toBe("Manager"));
});

module.export = Manager