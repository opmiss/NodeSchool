var port = process.argv[2];
var http = require('http'); 
var url = require('url'); 
var server = http.createServer(function(req, res){
      //console.log(req.url);
      var obj = url.parse(req.url, true); 
      var datestring = obj.query.iso; 
      var date = new Date(datestring);
      var ret = {}; 
      if (obj.pathname==='/api/parsetime'){ 
	  ret.hour = date.getHours(); 
	  ret.minute = date.getMinutes(); 
	  ret.second = date.getSeconds(); 
      }
      else if (obj.pathname==='/api/unixtime'){
	  ret.unixtime = date.valueOf(); 
      }
      res.writeHead(200, {'content-type': 'application/json'}); 
      res.end(JSON.stringify(ret)); 
    }); 
server.listen(Number(port));   
