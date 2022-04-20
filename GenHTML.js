const genHTML = (data) =>
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

      <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
        <div class="card-header">${Manager.Name}</div>
        <div class="card-body">
          <h5 class="card-title">${Manager.ID}</h5>
          <p class="card-text">${Manager.Email}</p>
          <p class="card-text">${Manager.ManagerOfficeNumber}</p>
        </div>
    
</body>
</html>`




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