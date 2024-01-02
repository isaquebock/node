const chalk = require('chalk');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('What is your name? ', (name) => {
    console.log(chalk.green(`My name is ${name}`));
    readline.close();
})