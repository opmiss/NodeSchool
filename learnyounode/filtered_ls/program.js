var arr = process.argv;
var fs = require('fs');
var dir = arr[2]; 
var type = null; 
if (arr.length>3) type = arr[3];  
/*fs.readFile(arr[2], function(err, data){
    if (err) throw err; 
    console.log(data.toString().split('\n').length-1); 
});*/
fs.readdir(dir, function(err, files){
    if (err) throw err;  
    if (type){
	files = files.filter(function(e){
	    if (e.substring(e.length-type.length-1)===('.'+type))
		return e;     
	    }); 
    }
    for (var i in files)
	console.log(files[i]); 
}); 
