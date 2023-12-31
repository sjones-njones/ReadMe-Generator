// if statments render badge for license chosen
function renderLicenseBadge(license) { 
if (license === 'MIT License') {
  return 'https://img.shields.io/badge/License-MIT-yellow.svg'
} else if (license === 'GNU General Public License v3.0') {
  return 'https://img.shields.io/badge/License-GPLv3-blue.svg'
} else if (license === 'Apache Licence 2.0'){
  return 'https://img.shields.io/badge/License-Apache_2.0-blue.svg'
} else if (license === 'Mozilla Public License 2.0'){
  return 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg'
} else {
  return 'https://img.shields.io/badge/license-Unlicense-blue.svg'
}
}

// renders link for license chosen
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT'
} else if (license === 'GNU General Public License v3.0') {
  return 'https://www.gnu.org/licenses/gpl-3.0'
} else if (license === 'Apache Licence 2.0'){
  return 'https://opensource.org/licenses/Apache-2.0'
} else if (license === 'Mozilla Public License 2.0'){
  return 'https://opensource.org/licenses/MPL-2.0'
} else {
  return 'http://unlicense.org/'
}
}

//returns either link or empty string depending on license chosen
function renderLicenseSection(license) { 
 if (license==='N/A'){
  return "";
 };
  return `[![${license}](${renderLicenseBadge(license)})](${renderLicenseLink(license)})`
}

// layout for readme inputting the variables given by user
function generateMarkdown({ title, description, installation, usage, contributers, license, test, email, github }) {
if (description === undefined){ 
  description = 'N/A';
}

if (installation === undefined){ 
  installation = 'N/A';
}

if (usage === undefined){ 
  usage = 'N/A';
}

if (contributers === undefined){ 
  contributers = 'N/A';
}

if (license === undefined){ 
  license = 'N/A';
}

if (test === undefined){ 
  test = 'N/A';
}

if (email === undefined){ 
  email = 'N/A';
}

if (github === undefined){ 
  github = 'N/A';
}

  return `# ${title}
 
${renderLicenseSection(license)}

## Table of Contents

* [Description](/output/README.md/#description)

* [Installation](/output/README.md/#installation)

* [Usage](/output/README.md/#usage)

* [Contributing](/output/README.md/#contributing)

* [License](/output/README.md/#license)

* [Test](/output/README.md/#test)

* [Contact Information](/output/README.md/#contact-infomation)

## Description 

${description}

## Installation

${installation}

## Usage

${usage}

## Contributing

${contributers}

## License

${license}

## Test

${test}

## Contact Infomation

### In case of questions:

Please contact me at my e-mail: ${email}

Follow me on Github: ${github}`
}

module.exports = generateMarkdown;
