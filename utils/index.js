// Inquirer
const inquirer = require("inquirer");
const fs = require("fs")
const util = require('util');

//  prompting User Questions 
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
    {
        type: "input",
        name: "contributors",
        message: "Name any contributors" 
    },
    {
        type: "input",
        name: "installation",
        message: "How do you install your project?: ",
    }
])
const generateReadme = (questions) => `
    <h1> ${questions.title} </h1>

    ## Table of contents
    -[Description](#description)
    -[License](#license)
    -[Contributers](#contributors)
    -[Installtion Process]
    
    ## Project Description 
   <p> ${questions.description} </p>
    ## Contributors
   <h2> ${questions.contributors} </h2>

    ## License
     <2> Licensed: ${questions.license} </h2>
     ![badge](https://img.shields.io/badge/license-${questions.license}-blueviolet)
     
    ## Installtion Process
    <h2>${questions.installation} </h2>

   <h2> My Githhub : ${questions.username} (http://github.com/ ${questions.username}) </h2>
   <h2> Any Questions??, Contact Me! ${questions.email}</h2>
    `
// Writing the file (promise)
const writeFileAsync = util.promisify(fs.writeFile);

// using a promise to run the application
const init = () => {
  readmeQuestions()
   .then((questions) => writeFileAsync("readME.md", generateReadme(questions))
   .then(() => console.log("Successfully Generated a ReadME"))
   .catch((err) => console.error(err)));        
};

// Function call to initialize app
init();
