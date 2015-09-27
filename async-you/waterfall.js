var http = require('http');
var fs = require('fs'); 
var async = require('async');
var path = process.argv[2]; 

async.waterfall([
	function(cb){
		fs.readFile(path, function(err, data){
			if (err) return cb(err); 
			cb(null, data); 
		}); 
	}, 
	function(data, cb){
		//var port = JSON.parse(body).port;
		var body=''; 
		http.get(data.toString().trim(), function(res){
			res.on('data', function(chunk){
				body+=chunk.toString(); 
			});
			res.on('end', function(){
				cb(null, body); 
			}); 
		}).on('error', function(err){
			cb(err); 
		}); 
	}
  ], function(err, result){
	  if (err) return console.error(err); 
	  console.log(result); 
}); 
