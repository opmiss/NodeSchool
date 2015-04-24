var express = require('express');
var app = express();
var fs = require('fs')
var path = require('path'); 
//var dir = process.argv[3]||path.join(__dirname, 'public');
var port = process.argv[2]||3000; 
var file = process.argv[3]||path.join(__dirname, 'resource/file'); 

app.get('/books', function(req, res){
    fs.readFile(file, function(err, data){
	if (err) throw err;
	var object = JSON.parse(data); 
	res.end(JSON.stringify(object)); }); 
}); 
app.listen(port); 

