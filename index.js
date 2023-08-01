// packages required 
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// function used to create readme file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log("Sucessfully created README.md!"));
}

const sections = ['description', 'installation', 'usage', 'contributers', 'license', 'test', 'questions'];

const checklist = [
  {
    type: 'checkbox',
    name: 'choices',
    message: 'Which sections would you like to include in your README file?',
    choices: sections
  }
]

function init() {
  inquirer
    .prompt(checklist)
    .then((choices) => {
      const userChoices = choices.choices;
      console.log(choices.choices);
      makequestions(userChoices);
    });
}

const newquestions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
];
function makequestions(options) {
    if (options.includes('description')) {
    const description = {
      type: 'input',
      name: 'description',
      message: 'Please describe your project.'
      // default
    }
    newquestions.push(description);
  }
  if (options.includes('installation')) {
    const installation = {
      type: 'input',
      name: 'installation',
      message: 'Explain how to install your project.'
    }
    newquestions.push(installation);
  }
  if (options.includes('usage')) {
    const usage = {
      type: 'input',
      name: 'usage',
      message: 'How should this project be used?'
    }
    newquestions.push(usage);
  }
  if (options.includes('contributers')) {
    const contributers = {
      type: 'input',
      name: 'contributers',
      message: 'Who were the contributers to your project?',
    }
    newquestions.push(contributers);
  }
  if (options.includes('license')) {
    const license = {
      type: 'list',
      name: 'license',
      message: 'Which license would you like to use?',
      choices: ['N/A', 'MIT License', 'GNU General Public License v3.0', 'Apache Licence 2.0', 'Mozilla Public License 2.0', 'The Unlicense']
    }
    newquestions.push(license);
  }
  if (options.includes('test')) {
    const test = {
      type: 'input',
      name: 'test',
      message: 'Please provide test instructions or notes: '
    }
    newquestions.push(test);
  }
  if (options.includes('questions')) {
    const questions = [{
      type: 'input',
      name: 'email',
      message: 'What is your email address?'
    },
    {
      type: 'input',
      name: 'github',
      message: 'What is your GitHub ID?'
    }]
    newquestions.push(questions);
  }
  // console.log(newquestions);
  questionslist(newquestions);
}

// will run upon loading page
function questionslist(newquestions) { 
inquirer
  .prompt(newquestions)
  .then((answers) => {
console.log(answers);
    const readMeContent = generateMarkdown(answers);
    writeToFile('./output/README.md', readMeContent);
  });
}

// calls init function
init();