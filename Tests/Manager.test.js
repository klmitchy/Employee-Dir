const Test = require('jest');
const Managerfile = require('./Lib/Manager.js');
const Manager = NewManager ("Bob", "123", "bob@hotmail.com", "987");

test ("Make sure constructor will grab values for new manager OBJECT",()=>{
    expect(NewManager.Name).toBe("Bob");
    expect(NewManager.ID).toBe("123");
    expect(NewManager.Email).toBe("bob@hotmail.com");
    expect(NewManager.ManagerOfficeNumber).toBe("987");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(NewManager.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(NewManager.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(NewManager.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the manager office number is grabbed from getOfficeNumber METHOD", ()=>{
    expect(NewManager.getManagerOfficeNumber().toBe("987"));
});

test ("MAke sure the role is grabbed from the getRole METHOD",()=>{
    expect(NewManager.getRole().toBe("Manager"));
});

module.export = Manager