var  player = function (age, height){
	this.age = age;
	this.height = height;
}

var john = new player(20,175);

var alex = new player(30,165);

var players = {john, alex};

console.log(player);

