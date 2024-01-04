const fs = require('fs');

console.log('start');

fs.writeFile('file.txt', 'hello world', (error) => {
    setTimeout(() => {
        console.log('file was created!')
    }, 1000)
})

console.log('end');