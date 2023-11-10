const { json } = require('express/lib/response')
const { readFile, writeFile } = require('fs/promises')
const http = require('http')
const port = 3000
const hostname = '127.0.0.1'

const server = http.createServer(async (req, res) => {
  const url = req.url
  const method = req.method;

  if (url === '/') {
    res.statusCode = 200
    // const html = await readFileAsync('./index.html')
    const html = await readFile('index.html')
    res.setHeader('content-type', 'text/html')
    res.write(html)
    res.end()
  } 
  
  else if(url === '/kontakt' && method === 'POST'){
    const body = []
    req.on('data',(chunk) => {
      body.push(chunk)
    })
    req.on('end', async () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
      const text = parseBody.split("=")[1];
      await writeFile(`./contact/message${Date.now().toString()}.txt`, text);
      res.statusCode = 302;
      res.setHeader("Location", "/dziekujemy");
      res.end();
    });
  }
  
  else if (url === '/dziekujemy') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.write('swieciocha tylko')
    res.end()
  } 
  
  else if (url === '/api') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    const json = await readFile('./api.json')
    res.write(JSON.stringify(json))
    res.end()
  } 
  
  else {
    res.statusCode = 404;
    res.JSON.stringify(json({error :'error'}));
    res.end();
  }
})

server.listen(port, hostname, () => {
  console.log('server running')
})
