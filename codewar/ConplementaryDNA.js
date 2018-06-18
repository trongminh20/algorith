function dnaStrand(dna){
	var keys = {A:'T', T:'A',C:'G',G:'C'};

	var result = dna.split('');

	var paired = [];

	result.forEach(function(i){
		paired.push(keys[i]);
	});

	return paired.join('');
}

console.log(dnaStrand("TAAT"));
