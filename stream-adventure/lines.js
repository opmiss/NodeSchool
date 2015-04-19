var through2 = require('through2'); 
var split = require('split');
var count =0; 
process.stdin.pipe(split())
.pipe(through2(function (line, _, next) {
    if (count%2==0)
	console.log(line.toString().toLowerCase());
    else
	console.log(line.toString().toUpperCase()); 
    count++; 
    next();}));
