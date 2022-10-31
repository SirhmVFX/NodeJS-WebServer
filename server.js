const http = require('http');
const fs = require('fs');
const path = require('path'); 

const server = http.createServer(function(req, res){
    if (req.url === '/'){
        const filePath = path.join(__dirname, 'public', 'homepage.html')
        fs.readFile(filePath, 'utf-8', function(err,data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }
        if (req.url === '/homepage.html'){
        const filePath = path.join(__dirname, 'public', 'homepage.html')
        fs.readFile(filePath, 'utf-8', function(err,data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }
            if (req.url === '/about.html'){
        const filePath = path.join(__dirname, 'public', 'about.html')
        fs.readFile(filePath, 'utf-8', function(err,data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }
            if (req.url === '/contact.html'){
        const filePath = path.join(__dirname, 'public', 'contact.html')
        fs.readFile(filePath, 'utf-8', function(err,data){
            res.writeHead(200, {'Content-Type' : 'text/html'})
            res.end(data)
        })
    }
})

const port = 8080; 

server.listen(port, '127.0.0.1'); 

console.log(`Server is connected to port ${port}`);