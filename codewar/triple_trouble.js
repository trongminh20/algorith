/*
tripledouble(num1,num2)
which takes in numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
For example:
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s

tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

tripledouble(12345, 12345) == 0

tripledouble(666789, 12345667) == 1
If this isn't the case, return 0


*/

function tripledouble(num1, num2){
	var a = num1.toString().split('');
	var count = []; 

	for(var i = 0; i< a.length; ++i){
		if(a[i].includes(a.slice(i, i+3))){
			count.push(a[i]);
		}
	}
	return count;

	
}
console.log(tripledouble(451999277));

//console.log(tripledouble(2,8));

//console.log(Math.pow(66789,3));