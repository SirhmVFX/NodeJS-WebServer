const http = require('http');
const fs = require('fs'); 

const server = http.createServer(function(req, res){
    fs.readFile('homepage.html', function(err, data){
        if (err) throw err 
        res.writeHead(200, {'Content-Type' : 'text/html'});

        res.write(data);
    });
});

server.listen(4000, '127.0.0.1');

console.log('Server is connected');