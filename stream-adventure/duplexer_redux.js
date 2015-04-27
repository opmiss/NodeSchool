var duplexer = require('duplexer2');
var through = require('through2').obj;  
module.exports = function(counter){
    var counts={}; 
    function write(d, _, next){
	counts[d.country] = (counts[d.country]||0)+1; 
	next(); 
    }
    function end(done){
	counter.setCounts(counts); 
	done(); 
    }
    var input = through(write, end);
    return duplexer(input, counter); 
}
