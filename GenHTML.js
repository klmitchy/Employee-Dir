const generateTeam = (team) => {
    //console.log (team);
    const html = [];
    //console.log (html)
    const generateManager = manager => {
        let managerHtml = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${manager.name}</div>
        <div class="card-body">
          <h5 class="card-title">${manager.id}</h5>
          <p class="card-text">${manager.email}</p>
          <p class="card-text">${manager.managerofficenumber}</p>
          </div>
        `;
        html.push(managerHtml);
    }
    const generateEngineer = engineer => {
        let engineerHtml = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${engineer.name}</div>
        <div class="card-body">
          <h5 class="card-title">${engineer.id}</h5>
          <p class="card-text">${engineer.email}</p>
          <p class="card-text">${engineer.github}</p>
          </div>
        `;
        html.push(engineerHtml);
    }
    const generateIntern = intern => {
        let internHtml = `
        <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${intern.name}</div>
        <div class="card-body">
          <h5 class="card-title">${intern.id}</h5>
          <p class="card-text">${intern.email}</p>
          <p class="card-text">${intern.school}</p>
          </div>
        `;
        html.push(internHtml);
}

for (let i = 0; i<team.length; i++) {
    if (team[i].getRole() === "Manager") {
        generateManager(team[i]);
    }
    if (team[i].getRole() === "Engineer") {
        generateEngineer(team[i]);
    }
    if (team[i].getRole()=== "Intern") {
        generateIntern(team[i]);
    }
}
return html.join('');

module.exports = team =>{
return 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./dist/style.css">
    <title>Employee Team Roster</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>

      
    
</body>
</html>`

}}

/*const fs = require("fs");
const path = require ("path");
const Engineer = require("./Lib/Engineer");
const templates = path.resolve(__dirname, "../templates");
const genHTML = (TeamArray) => {
    const HTML = [];
    HTML.push(
        TeamArray
        .filter((TeamArray)=>TeamArray.getRole()==="Manager")
        .map((manager)=>renderManager(manager))
    );
    HTML.push(
        TeamArray
        .filter((TeamArray)=>TeamArray.getRole()==="Engineer")
        .map((Engineer)=>renderEngineer(Engineer))

    );
    HTML.push(
        TeamArray
        .filter((TeamArray)=>TeamArray.getRole()==="Intern")
        .map((Intern)=>renderIntern(Intern)) 
    )

return renderFullMarkdown(HTML.join(""));
};
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="./dist/style.css">
    <title>Employee Team Roster</title>
</head>
<body>
    <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">My Team</h1>
        </div>
      </div>

      
    
</body>
</html>`

module.exports = genHTML


/*1. Create file structure based on the readme.md file

2. Build out classes for each of the following:
    - Employee
        -name
        -id
        -email
        -getName()
        -getId()
        -getEmail()
        -getRole() -- return "Employee"
    - Manager
        -officeNumber
        -getRole() -- return "Manager"
    - Engineer
        -github (github username)
        -getGithub()
        -getRole() -- return "Engineer"
    - Intern
        -school
        -getSchool()
        -getRole() -- return "Intern"

3. Import all of your classes and dependencies into the index.js file

4. Create an array to store all of your employees

5. Create function to initialize the app, divide it up based on employee roles

    - All teams need at least one manager -- create a nested function to generate a manager with inquirer prompts
    - Create a new Manager object using the Manager class and the data from the inquirer prompts
    -Push that object to the array of employees

    - Do the same for Intern and Engineers

    - Use a prompt to ask if you'd like to create another employee or finish generating your team -- use conditionals for logic

    - Create a function that stops the inquirer prompts and generates the html page
        -Use fs to write file to dist folder

6. Create a helper function in your src folder to generate HTML file (similar to generateMarkdown in your README generator)
    - Generate employee cards for each type of employee, pass in the data from inquirer prompts
    - Create an array to store the html, and then push html for each employee into the array and return as a string at the end
    -Make sure you're exporting this function and importing it to your index file

Tests
    -A suite of tests for each class in your app*/