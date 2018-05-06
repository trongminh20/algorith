//class
function car(listed_price){
	var price = listed_price;
	this.speed = 0;
	this.numWheels = 4;

	//get price method

	this.get_price = function(){
		return price;
	};
}
//public method
car.prototype.accelerate = function (){
	this.speed += 10;
}

var blue = new car(1000);

//define new object
function eCar(listedPrice ) {
   this.price = listedPrice;
   
};

//inheritance
eCar.prototype = new car();

var a = new eCar(5000);

console.log(a.accelerate());




