const inquirer = require('inquirer');
const chalk = require('chalk');

inquirer.prompt([
    {
        name: 'q1',
        message: 'What is your name?'
    },
    {
        name: 'q2',
        message: 'How old are you?'
    }
])
.then((answers) => {
    console.log(chalk.bgYellow.black(`Your name is ${answers.q1}.`))
    console.log(chalk.bgYellow.black(`You are ${answers.q2} years old.`))
})
.catch(error => console.error(error))