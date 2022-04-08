// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if ('Apache-2.0')
  // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  //(https://opensource.org/licenses/Apache-2.0)
} else {
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `${license}`
  // link: (https://opensource.org/licenses/Apache-2.0)
} else {
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // require("potential-enigma/utils/LICENSE.txt")
} else {
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}::arrow_down:
  ${renderLicenseBadge(license)}
  > ## ${data.description}
   - ## Table of Contents::mag:
    1. [ Installation ](#installation)
    2. [ Usage ](#usage)
    3. [ License ](#license)
    4. [ Contributing ](#contributing)
    5. [ Tests ](#tests) 
    6. [ Questions? ](#reach-out)

  - ## ${data.installation}
  - ## ${data.usage}
  - ## ${data.license}
  - ## ${data.contributing} 
   - @Xandromus: Xander Rapstine
   - @verokoles: Veronica Kolesnikov 
   - @gchoi2u: Grace Choi
  

  - ${data.tests}
  - ${data.reach - out}
   ##:raising_hand: Questions? Reach out!:raising_hand:
  - ### Github:octocat:: ${data.github}
  - ### email:email:: ${data.email}

${renderLicenseLink(data.license)}
[link to README tutorial video]()
`;
}

module.exports = generateMarkdown;
