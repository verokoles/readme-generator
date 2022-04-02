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

//ask for steps on how installation worked
{
    type: "input",
    name: "installation",
    message: "What steps did you take to install?"
},
//askk for username
{
    type: "input",
    name: "github",
message: "What is your GitHub username?"
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
