const http = require('http');

http.createServer((req, resp) => {
    resp.write('Hello, This is Lahu Mane3');
    resp.end();
}).listen(7070);