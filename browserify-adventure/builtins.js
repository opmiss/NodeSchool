var ur = require('url');
var qs = require('querystring'); 
var urlobj = ur.parse(prompt());
var filepath = urlobj.protocol+"//"+urlobj.host+ur.resolve(urlobj.pathname, qs.parse(urlobj.query)['file']);
console.log(filepath); 
