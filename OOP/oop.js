function Car(price, color){
	this.price = price;
	this.color = color;
	//properties
	this.wheels = 4; 
	//method
	this.honk = function(){
		return 'beep!!';
	}
}

var redCar = new Car(1000,'red');

console.log(redCar);