function loadUsers(userIds, load, done){
	var users = [] 
	var completed = 0; 
	userIds.forEach(function(e, id, arr){
		load(userIds[id], function(user){
			users[id]=user;
			if (++completed===userIds.length) return users; 
		}); 
	})
}

module.exports = loadUsers
