function diff(a,b){
	var c = [];
	for(var i = 0; i < a.length; i++){
		if(b.indexOf(a[i]) === -1){
			c.push(a[i]);
		}
	}

	for(var j = 0; j < b.length; j++){
		if(a.indexOf(b[j]) === -1){
			c.push(b[j]);
		}
	}
	return c;
}
