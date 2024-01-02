const inquirer = require('inquirer');

inquirer.prompt([{
    name: 'q1',
    message: 'What is your name?'
}])
.then((answers) => {
    console.log(answers)
})
.catch(error => console.error(error))