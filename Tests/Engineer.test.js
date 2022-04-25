//const Test = require('jest');
const Engineer = require('../Lib/Engineer.js');
const engineer = new Engineer ("Bob", "123", "bob@hotmail.com", "bobby@github");

test ("Make sure constructor will grab values for new employee OBJECT",()=>{
    expect(engineer.name).toBe("Bob");
    expect(engineer.id).toBe("123");
    expect(engineer.email).toBe("bob@hotmail.com");
    expect(engineer.github).toBe("bobby@github");
});

test ("Make sure I can get the name value from the getName METHOD",()=>{
    expect(engineer.getName().toBe("Bob"));
});

test ("Make sure the ID value is grabbed from the getID METHOD",()=>{
    expect(engineer.getID().toBe("123"));
});

test ("Make sure the Email value is grabbed from the getEmail METHOD",()=>{
    expect(engineer.getEmail().toBe("bob@hotmail.com"));
});

test ("Make sure the gitbub uswername value is grabbed from getGithub METHOD",()=>{
    expect(engineer.getSchool().toBe("bobby@github"));
})

test ("MAke sure the engineer role is grabbed from the getRole METHOD",()=>{
    expect(engineer.getRole().toBe("Engineer"));
});

module.export = Engineer