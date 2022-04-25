//const Test = require('jest');
const Intern = require('../Lib/Intern.js');
const intern = new Intern ("Bob", "123", "bob@hotmail.com", "UofMN");

test ("Make sure constructor will grab values for new employee OBJECT",()=>{
    expect(intern.name).toBe("Bob");
    expect(intern.id).toBe("123");
    expect(intern.email).toBe("bob@hotmail.com");
    expect(intern.school).toBe("UofMN");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(intern.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(intern.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(intern.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the school value is grabbed from getSchool METHOD",()=>{
    expect(intern.getSchool().toBe("UofMN"));
})

test ("MAke sure the role is grabbed from the getRole METHOD",()=>{
    expect(intern.getRole().toBe("Intern"));
});

module.exports = Intern
