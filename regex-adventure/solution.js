var literally = /LITERALLY/;
var anchor_start = /^LITERALLY/;
var anchor_end = /BANANAS$/;
var character_class = /^[aeiou0-9]/;
var neg_char_class = /^[\D][^A-Z]/; 
var meta = /\.$/;
var quantifier = /^\d+\.jpe?g$/; 
var split = /\s*,\s*/;
var capture = /x=(\d+)/;  
var capture_break = /\bx=(\d+)\b/; 
var alternation = /^(cat|dog|robot)\d+$/; 
var quant_group = /^(0x([\dA-Fa-f]){2}\s+){8}$/;  
var quotes = /"[^"]*"/g; 
module.exports = function(str){
	return str.match(quotes); 
}

//console.log(module.exports("cool \"beans\" \"beep\" hello")); 

