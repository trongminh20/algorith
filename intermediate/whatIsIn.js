function whatIsInAName(collection,source){
	/*var key = Object.keys(source);
	return collection.filter(obj => {
		
		for(var i in key){
			
			if(!obj.hasOwnProperty(key[i]) || obj[key[i]] !== source[key[i]] ){
				
				return false;
			}

		}
		return true;
		
		//corrected with for loop
		//try with another loop


		/*
		return key.every(k => {
			return obj.hasOwnProperty(k) && obj[k] === source[k];
		});
		
		// corrected with .every()
		//trying with forEach()

		return key.forEach(i => {
			if(!obj.hasOwnProperty(key[i]) || obj[key[i]] !== source[key[i]] ){
				
				return false;
			}
		});
		return true;
	})
	//return [] 
	//it's unexpected
	//trying with another way that could be shorted
	*/
	var arr = collection.filter(a=> {
		for(var i in source ){
			if(source[i] !== a[i]){
				return false;
			}
		}
		return true;
	});
	return arr;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));