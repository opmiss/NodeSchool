function getDependencies(tree){ 
	if (!tree||!tree.hasOwnProperty("dependencies")){
		return []; 
	}
	var rget = function(dobj){
		return Object.keys(dobj).reduce(function(prev, cur){
			prev.push(cur+"@"+dobj[cur]["version"]); 
			if (dobj[cur].hasOwnProperty("dependencies")){
				return prev.concat(rget(dobj[cur]["dependencies"])); 
			}
			return prev; 
			}, [])
	}
	var res=rget(tree["dependencies"]).filter(function(item, pos, self){
		return self.indexOf(item)===pos; 
	});
	res.sort(); 
	return res; 
}

module.exports = getDependencies
