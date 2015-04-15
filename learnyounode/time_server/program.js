var arr = process.argv; 
var port = arr[2]; 
var net = require('net'); 
var server = net.createServer(function(socket){
    var date = new Date();
    var YYYY = date.getFullYear().toString(); 
    var MM = (1+date.getMonth()).toString(); 
    if (MM.length<2) MM = '0'+MM; 
    var DD = date.getDate(); 
    if (DD.length<2) DD = '0'+DD; 
    var hh = date.getHours(); 
    if (hh.length<2) HH = '0'+HH; 
    var mm = date.getMinutes(); 
    if (mm.length<2) mm = '0'+mm; 
    var time = YYYY+"-"+MM+"-"+DD+" "+hh+":"+mm+'\n'; 
    socket.end(time); 
}); 
server.listen(port); 
