// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
// TODO: Create an array of questions for user input
const questions = [
    inquirer
    .prompt ([
        {
            type: 'input',
            message: "what is the title of your project?",
            name: "project title"
        },
        {
           type: 'input',
           message: 'Please enter a description of your project'
           name: "description" 
        },
        {
            type: 'input',
            message 'what are the instilation instructions?',
            name: 'instilation instructions'
        },
        {
            type: 'input',
            message:" what are the contribution guidelines?",
            name: 'contribution guidelines'
        },
        {
            type: 'input', 
            message: "What tests were done on the project?"
        }
    ])
    .then 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
