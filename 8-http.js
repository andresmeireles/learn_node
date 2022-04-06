const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    res.write('welcome man ' + url);
    res.end();
});

server.listen(5000);