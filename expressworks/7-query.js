var express = require('express');
var app = express(); 
//var path = require('path'); 
//var dir = process.argv[3]||path.join(__dirname, 'public');
var port = process.argv[2]||3000; 

app.get('/search', function(req, res){
    var ret = req.query;  
    res.end(JSON.stringify(ret)); }); 
app.listen(port); 

