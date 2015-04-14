var arr = process.argv; 
var url = arr[2];
var http = require('http');

var msg=""; 
http.get(url, function(res){
    res.on('data', function(data){
	msg = msg.concat(data.toString());
    });
    res.on('end', function(){
	console.log(msg.length); 
	console.log(msg); 
    });  
}); 




