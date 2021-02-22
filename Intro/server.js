const http = require('http');
const hostname = 'localhost';
const port = 3000;

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html');
    res.write('<body class="app"></body>');
    res.write('<h1>Welcome To My World</h1>');
    res.write('<p>This is node.js Tutorial</p>');
    res.end();
});

server.listen(port, () => {
    console.log(`Listening On Port ${port}`)
});
