function Spy(target, method){
	this.omethod = target[method]; 
	this.count=0;  
	this.inc = function(){
		count++; 
	}
	target[method] = function(){
		inc();  
		omethod.apply(this, arguments); 
	}
	return this; 
}
module.exports = Spy

