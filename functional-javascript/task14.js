function repeat(operation, num){
	if (num<=0) return; 
	var fn={}; 
	fn.steps = num; 
	fn.run = operation; 
	return trampoline(fn); 
}

function trampoline(fn){
	for (var i=0; i<fn.steps; i++){
		fn.run(); 
	}
	return; 
}

module.exports = function(operation, num){
	return repeat(operation, num); 
}
