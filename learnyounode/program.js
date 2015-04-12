var arr = process.argv;
var fs = require('fs'); 
var bf = fs.readFileSync(arr[2]);
console.log(bf.toString().split('\n').length-1); 
