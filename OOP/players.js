//define player class

function player(height,age){
	this.height = height;
	this.age = age;
}

var player_1 = new player(168,20);
var player_2 = new player(170,19);

var players = [];

players.push(player_1);
players.push(player_2);

player.prototype.compare = function (){

}

console.log(parseInt(Math.max(player.age)));
