// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from './utils/generateMarkdown.js'

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: "what is the title of your project?",
        name: "title"
    },
    {
        type: 'input',
        message: 'Please enter a description of your project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'what are the instillation instructions?',
        name: 'instillation'
    },
    {
        type: 'input',
        message: 'what is the usage for your project?',
        name: 'usage'
    },
    {
        type: 'input',
        message: " what are the contribution guidelines?",
        name: 'contribution'
    },
    {
        type: 'input',
        message: "What tests were done on the project?",
        name: 'tests'
    },
    {
        type: 'input',
        message: "what is your Github link?",
        name: 'github'
    },
    {
        type: 'input',
        message: 'what is your email?',
        name: 'email'
    },
    {
        type: 'list',
        message: 'please select your license',
        name: `license`,
        choices: ['MIT', 'GPL 3.0', 'Apache 2.0 license', 'none']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdownItems = generateMarkdown(data);
    fs.writefile(fileName, markdownItems, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Your README has been generated!')
        }
    })

};


// TODO: Create a function to initialize app

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            writeToFile("README.md", data);
        })
        .catch((error) => {
            console.error(`there was an error generating the prompt:`, error);
        });
}





// Function call to initialize app
init();
