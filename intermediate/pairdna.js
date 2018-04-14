function pairElement(str){
	var keys = {A:'T', T:'A', C:'G', G:'C'};
	var dna = str.split('');
	var paired = [];
	for(var i in dna){
		paired.push([dna[i] , keys[dna[i]]]);
	}
	return paired;
}

console.log(pairElement("ATCGA"));