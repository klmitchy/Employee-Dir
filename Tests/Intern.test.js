const Test = require('jest');
const Internfile = require('./Lib/Intern.js');
const Intern = NewIntern ("Bob", "123", "bob@hotmail.com", "UofMN");

test ("Make sure constructor will grab values for new employee OBJECT",()=>{
    expect(Intern.Name).toBe("Bob");
    expect(Intern.ID).toBe("123");
    expect(Intern.Email).toBe("bob@hotmail.com");
    expect(Intern.School).toBe("UofMN");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(Intern.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(Intern.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(Intern.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the school value is grabbed from getSchool METHOD",()=>{
    expect(Intern.getSchool().toBe("UofMN"));
})

test ("MAke sure the role is grabbed from the getRole METHOD",()=>{
    expect(Intern.getRole().toBe("Intern"));
});

module.exports = Intern
