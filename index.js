// TODO: Include packages needed for this application
const inquirer = require("inquirer")
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")


// TODO: Create an array of questions for user input
// ask for name of project
const questions = [{
    type: "input",
    name: "title",
    message: "Please enter your project name"
},
//ask for description
{
    type: "input",
    name: "description",
    message: "Enter a description of your project"
},

//ask for steps on how installation worked (2)
{
    type: "input",
    name: "installation",
    message: "What command should be given to install?",
    default: "npm install, npm require",
},
{
    type: "input",
    name: "tests",
    message: "What command should be run to test the application?",
    default: "npm test",
},
//contributions to project (users) 
{
    type: "input",
    name: "contributing",
    message: "What is important to know about contributing to the project?",
},
// usage guidelines are asked and input states simple answer
{
    type: "input",
    name: "usage",
    message: "Anything a user should know about using this repo?",
},
//askk for username and email for user to reach out with questions
{
    type: "input",
    name: "github",
    message: "What is your GitHub username?"
},

{
    type: "input",
    name: "email",
    message: "What is your email?"
},
//license
{
    type: "list",
    name: "license",
    message: "What license would you like to choose for your project?",
    choices: [
        "MIT", "Apache-2.0", "GNU-LGPLv3", "Mozilla Public", "The Unlicense"]
}]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(fileName)
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers)
            // fileName becomes README and data becomes template that returns when all data is entered
            const template = generateMarkdown(answers)
            writeToFile("README.md", template)
            console.log(generateMarkdown(answers))

        })
}

// Function call to initialize app
init();
