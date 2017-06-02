function rectangle(l,w){
	this.l = l;
	this.w = w;
	var calcArea = function(){
		return this.l * this.w;
	};
	var calcPermeter = function(){
		return (this.l + this.w)*2; 
	};
}
