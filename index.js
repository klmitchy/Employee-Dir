const inquirer = require('inquirer');
const jest = require('jest')
const path = require("path");
const fs = require('fs');

const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');

inquirer
.prompt([
    {
        type: 'list',
        name: 'AddEmployee',
        message: 'What level of Employee would you like to add?',
        choices: ["Manager", "Intern", "Engineer"]
    },

])

function addManager() {
    inquirer.prompt([
    {   type: "input",
        name: "ManagerName",
        message: "What is this Manager's name?",
    },
    {
        type: "input",
        name: "ManagerID",
        message: "What is this Manager's ID?",
    },
    {
        type: "input",
        name: "ManagerOfficeNumber",
        message: "What is this Manager's Office Number?",
    },

    ]).then(data =>{
        const NewManager = NewManager
    }
}

function addEngineer(){
    inquirer.prompt([
    {   
        type: "input",
        name: "Github",
        message: "What is your Github username?",


    }    
    ])
}