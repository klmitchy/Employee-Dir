const inquirer = require('inquirer');
const jest = require('jest')
const path = require("path");
const fs = require('fs');

const Employee = require('./Employee.js').default
const Engineer = require('./Engineer.js');
const Intern = require('./Intern.js');
const Manager = require('./Manager.js');
const TeamArray = [];

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
        const FreshManager = NewManager (data.ManagerID, data.ManagerOfficeNumber);
        TeamArray.push(FreshManager);
        addCards();
    }),


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

}

function addCards()