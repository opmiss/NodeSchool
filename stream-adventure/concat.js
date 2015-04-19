var through2 = require('through2'); 
var split = require('split');
var concat = require('concat-stream'); 

var count = 0; 
process.stdin.pipe(
	concat(function(src){ 
	    var s = src.toString().split('').reverse().join('');
	    console.log(s); 
	    }));
