const inquirer = require('inquirer');
const path = require("path");
const fs = require('fs');

//const Employee = require('../Lib/Employee.js');
const Engineer = require('./Lib/Engineer.js');
const Intern = require('./Lib/Intern.js');
const Manager = require('./Lib/Manager.js');

const GenHTML = require('./GenHTML.js');
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "teamroster.html");
const TeamArray = [];
const validateinput = (userinput) =>{
    if (userinput ===""){
        return "please answer before proceeding";
    }else{
        return true;
    }
    };

const managerprompt = () => {
    return inquirer.prompt([
      {
          type: 'input',
          name: 'name',
          message: 'What is your name?',
          validate: validateinput,
      }, 
      {
        type: 'input',
        name: 'ID',
        message: 'What is your Employee ID?',
        validate: validateinput,
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
        validate: validateinput,
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your Office Number?',
        validate: validateinput,
      },
    ]).then(answers => {
        const manager = new Manager(answers.name, answers.ID, answers.Email, answers.officeNumber)
        TeamArray.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'employeeType',
            message: 'What level of Employee would you like to add?',
            choices: ["Manager", "Engineer", "Intern", "Team Complete"],
          },

    ]).then(userChoice => {
        switch(userChoice.employeeType) {
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
    });
};

const addEngineer = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: validateinput,
        }, 
        {
          type: 'input',
          name: 'ID',
          message: 'What is your Employee ID?',
          validate: validateinput,
        },
        {
          type: 'input',
          name: 'Email',
          message: 'What is your email?',
          validate: validateinput,
        },
        {
          type: 'input',
          name: 'github',
          message: 'What is your Github profile?',
          validate: validateinput,
        },

        
    ]).then(answers => {
        const engineer = new Engineer(answers.name, answers.ID, answers.Email, answers.github);
        TeamArray.push(engineer);
        promptMenu();
    })
};

const addIntern = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: validateinput,
        }, 
        {
          type: 'input',
          name: 'ID',
          message: 'What is your Employee ID?',
          validate: validateinput,
        },
        {
          type: 'input',
          name: 'Email',
          message: 'What is your email?',
          validate: validateinput,
        },
        {
          type: 'input',
          name: 'school',
          message: 'What school do you attend?',
          validate: validateinput,
        },

    ]).then(answers => {
        const intern = new Intern(answers.name, answers.ID, answers.Email, answers.school);
        TeamArray.push(intern);
        promptMenu();
    })
};

const buildTeam = () => {
    
    if (!fs.existsSync(OUTPUT_DIR)){
        fs.mkdirSync(OUTPUT_DIR) 
    }
    fs.writeFileSync(outputPath, GenHTML(TeamArray), "utf-8");
}

managerprompt();

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

/*let TeamComplete = false;

const init = async () => {
    await createManager();
    while (!TeamComplete){
        const typeofemployee = [
            

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

const HTML = genHTML(TeamArray);
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
        validate: validateinput,
      },
      {
        type: 'input',
        name: 'ID',
        message: 'What is your Employee ID?',
        validate: validateinput,
      },
      {
        type: 'input',
        name: 'Email',
        message: 'What is your email?',
        validate: validateinput,
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your Office Number?',
        validate: validateinput,
      },
    ];

    const managerAnswers = await inquirer.prompt(managerQuestions);

    const manager = new Manager(managerAnswers);

    TeamArray.push(manager);
    
const createEngineer = async () => {
    const engineerQuestions = [
        {
            type: 'input',
            name: 'Name',
            message: 'What is your name?',
            validate: validateinput,
            },
            {
            type: 'input',
            name: 'ID',
            message: 'What is your Employee ID?',
            validate: validateinput,
            },
            {
            type: 'input',
            name: 'Email',
            message: 'What is your email?',
            validate: validateinput,
            },
            {
            type: 'input',
            name: 'GitHub',
            message: 'What is your Github profile?',
            validate: validateinput,
            },
        ];
        
const engineerAnswers = await inquirer.prompt(engineerQuestions);

const engineer = new Engineer(engineerAnswers);

TeamArray.push(engineer);
        };

const createIntern = async () => {
    const internQuestions = [
            {
            type: 'input',
            name: 'Name',
            message: 'What is your name?',
            validate: validateinput,
            },
            {
            type: 'input',
            name: 'ID',
            message: 'What is your Employee ID?',
            validate: validateinput,
            },
            {
            type: 'input',
            name: 'Email',
            message: 'What is your email?',
            validate: validateinput,
            },
            {
            type: 'input',
            name: 'School',
            message: 'What University do you attend?',
            validate: validateinput,
            },
        ];

const internAnswers = await inquirer.prompt(internQuestions);

const intern = new Intern(internAnswers);

TeamArray.push(intern);
    };

init()
         
        
    
      
   /* ])*/


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

/*//add new engineer
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