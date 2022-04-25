const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

//const Employee = require('../Lib/Employee.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');
const TeamArray = [];
const GenHTML = require('./GenHTML.js');
const genHTML = require('./GenHTML.js');
let TeamComplete = false;
const validateinput = (userinput) =>{
    if (userinput ===""){
        return "please answer before proceeding";
    }else{
        return true;
    }
    };
const init = async () => {
    await createManager();
    while (!TeamComplete){
        const typeofemployee = [
            {
                type: 'list',
                name: 'employeeType',
                message: 'What level of Employee would you like to add?',
                choices: ["Manager", "Intern", "Engineer", "Team Complete"],
              },

        ];
    
const {employeeType} = await inquirer.prompt(typeofemployee);
if (employeeType === "Team Complete") {
    TeamComplete = true;
}else{
    if (employeeType === "Intern"){
        await addIntern();
    }
    if (employeeType === "Engineer"){
        await addEngineer();
    }
    }
}

const HTML = genHTML(employees);
fs.writeFileSync("employee-roster.html", HTML, (err) => {
    if (err){
        console.log(err);
    }else{
        console.log("File Created");
    }
});
};


const managerQuestions = [
    
      {
        type: 'input',
        name: 'Name',
        message: 'What is your name?',
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is your Employee ID?',
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your Office Number?',
      },
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(managerAnswers);

    employees.push(manager);
      
      
   /* ]).then(addEmployee => {
        switch(addEmployee.list) {
            case "Manager":
                addManager();
                break;
            case "Intern":
                addIntern();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Team Complete":
                buildTeam();
                break;
        }
    }*/

)
/*add new manager
    function addManager(){
        inquirer.prompt([
        {
            type: "input",
            name: "ManagerOfficeNumber",
            message: "What is this Manager's Office Number?",
        },
    
        ])
            const NewManager = NewManager (
                answers.name,
                answers.id,
                answers.email,
                answers.ManagerOfficeNumber,
            );
            TeamArray.push(NewManager);
            
    }
*/

//add new engineer
    function addEngineer(){
    inquirer.prompt([
    {   
        type: "input",
        name: "Github",
        message: "What is your Github username?",

    }, 

    ])
        const NewEngineer = NewEngineer (
            answers.name,
            answers.id,
            answers.email,
            answers.Github,
        );
        TeamArray.push(NewEngineer);
        }

//add new intern
function addIntern(){
    inquirer.prompt([
     {
         type: "input",
         name: "school",
         message: "What school do you go to?",
     },   
    ])
        const NewIntern = NewIntern (
            answers.name,
            answers.id,
            answers.email,
            answers.school,
        );
        TeamArray.push(NewIntern);
        }
        
        
//team members complete
function buildTeam(){
    fs.writeFileSync('./dist/Roster.html'), GenHTML(TeamArray), "utf-8"

}
}

const data = 'Hello Node.js';
fs.writeFile('message.txt', data, (err) => {
  if (err) throw err;
  console.log('Ready to view your team!');
  //file written successfully
});
    
    /*function(err){
    if (err) {
        console.log(err);
    }
    else{
        console.log('addedData');
    }
    }
}}*/

/*try {
    fs.writeFileSync(path, data,{flag:'a+'});   //'a+' is append mode
    console.log("File written successfully");
  } catch(err) {
    console.error(err);
  }
  console.log("-----------------------------------------------");
  try{
  const data = fs.readFileSync(path,{encoding: "utf8"}); 
    console.log("File content is as follows:");
    // Display the file data 
    console.log(data); 
  }catch(err){
  console.log(err);
  }*/