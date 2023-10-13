const http = require("http");

// const hostName = '127.0.0.1';
const port = 8080;

http.createServer(function (req, res) {
    res.end('Hello World!');
  }).listen(8080);