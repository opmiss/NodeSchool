var express = require('express');
var app = express(); 
var path = require('path'); 
var dir = process.argv[3]||path.join(__dirname, 'public');
var port = process.argv[2]||3000; 
var stylus = require('stylus'); 
app.use(stylus.middleware(dir)); 
app.use(express.static(dir));
app.listen(port); 

