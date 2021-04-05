// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer
    .prompt([
        {
            type: 'input',
            message: 'Enter your Github username',
            name: 'username'
        },
        {
            type: 'input',
            message: 'Enter your email',
            name: 'email'
        },
        {
            type: 'input',
            message: 'Enter title of project',
            name: 'title'
        },
        {
            type: 'input',
            message: 'Enter description of the project',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Enter installation instructions',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'Enter usage instructions',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Enter collaborators if any',
            name: 'credits'
        },
        {
            type: 'input',
            message: 'Enter badges if any',
            name: 'badges'
        },
        {
            type: 'input',
            message: 'Enter features of the project',
            name: 'features'
        },
    ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
promptUser();
