var port = process.argv[2]; 
var http = require('http');
var map = require('through2-map'); 

var server = http.createServer(function(req, res){
      //console.log(req.method);
      if (req.method.toString()==='POST')
      req.pipe(map(function(chunk){
	  return chunk.toString().toUpperCase();})).pipe(res); 
    }); 
server.listen(Number(port));   
