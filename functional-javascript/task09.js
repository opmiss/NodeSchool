var slice = Array.prototype.slice

function logger(namespace){
	return function(msg){
		var args = Array.prototype.slice.call(arguments);
		args.unshift(namespace); 
		console.log.apply(null, args); 
	}
}

module.exports = logger
