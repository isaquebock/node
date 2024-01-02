const chalk = require('chalk');

const value = 2;

if(value > 7) {
    console.log(chalk.green('Congratulations! You are approved!'))
} else {
    console.log(chalk.bgRed.bold('Booh! You are reproved!'))
}