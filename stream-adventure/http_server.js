var through = require('through2');

function write(buffer, encoding, next){
    this.push(buffer.toString().toUpperCase());
    next(); 
}
function end(done){
    done(); 
}
var str = through(write, end); 
//process.stdin.pipe(str).pipe(process.stdout); 

 var http = require('http');
 var server = http.createServer(function (req, res) {
     if (req.method === 'POST') req.pipe(str).pipe(res); 
 }); 
server.listen(process.argv[2]);
