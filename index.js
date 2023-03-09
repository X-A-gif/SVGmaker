const inquirer = require('inquirer');
const generateLogoSvg = require('./assets/generate'); 
const fs = require('fs');



inquirer
  .prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for your logo:',
        validate: function(input) {
          if(input.length > 3){
              return "Please dont use more than three characters"
          }
          else{
              return true;
          }
      }
    },

    {
      type: 'input',
      name: 'textColor',
      message: 'Enter a color keyword or hexadecimal number for the text:'
    },

    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape for your logo:',
      choices: ['Circle', 'Triangle', 'Square']
    },

    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter a color keyword or hexadecimal number for the shape:'
    }

  ])
  .then(answers => {
    
    const logoText = answers.text;
    const logoTextColor = answers.textColor;
    const logoShape = answers.shape;
    const logoShapeColor = answers.shapeColor;

    const logoSvg = generateLogoSvg(logoText, logoTextColor, logoShape, logoShapeColor);

    fs.writeFile('logo.svg', logoSvg, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log('Generated logo.svg');
    });

  })
  .catch(error => {
    console.log(error);
  });
