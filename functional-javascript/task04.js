function isShort(msg){
	return (msg.message.length<50);  
}
function extract(msg){
	return msg.message; 
}

function getShortMessages(messages){
	return messages.filter(isShort).map(extract); 
}

module.exports = getShortMessages
