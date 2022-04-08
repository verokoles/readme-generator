// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // if ('Apache-2.0')
  // [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  //(https://opensource.org/licenses/Apache-2.0)
// } else {
//   return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `${license}`
  // link: (https://opensource.org/licenses/Apache-2.0)
// } else {
//   return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // require("potential-enigma/utils/LICENSE.txt")
// } else {
//   return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
   // license badge to appear at top pf page
  return `# ${data.title}::arrow_down: 
 
  
  > ## ${data.description}
    ## Table of Contents::mag:
      1. [ Installation ](#installation)
      2. [ Usage ](#usage)
      3. [ License ](#license)
      4. [ Contributions ](#contributing)
      5. [ Tests ](#tests) 
      6. [ Questions? ](#reach-out)

   ## Installation:
   -  ${data.installation}
   ## Usage:
   -  ${data.usage}
   ## License:
   -  ${data.license}
   ## Contributions:
   -  ${data.contributing} 
     1.  @Xandromus: Xander Rapstine
     2.  @verokoles: Veronica Kolesnikov 
     3.  @gchoi2u: Grace Choi
  
   ## Tests:
   -  ${data.tests}

   ##:raising_hand: Questions? Reach out!:raising_hand:
     ### Github:octocat:: ${data.github}
     ### email:email:: ${data.email}

${renderLicenseLink(data.license)}

[link to README tutorial video]()
`;
}

module.exports = generateMarkdown;
