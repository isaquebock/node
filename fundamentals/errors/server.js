const x = '10';

// if(!Number.isInteger(x)) {
//     throw new Error('Is not a number!')
// }

try {
    x = 2;
} catch(error) {
    console.error(error)
}

console.log('end')