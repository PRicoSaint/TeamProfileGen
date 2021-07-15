// Loads required modules and classes
let inquirer = require('inquirer');
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// Sets up global variables so they can referenced in later functions.
var boss = [];
var team = [];
// Prompt is initiated, starting with asking Manager for input.
inquirer.prompt([
    {
        type:'input',
        message:"Hello! Welcome to the Team Profile generator! \n As team manager, What is your name?",
        name: 'name',

},
{
    type:'input',
        message:"What is the team manager's employee ID?",
        name: 'id',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,

},
{
    type:'input',
        message:"What is the team manager's email address?",
        name: 'email',
},
{
    type:'input',
    message:"What is the team manager's office number?",
    name: 'officeNumber',
    validate(value) {
        const pass = value.match(
          /^([01]{1})?[-.\s]?\(?(\d{3})\)?[-.\s]?(\d{3})[-.\s]?(\d{4})\s?((?:#|ext\.?\s?|x\.?\s?){1}(?:\d+)?)?$/i
        );
        if (pass) {
          return true;
        }
  
        return 'Please enter a valid phone number';
      },

},
{

    type:'list',
        message:"What would you like to do next?",
        name: 'operation',
        choices: ["Add Engineer", "Add Intern", "Create Team Profile Page"],
}

])
.then((response) => {
    // Creates new object using Manager class
     boss = new Manager(response.name, response.id, response.email, response.officeNumber);
    // console.log(boss);
    // Checks to see what was the response in operation and either goes to engineer, intern or creates the HTML webb app.
    let nextStep = response.operation;
    nextOperation(nextStep);

  });


  
// This is the function that takes the response and takes the operation to decide what to do next.

  function nextOperation(nextStep){
      switch (nextStep){
          case "Add Engineer":
              console.log("You have chosen to enter a new Engineer.")
          addEngineer();
          break;
          case "Add Intern":
            console.log("You have chosen to enter a new Intern.")
          addIntern();
          break;
          case "Create Team Profile Page":
            console.log("Team Profile page will now be generated.")
          createHTMLPage();    
      }

  }

// Engineer has its own prompt because it has slightly different questions, namely the Github question.
  function addEngineer(){
    inquirer.prompt([
        {
            type:'input',
            message:"What is the name of the Engineer?",
            name: 'name',
    
    },
    {
        type:'input',
            message:"What is the employee's ID?",
            name: 'id',
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
              filter: Number,
    
    },
    {
        type:'input',
            message:"What is the employee's email address?",
            name: 'email',
    },
    {
        type:'input',
        message:"What is the engineer's Github?",
        name: 'github',
        
    
    },
    {
    
        type:'list',
            message:"What would you like to do next?",
            name: 'operation',
            choices: ["Add Engineer", "Add Intern", "Create Team Profile Page"],
    }
    
    ])
    .then((response) => {
        // Creates new Engineer object. Because I do not want future engineer inputs to overwrite this one, the object is pushed into the team array for future reference.
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        // console.log(engineer);
        team.push(engineer);
        let nextStep = response.operation;
        nextOperation(nextStep);
    
      }); 

  }
// The intern has its own set of prompts. It will be asked which school the intern attends.
  function addIntern(){
    inquirer.prompt([
        {
            type:'input',
            message:"What is the name of intern?",
            name: 'name',
    
    },
    {
        type:'input',
            message:"What is the employee ID?",
            name: 'id',
            validate(value) {
                const valid = !isNaN(parseFloat(value));
                return valid || 'Please enter a number';
              },
              filter: Number,
    
    },
    {
        type:'input',
            message:"What is the intern's email address?",
            name: 'email',
    },
    {
        type:'input',
        message:"What school does this intern attend?",
        name: 'school',
        
    
    },
    {
    
        type:'list',
            message:"What would you like to do next?",
            name: 'operation',
            choices: ["Add Engineer", "Add Intern", "Create Team Profile Page"],
    }
    
    ])
    .then((response) => {
// New intern object is created. This is also pushed into the team array, for future reference, allowing multiple interns to be ingressed.
        const intern = new Intern (response.name, response.id, response.email, response.school);
        // console.log(intern);
        team.push(intern);
        let nextStep = response.operation;
        nextOperation(nextStep);
    
      });

  } 
  
//   This is the final function that actually creates the html file for use by the manager/employee. It has hard coded manager card. Rest of cards are created as needed according to the number of objects in team array.
  function createHTMLPage(){
    // console.log(team);
    let finishedCard = [];
    team.forEach(team => { 
        // console.log("This is the role: " + team.role);
        // This checks to see if the object is an engineer or intern. It will then modify the card slightly to display the pertinent information.
        if (team.role == "👓 Engineer"){
        const card = ` 
        <div class="card" style="width: 18rem;">
        <div class="card-header ">
            <p>${team.name}</p>
            <p>${team.role}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${team.id}</li>
            <li class="list-group-item">Email: <a href="${team.email}">${team.email}</a></li>
            <li class="list-group-item">Github: <a href="https://github.com/${team.github}" target="_blank">${team.github}</a></li>
        </ul>
    </div>`
    // This pushes the card object in the array to later be called and displayed in the html file.
    finishedCard.push(card);
        }else if (team.role == "🎓 Intern"){
            const card = ` 
            <div class="card" style="width: 18rem;">
            <div class="card-header ">
                <p>${team.name}</p>
                <p>${team.role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team.id}</li>
                <li class="list-group-item">Email: <a href="${team.email}">${team.email}</a></li>
                <li class="list-group-item">School: ${team.school}</li>
            </ul>
        </div>`
        finishedCard.push(card);
        }
    });
    // console.log("This is for finished cards \n" + finishedCard);
    // This is the html document file inside template literals. It uses bootstrap for some styling and scripting.
    // It comes with manager already coded due to manager always being the 1st employee. The rest of the team is filled in with cards created on demand.
    const html = `
    <!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

    <title>Team Profile</title>
</head>

<body>
    <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
            <h1 class=text-light>My Team</h1>
        </div>
    </nav>
    <div class="row row-cols-1 row-cols-md-2 g-4">
        <div class="card" style="width: 18rem;">
            <div class="card-header primary">
                <p>${boss.name}</p>
                <p> ${boss.role}</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${boss.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${boss.email}">${boss.email}</a></li>
                <li class="list-group-item">Office number: ${boss.officeNumber}</li>
            </ul>
        </div>

    ${finishedCard}


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>        
    
    `;
    // Placed finished html file in dist folder. Reports success if it was successful.
        fs.writeFile("./dist/index.html", html, (err) => 
        err ? console.log(err) : console.log('Web page has been created successfully!!'));
  }

