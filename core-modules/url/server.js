const url = require('url');

const address = 'https://www.google.com/test?search=something'

const parsedUrl = new url.URL(address)

console.log(parsedUrl.host, parsedUrl.pathname, parsedUrl.search, parsedUrl.searchParams, parsedUrl.searchParams.get('search'));