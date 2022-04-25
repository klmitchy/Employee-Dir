const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

//const {Employee} = require('./Lib/Employee.js');
const {Engineer} = require('./Lib/Engineer.js');
const {Intern} = require('./Lib/Intern.js');
const {Manager} = require('./Lib/Manager.js');
const TeamArray = [];
const GenHTML = require('./GenHTML.js');

const questions = async () => {
    const answers = await inquirer

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
      {
        type: 'list',
        name: 'AddEmployee',
        message: 'What level of Employee would you like to add?',
        choices: ["Manager", "Intern", "Engineer", "Team Complete"],
      }
      
    ]).then(addEmployee => {
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
    }

)
//add new manager
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
    fs.writeFileSync('dist/Roster.html'), GenHTML({...answers}), function(err){
    if (err) {
        console.log(err);
    }
    else{
        console.log('addedData');
    }
    }
}}