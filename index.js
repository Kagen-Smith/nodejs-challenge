// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";

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
                message: 'please enter the table of contents',
                name: 'Toc'
            },
            {
                type: 'input',
                message: 'what are the instilation instructions?',
                name: 'instilation'
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
                choices:['MIT license, GPL 3.0 license, Apache 2.0 license']
            }
        ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writefile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('Your README has been generated!')
        }
    })
 
 };


// TODO: Create a function to initialize app

function init(writeToFile) {
    inquirer.prompt(questions)
    .then((answers) => {
        const data = `# ${answers.title}\n\n## Description\n${answers.description}\n\n## Table of Contents\n${answers.Toc}\n\n## Instilation Instructions\n${answers.isntilation}\n\n## Usage\n${answers.usage}\n\n## Contribution Guidelines\n${answers.contribution}\n\n## Test instructions\n${answers.tests}\n\n## About\n${answers.github}\n${answers.email}\n\n## License\n${answers.license}\n`;
        const fileName = 'README.md';
        writeToFile(fileName, data);
    })
    .catch((error) => {
        console.error(`there was an error generating the prompt:`, error);
    });
} 





// Function call to initialize app
init();
