// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'none') {
    return ''
  }
  else {
    return ':![](https://img.shields.io/badge/license-' + license + '-green)'
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == 'none') {
    return ''
  }
  else {
    return '![License Link](https://opensource.org/licenses/' + license + ')'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license == 'none') {
    return ''
  }
  else {
    return license + renderLicenseLink(license)
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  
  ![badge](https://img.shields.io/badge/license-${data.projectLicense}-brightgreen)

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributors](#contributors)
  * [Test](#test)
  * [Questions](#questions)

  ## Description
  ${data.description}
  
  ## Installation 
  ${data.installation}
  
  ## Usage 
  ${data.usage}
  
  ## License
  ${data.license}
  
  ## Contributors
  ${data.credits}
  
  ## Test
  ${data.test}
  
  ## Questions
  
  Github:[${data.username}](https://github.com/${data.username})
  
  Email:[${data.email}]
  `;
}

module.exports = generateMarkdown;
