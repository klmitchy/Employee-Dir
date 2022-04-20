const inquirer = require('inquirer');
const jest = require('jest')
const path = require("path");
const fs = require('fs');

const Employee = require('./Lib/Employee.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');
const TeamArray = [];
const GenHTML = require('./GenHTML.js');

//const questions = () => {
    //return 
    inquirer.prompt([
    {
        type: 'list',
        name: 'AddEmployee',
        message: 'What level of Employee would you like to add?',
        choices: ["Manager", "Intern", "Engineer", "Team Complete"]
    }])
    .then(userChoice => {
        switch(userChoice.list) {
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
function addManager() {
    inquirer.prompt([
    {
        type: "input",
        name: "ManagerOfficeNumber",
        message: "What is this Manager's Office Number?",
    },

    ]).then(data =>{
        const FreshManager = NewManager (data.ManagerOfficeNumber);
        TeamArray.push(FreshManager);
        addCards();
    }),

//add new engineer
function addEngineer(){
    inquirer.prompt([
    {   
        type: "input",
        name: "Github",
        message: "What is your Github username?",

    }, 

    ]).then(data =>{
        const FreshEngineer = NewEngineer (data.Github);
        TeamArray.push(FreshEngineer);
        addCards();
    })
}}
//add new intern
function addIntern(){
    inquirer.prompt([
     {
         type: "input",
         name: "school",
         message: "What school do you go to?",
     },   
    ]).then(data =>{
        const FreshIntern = NewIntern (data.school);
        TeamArray.push(FreshIntern);
        addCards();
    })

}}
//team members complete
function buildTeam(){
    fs.writeFile(path.join(__dirname, 'dist/Roster.html'), GenHTML({...answers}), function(err){
    if (err) {
        console.log(err);
    }
    else{
        console.log('addedData');
    }
})
}

//function addCards()