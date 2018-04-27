function car(listPrice, color){
	//private variable 
	var price = listPrice;
	//public variable 
	//this.price = listPrice;
	this.color = color;
	//method for accessing the private variable from 'outside'
	this.getPrice = function (){
		return price;
	}

}

var blueCar = new car(1000, 'blue');


console.log(blueCar.getPrice());