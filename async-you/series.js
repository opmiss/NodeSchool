var http = require('http');
var async = require('async'); 
var urlOne = process.argv[2]; 
var urlTwo = process.argv[3]; 

function getURL(url, done){
	var body=''; 
	http.get(url, function(res){
		res.on('data', function(chunk){ body+=chunk.toString();}); 
		res.on('end', function(){ done(null, body);});
		}).on('error', function(e){done(e);}); 
}

async.series({
	requestOne: function(done){
		getURL(urlOne, done); 
	}, 
	requestTwo: function(done){
		getURL(urlTwo, done); 
	}
}, function(err, results){
	console.log(results); 
}); 
