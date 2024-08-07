// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
  return '[![license: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]';
} else if (license === 'Apache 2.0') {
  return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]';
} else if (license === 'GPL 3.0') {
  return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]';
} else {
  return '';
}
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return '(https://opensource.org/licenses/MIT)';}
  else if (license === 'Apache 2.0') {
    return '(https://opensource.org/license/apache-2-0)';}
  else if (license === 'GPL 3.0') {
    return '(https://www.gnu.org/licenses/gpl-3.0)';}
    else {
      return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT') {
      return 'This project uses the MIT license'
    } else if (license === 'Apache 2.0') {
      return 'This project uses the Apache 2.0 license'
    } else if (license === 'GPL 3.0') {
      return 'This project uses the GPL 3.0 license'
    } else {
      return '';
    }
  }


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const badge = renderLicenseBadge(data.license);

  return `
${badge}${renderLicenseLink(data.license)}

  # ${data.title}
  
  ## Description 
  ${data.description}

  ## Table of contents
  -[Installation](#installation)
  -[Usage](#usage)
  -[Contribution](#contribution)
  -[Tests](#tests)
  -[Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## License
  ${renderLicenseSection(data.license)}

  ## Contributing
  ${data.contribution}

  ## tests
  ${data.tests}

  ## Questions
  please visit my Github ${data.github}.
  For additional questions, please contact me at ${data.email}.

`;
}

export default generateMarkdown;
