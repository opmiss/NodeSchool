module.exports = function(namespace){
/*	function list(){
		console.log.apply(null, Array.prototype.slice.call(arguments));
	}
	var msglist = list.bind(undefined, namespace); 
	return msglist; */
	return console.log.bind(console, namespace); 
}
