// TODO: Include packages needed for this application
import inquirer from "inquirer";
import fs from "fs";
import { stderr } from "process";
// TODO: Create an array of questions for user input
const questions = [
    inquirer
        .prompt([
            {
                type: 'input',
                message: "what is the title of your project?",
                name: "project title"
            },
            {
                type: 'input',
                message: 'Please enter a description of your project',
                name: 'description'
            },
            {
                type: 'input',
                message: 'what are the instilation instructions?',
                name: 'instilation instructions'
            },
            {
                type: 'input',
                message: " what are the contribution guidelines?",
                name: 'contribution guidelines'
            },
            {
                type: 'input',
                message: "What tests were done on the project?",
                name: 'tests'
            }
        ])
        .then
];

// TODO: Create a function to write README file
fs.writeFile('README.md', questions, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('README.md file created successfully!');
});


// TODO: Create a function to initialize app
const { exec } = require(`inquirer`)
function init() {
    exec(`npm init -y`, (error, stderr) => {
        if (error) {
            console.error(`There was an error initializing Node.js app: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`There was an error initializing Node.js app: ${stderr}`);
            return;
        }
        console.log(`Node.js app was initialized successfully!`);
    });
} 





// Function call to initialize app
init();
