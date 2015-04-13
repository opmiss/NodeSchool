var fs = require('fs');

module.exports = function(dir, type, callback){ 
    fs.readdir(dir, function(err, list){
	if (err) return callback(err, null); 
	if (type)
	    list = list.filter(function(e){ if (e.substring(e.length-type.length-1)==='.'+type) return e; }); 
	callback(err, list); 
    }); 
}
