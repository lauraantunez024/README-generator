// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions? Provide step-by-step instructions.',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project. Why did you make it? What did you learn?',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Who made this project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Explain in detail how to use your project. Provide instructions and examples.'
    },
    {
      type: 'input',
      name: 'license',
      message: 'Add license information here. This lets other developers know what they can and cannot do with your project.',
    }, {
      type: 'input',
      name: 'github',
      message: 'link to github profile?',
    }, {
      type: 'input',
      name: 'contributing',
      message: 'Explain how others can contribute to this project.',
    },{
      
      type: 'input',
      name: 'email',
      message: 'What is your email?',
      
     }

  ])
  .then(({


    title, 
    installation,
    description,
    usage,
    license,
    credits,
    contributing, 
    tests,
    github,
    email



  })=>{
  
    let readMeTemplate =  `
    
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
# ${title}

## Description

${description}

## Installation

${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}

## Contributing guidelines

${contributing}

## Tests

${tests}

## Questions

[Github Profile](${github})

My Email: ${email}

`;
writeToFile(title, readMeTemplate)



  });



function writeToFile(fileName, data) {
fs.writeFile(`./${fileName.toLowerCase().split(' ').join('')}.md`, data, (err) => {
    if(err) {
        console.log(err)
    } 
    console.log("Your ReadMe is ready.")
})

};