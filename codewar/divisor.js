
function divisors(integer){
	var a =[];
	for(var i = 2; i < integer; i++){
		if(integer % i == 0){
			a.push(i);
		}
	}
	return a.length ? a : integer + " is prime"; 

}

var test = Math.floor(Math.random()*10);

console.log(divisors(test)); 


console.log(divisors(12));