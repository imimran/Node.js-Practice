var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, responce){
    responce.writeHead(200,{ 'Content-Type':'text/html'});
    readStream = fs.createReadStream(__dirname + '/index.html');
    readStream.pipe(responce);
});

    server.listen(3000,'127.0.0.1');
