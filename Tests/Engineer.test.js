const Test = require('jest');
const Engineerfile = require('../Lib/Engineer.js');
const Engineer = Engineer ("Bob", "123", "bob@hotmail.com", "bobby@github");

test ("Make sure constructor will grab values for new employee OBJECT",()=>{
    expect(Engineer.Name).toBe("Bob");
    expect(Engineer.ID).toBe("123");
    expect(Engineer.Email).toBe("bob@hotmail.com");
    expect(Engineer.Github).toBe("bobby@github");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(Engineer.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(Engineer.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(Engineer.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the gitbub uswername value is grabbed from getGithub METHOD",()=>{
    expect(Engineer.getSchool().toBe("bobby@github"));
})

test ("MAke sure the engineer role is grabbed from the getRole METHOD",()=>{
    expect(Engineer.getRole().toBe("Engineer"));
});

module.export = Engineer