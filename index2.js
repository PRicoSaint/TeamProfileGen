let inquirer = require('inquirer');
const fs = require('fs');
let team = [];
inquirer.prompt([
    {
        type:'input',
        message:"Hello! Welcome to the Team Profile generator! \n As team manager, What is your name?",
        name: 'managerName',

},
{
    type:'input',
        message:"What is the team manager's employee ID?",
        name: 'teamManagerID',
        validate(value) {
            const valid = !isNaN(parseFloat(value));
            return valid || 'Please enter a number';
          },
          filter: Number,

},
{
    type:'input',
        message:"What is the team manager's email address?",
        name: 'managerEmail',
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
    team.push("manager");
    // const html = `         `;
    // fs.writeFile("index.html", html, (err) => 
    // err ? console.log(err) : console.log('Success!'));
    let filename = `manager.json`;
    fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) => 
    err ? console.log(err) : console.log('Manager Information Saved!'));
    let nextStep = response.operation;
    nextOperation(nextStep);

  });


  


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
        // const html = `         `;
        // fs.writeFile("index.html", html, (err) => 
        // err ? console.log(err) : console.log('Success!'));
        let filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
        fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) => 
        err ? console.log(err) : console.log(`${response.name}'s Information Saved!`));
        let engineerName = response.name;
        team.push(engineerName);
        let nextStep = response.operation;
        nextOperation(nextStep);
    
      }); 

  }

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
        message:"What is the intern's Github?",
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
        // const html = `         `;
        // fs.writeFile("index.html", html, (err) => 
        // err ? console.log(err) : console.log('Success!'));
        let filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
        fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) => 
        err ? console.log(err) : console.log(`${response.name}'s Information Saved!`));
        let internName = response.name;
        team.push(internName);
        let nextStep = response.operation;
        nextOperation(nextStep);
    
      });

  } 
  
  
  function createHTMLPage(){
    console.log(team);
    let manager = require('./manager.json');
    let card = [];
    for (i=1; i> team.length; i++){
        let teamMember = team[i];
        let teamMemberInfo = require(`./${teamMember}.json`);
        card = createEmployeeCard(teamMemberInfo);
    }
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
                <p>${manager.managerName}</p>
                <p>☕ Manager</p>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${manager.teamManagerID}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.managerEmail}">${manager.managerEmail}</a></li>
                <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul>
        </div>
        ${card}




    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"></script>
</body>

</html>        
    
    `;
        fs.writeFile("index.html", html, (err) => 
        err ? console.log(err) : console.log('Success!'));
  }


function createEmployeeCard(teamMemberInfo){
    let finishedcard = ` 
    <div class="card" style="width: 18rem;">
    <div class="card-header ">
        <p>${teamMemberInfo.name}</p>
        <p>👓 Engineer</p>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${teamMemberInfo.id}</li>
        <li class="list-group-item">Email: <a href="${teamMemberInfo.email}">${teamMemberInfo.email}</a></li>
        <li class="list-group-item">Github: <a href="https://github.com/${teamMemberInfo.github}" target="_blank">${teamMemberInfo.github}</a></li>
    </ul>
</div>`;
return finishedcard
}