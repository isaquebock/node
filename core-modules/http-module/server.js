const http = require('http')

const port = 3000;

const server = http.createServer((request, response) => {
    response.write('Hello World')
    response.end()
})

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`)
})