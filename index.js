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
    inquirer.prompt
}