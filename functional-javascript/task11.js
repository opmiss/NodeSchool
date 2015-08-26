module.exports = function arrayMap(arr, fn){
	return arr.reduce(function(prev, cur, i, arr){
		prev.push(fn(cur)); 
		return prev; 
	},[]); 
}
