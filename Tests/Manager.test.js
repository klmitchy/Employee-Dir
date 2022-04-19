const Test = require('jest');
const Manager = require('./Manager.js');
const Manager = NewManager ("Bob", "123", "bob@hotmail.com", "987");

test ("Make sure constructor will grab values for new manager OBJECT",()=>{
    expect(Manager.Name).toBe("Bob");
    expect(Manager.ID).toBe("123");
    expect(Manager.Email).toBe("bob@hotmail.com");
    expect(Manager.ManagerOfficeNumber).toBe("987");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(Manager.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(Manager.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(Manager.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the manager office number is grabbed from getOfficeNumber METHOD", ()=>{
    expect(Manager.getManagerOfficeNumber().toBe("987"));
});

test ("MAke sure the role is grabbed from the getRole METHOD",()=>{
    expect(Manager.getRole().toBe("Manager"));
});

module.exports = Manager