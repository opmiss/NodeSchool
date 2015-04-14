var arr = process.argv; 
var url = arr[2];
var http = require('http');

http.get(url, function(res){
    res.on('data', function(data){
	console.log(data.toString());
    }); 
}); 




