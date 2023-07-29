// packages required 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// questions for user
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
    name: 'test',
    message:'Please provide test instructions or notes: '
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

// function used to create readme file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Sucessfully created README.md!"));
}

// will run upon loading page
function init() { 
inquirer
  .prompt(questions)
  .then((answers) => {
    const readMeContent = generateMarkdown(answers);
    writeToFile('./output/README.md', readMeContent);
  });
}

// calls init function
init();