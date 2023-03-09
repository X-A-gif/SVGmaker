const inquirer = require('inquirer');

inquirer.prompt([
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    validate: function (input) {
      if (input.length > 3) {
        return 'Please enter up to three characters';
      }
      return true;
    },
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color:',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape:',
    choices: ['circle', 'triangle', 'square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color:',
  },
])
.then((answers) => {
 
});
