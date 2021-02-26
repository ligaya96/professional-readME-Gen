// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")
const util = require('util');

const writeFilesync = util.promisify(fs.writeFile);

// TODO: Create an array of questions for user input
const readmeQuestions = () =>
inquirer.prompt([
    {
        type: "input",
        name: "username",
        message: "What is your Github username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
    {
        type: "input",
        name: "title",
        message: "What is your project title?",
    },
    {
        type: "input",
        name: "description",
        message: "Write quick description of your project",
    },
    {
        type: "checkbox",
        name: "license",
        message: "What type of license is included in your project?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
])
.then(function(questions){
    const generateReadme = `
    <h1> ${questions.title} </h1>
    ## Table of contents
    -[Description]
    -[License]
    -[Badges]
    ## Description 
    ${questions.description}
    ## License
    ${questions.license}
   <p> My Githhub :   ${questions.username} <p>
   <p> Any Questions, Contact Me!  ${questions.email}<p>
    `
});

// TODO: Create a function to write README file
function writeToFile(filename, data) {}

// TODO: Create a function to initialize app
const init = () => {
  readmeQuestions()
   .then((questions) => writeFileSync("readME.md", generateReadme)
   .then(() => console.log("Successfully Generated a ReadME"))
   .catch((err) => console.error(err)));        
};

// Function call to initialize app
init();
