const http = require("http");
const fs = require('fs');
const port = 8080;


http.createServer(function(req, res){
	fs.readFile('./index.html', function(error, fileContent){
		if(error){
			res.writeHead(500, {'Content-Type': 'text/plain'});
			res.end('Error');
		}
		else{
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.write(fileContent);
			res.end();
		}
	});
}).listen(port);