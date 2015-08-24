function duckCount(){
	var args = Array.prototype.slice.call(arguments);  
	return args.filter(function(e){
		return Object.prototype.hasOwnProperty.call(e, 'quack');  
	}).length
}
module.exports = duckCount;  
