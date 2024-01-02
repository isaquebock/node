const minimist = require('minimist');
const sum = require('./sum').sum;

const args = minimist(process.argv.slice(2));

console.log(sum(Number(args['a']),Number(args['b'])));