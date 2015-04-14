var arr = process.argv; 
var urls = arr.slice(2);
var http = require('http');
var msg=["", "", ""]; 


function getData(i){
    if (i>=urls.length) {
	for (var m in msg)
	    console.log(msg[m]);
	return; 
    }
    http.get(urls[i], function(res){
	res.on('data', function(data){
	    msg[i] = msg[i].concat(data.toString()); 
	    }); 
	res.on('end', function(){
	    getData(i+1); 
	    }); 
	}); 
};
getData(0); 
