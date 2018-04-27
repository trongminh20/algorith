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