var arr = process.argv; 
var dir = arr[2]; 
var type = null; 
if (arr.length>3) type = arr[3]; 
/*fs.readFile(arr[2], function(err, data){
    if (err) throw err; 
    console.log(data.toString().split('\n').length-1); 
});*/
/*fs.readdir(dir, function(err, files){
    if (err) throw err;  
    if (type){
	files = files.filter(function(e){
	    if (e.substring(e.length-type.length-1)===('.'+type))
		return e;     
	    }); 
    }
    for (var i in files)
	console.log(files[i]); 
});*/
var mymodule = require('./mymodule.js');
var callback = function(err, list){
    if (err) throw err; 
    /*if (type){
	list = list.filter(function(e){
	    if (e.substring(e.length-type.length-1)==='.'+type) return e; 
	    }); 
    }*/
    for (var i in list)
	console.log(list[i]); 
}
mymodule(dir, type, callback); 
