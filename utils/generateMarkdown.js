// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if ('Apache-2.0') {
    license = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else {
    return ''
  }
  return (license)
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if ('Apache-2.0') {
    license = '(https://opensource.org/licenses/Apache-2.0)'
    // return `${license}`
  } else {
    return ''
  }
  return (license)
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if ('Apache-2.0') {
  section = '("potential-enigma/utils/LICENSE.txt")'
  } else {
    return ''
  }
  return (license)
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // license badge to appear at top pf page after title
  return `# ${data.title}::arrow_down: 
  ${renderLicenseBadge()}
 
  
  > ## ${data.description}


  

   ## Table of Contents::mag:
   1. [ Installation ](#installation)
   2. [ Usage ](#usage)
   3. [ License ](#license)
   4. [ Contributing ](#contributing)
   5. [ Tests ](#tests)

   ## Installation:

   To install dependancies, run the following command:

     \`\`\`
     ${data.installation}
     \`\`\`

   ## Usage:

     ${data.usage}


   ## License: 

     ${data.license} 

     ${renderLicenseLink(data.license)}

     ${renderLicenseSection(data.license)}

  [Link to Apache-2.0 license](https://opensource.org/licenses/Apache-2.0)


  

   ## Contributing:

     ${data.contributing}

  [More on Contribution Guidelines](https://github.com/verokoles/readme-generator/blob/3220778d2f594c3353146c586712b23435a1ebd6/contributing.md)
  
   ## Tests:

     In order to run tests, use command:

   \`\`\`
   ${data.tests}
   \`\`\`

   ## Questions?:raising_hand:
   

  ### Reach out via:

    :octocat:Github: ${data.github}
    
    :email:email: ${data.email}



  [link to README tutorial video]()
`;
}

module.exports = generateMarkdown;
