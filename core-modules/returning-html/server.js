const http = require('http')

const port = 3000;

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html')
    response.end('<h1>Hello World</h1>')
})

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`)
})