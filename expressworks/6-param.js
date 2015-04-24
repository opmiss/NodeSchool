var express = require('express');
var app = express(); 
var path = require('path'); 
var dir = process.argv[3]||path.join(__dirname, 'public');
var port = process.argv[2]||3000; 

app.put('/message/:id', function(req, res){
    var hash = require('crypto').createHash('sha1').update(
    new Date().toDateString()+req.params.id).digest('hex');
    res.end(hash); 
}); 
app.listen(port); 

