const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Include packages needed for this application
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please describe your project.'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Explain how to install your project.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Give a description of your project.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How should this project be used?',
  },
  {
    type: 'input',
    name: 'contributers',
    message: 'Who were the contributers to your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Which license would you like to use?',
    choices: ['N/A', 'MIT License', 'GNU General Public License v3.0', 'Apache Licence 2.0', 'Mozilla Public License 2.0', 'The Unlicense']
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub ID?'
  }
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Sucessfully created README.md!"));
}
// // TODO: Create a function to initialize app
function init() { 
inquirer
  .prompt(questions)
  .then((answers) => {
    const readMeContent = generateMarkdown(answers);
    writeToFile('./output/README.md', readMeContent);
  });
}
// // Function call to initialize app
init();