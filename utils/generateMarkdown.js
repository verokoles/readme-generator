// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if ('Apache-2.0')
  //badge: [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `${license}`
  // link: (https://opensource.org/licenses/Apache-2.0)
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
// relative path for license: potential-enigma/utils/LICENSE.txt
} 

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  > ${data.description}
  > ${data.tableOfContents}
  - ${data.installation}
  - ${data.usage}
  - ${data.license}
  - ${data.contributing} 
  - 
   @Xandromus: Xander Rapstine
   -
  - 
  @verokoles: Veronica Kolesnikov
  -
  - 
  @gchoi2u: Grace Choi
  -
  - ${data.tests}
  - ${data.questions}
${renderLicenseLink(data.license)}
[link to README tutorial video]()
`;
}

module.exports = generateMarkdown;
