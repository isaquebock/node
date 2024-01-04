const http = require('http')
const url = require('url')
const port = 3000;

const server = http.createServer((request, response) => {

    const urlInfo = url.parse(request.url, true)
    const name = urlInfo.query.name;


    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/html');
    
    if(!name) {
        response.end(`
            <h1>Name is required</h1>
            <form method='GET'>
                <input type='text' name='name' />
                <input type='submit' value='Send'></button>
            </form>
        `)
    } else {
        response.end(`
            <h1>Welcome ${name}</h1>
        `)
    }
})

server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}/`)
})