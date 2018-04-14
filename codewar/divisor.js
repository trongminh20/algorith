function divisors(integer){
	var a =[];

	for (var i = 2; i < integer; i++){
		if(integer % i ==0){
			a.push(i);
		}
		if(a.length ==0){
		return integer + " is prime";
	}
	}
	return a;
	
}

console.log(divisors(13));