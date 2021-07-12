let comm = require('inquirer');
const fs = require('fs');

comm.prompt([
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
        choices: ["Add Engineer" , "Add Intern" , "End Program"],
}
// {
//     type:'checkbox',
//         message:"What languages do you know?",
//         name: 'stack',
//         choices: ["HTML","CSS","JAVASCRIPT","MySQL"],
// },
// {
//     type:'list',
//         message:"What is your preferred method of communication?",
//         name: 'communication',        
//         choices: ["email", "text", "phone"],
// }


])
.then((response) => {
    const html = `         `;
    fs.writeFile("index.html", html, (err) => 
    err ? console.log(err) : console.log('Success!'));
    const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
    fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) => 
    err ? console.log(err) : console.log('Success!'));
  });


  