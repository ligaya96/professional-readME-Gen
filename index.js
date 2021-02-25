// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs")

// TODO: Create an array of questions for user input
const questions = () =>
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
                <li>
                     <p> Github Username: ${questions.username}</p>
                     <p> Email address: ${questions.email}</p>
                     <p> ${questions.title}</p>
                     <p> ${questions.description}</p>
                    //  <p>What kind of license should your project have? ${questions.license}</p>
                    // Badges ${questions.badges}
                </li>
            </ul>
         </div>
</body>
</html>`;

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
