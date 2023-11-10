const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const fs = require('fs/promises');

const server = http.createServer(async (req, res) => {
  res.statusCode = 200;
  const html = await fs.readFile('./home.html');
  res.setHeader('Content-Type', 'Text/html');
  res.write(html);
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`server running at http://${hostname}:${port}/`);
});
