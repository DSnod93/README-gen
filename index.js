// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const { title, features } = require('process');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                message: 'Enter your Github username',
                name: 'username',
                validate: user => {
                    if (user) {
                        return true;
                    } else {
                        console.log('Please enter your Github username');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter your email',
                name: 'email',
                validate: email => {
                    if (email) {
                        return true;
                    } else {
                        console.log('Please enter your email');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter title of project',
                name: 'title',
                validate: title => {
                    if (title) {
                        return true;
                    } else {
                        console.log('Please enter a project title');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter description of the project',
                name: 'description',
                validate: description => {
                    if (description) {
                        return true;
                    } else {
                        console.log('Please enter your project description');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter installation instructions',
                name: 'installation',
                validate: installation => {
                    if (installation) {
                        return true;
                    } else {
                        console.log('Please enter installation instructions');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                message: 'Enter usage instructions',
                name: 'usage',
                validate: usage => {
                    if (usage) {
                        return true;
                    } else {
                        console.log('Please enter usage instructions for your project');
                        return false;
                    }
                }
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
                name: 'features',
                validate: features => {
                    if (features) {
                        return true;
                    } else {
                        console.log('Please enter features of your project');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'license',
                message: 'Please enter license type',
                choices: ['MIT', 'Perl', 'ISC']
            },
            {
                type: "input",
                message: 'Enter any test cases if any',
                name: "test"
            }
        ])
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    promptUser().then(answers => {
        const response = generateMarkdown(answers);
        console.log('Complete!');
        console.log(answers);

        writeToFile('README.md', response);
    })
}

// Function call to initialize app
init();
