function Bike (color, numGears){
	//parameters
	this.color = color;
	this.numGears = numGears;
	//properties
	this.numWheels = 2;

	//methods
	this.ride=function(){
		return 'I am riding';
	};

	this.paintRed = function(){
		return this.color = 'red';

	}
}

var myBike = new Bike('blue',6); 


//console.log(myBike);

//console.log(myBike.ride());
myBike.paintRed();
console.log(myBike.color);