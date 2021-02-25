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
    // {
    //     type: "options",
    //     name: "license",
    //     message: "What type of license is included in your project?",
    // },
]);
const generateHTML = (questions) =>
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>ReadME Generator</title>
</head>
<body>
    <div class="jumbotron">
        <h1> Professional ReadME Generator!</h1>
        <div class = "content">
                 <ul>
                     <li> Github Username: ${questions.username}</li>
                     <li> Email address: ${questions.email}</li>
                     <hi> ${questions.title}</hi>
                     <p> ${questions.description}</p>
                      //<li>What kind of license should your project have? ${questions.license}</li>
                       // Badges ${questions.badges}
                </ul>
         </div>
</body>
</html>`;

// // TODO: Create a function to write README file
// function writeToFile("generateMarkdown.js", data) {}

// TODO: Create a function to initialize app
const init = () => {
  readmeQuestions()
   .then((questions) => writeFileSync("index.html", generateHTML)
   .then(() => console.log("Successfully Generated a ReadME"))
   .catch((err) => console.error(err)));        
};

// Function call to initialize app
init();
