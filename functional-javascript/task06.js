function countWords(inputWords){
	var res = {}; 
	return inputWords.reduce(function(res, cur){
		res[cur] = ++res[cur]||1; 
		return res; 
	}, res); 
}

module.exports = countWords
