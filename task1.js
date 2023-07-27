var http=require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-Type':'text/html'});
    res.end('HELLO WORLD');

}).listen(2023);