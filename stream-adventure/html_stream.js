var trumpet = require('trumpet');
var fs = require('fs');
var tr = trumpet(); 

var through = require('through2');
function write(buffer, encoding, next){
    this.push(buffer.toString().toUpperCase());
    next(); 
}
function end(done){
    done(); 
}
var transform = through(write, end);
var loud = tr.select('.loud').createStream();
loud.pipe(transform).pipe(loud); 
process.stdin.pipe(tr).pipe(process.stdout); 
