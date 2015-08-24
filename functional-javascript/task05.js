function checkUsersValid(goodUsers){
	return function allUsersValid(submittedUsers){
		return submittedUsers.every(function(submitUser){
			return goodUsers.some(function(goodUser){
				return goodUser.id==submitUser.id; 
				})
			}); 
	}; 
}

module.exports = checkUsersValid
