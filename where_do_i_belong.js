//fucntion will return the lowest index
// at which a value (second argument) should
// be inserted into an array (first argument) once
// it has been sorted. the returned should be
// number

function getIndexToIns(arr,num){
	//The first thing to do is sort the array from lower to bigger
	arr.sort(function(a,b){
		return a-b;
	});
	//check for the first number that is bigger and return the index.
	for(var i =0; i <= arr.length; i++){
		if(arr[i] >= num){
			return parseInt(i);
		}
	}
	//If there is no index for that number then you will have to deal with that case too.
	return arr.length;
};

//test fucntion
