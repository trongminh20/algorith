/* 
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).


*/
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