var fs = require('fs');


var r = fs.readFileSync('demo.txt', 'utf8');

fs.writeFileSync('demo.txt','I am Imran')

console.log(r)