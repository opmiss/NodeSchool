function reduce(arr, fun, init){
	if (!arr.length) return init;
	return reduce(arr.slice(1), fun, fun(init, arr[0], 0, arr)); 
}
module.exports = reduce; 
