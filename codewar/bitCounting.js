var countBit = n => {
	n = n.toString(2);
	var count = 0 ;
	for (var i in n){
		if(n[i] == 1) 
			count++
	}
	return count;
}

console.log(countBit(15));