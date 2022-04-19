class Employee {
  constructor(Name, ID, Email){
    this.Name = Name;
    this.ID = ID;
    this.Email = Email
  }

  getName(){
    return this.name
  }

  getID(){
    return this.ID
  }

  getEmail(){
    return Email
  }

  getRole(){
    return Employee
  }
  
questions = [
    inquirer
    .prompt([
      {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is your ID?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
      },
      
    ])
    
    .then((answers) => {
    
        fs.writeFile(path.join(__dirname, 'dist/index.html'), generateREADME({...answers}), function(err){
          if (err) {
              console.log(err);
          }
          else{
              console.log('addedData');
          }
      })
  })]
} 
  module.export=Employee