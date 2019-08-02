var http = require('http');
var fs = require('fs');
var readStream = fs.createReadStream(__dirname + '/demo.txt');
var writeStream = fs.createWriteStream(__dirname + '/demowt.txt');
//var chunk_count = 0;
readStream.on('data', function(d){
    //console.log('this is data' + d);
    //chunk_count++;
    //console.log(chunk_count);
    writeStream.write(d);

});
