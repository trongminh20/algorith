function findUniq(arr) {
   	return parseFloat(arr.filter(val => arr.indexOf(val) === arr.lastIndexOf(val)));

   }

 console.log(findUniq([1,1,1,2,1,1,1]));

 
/*
 function Uni(arr){
 	return parseFloat(arr.filter(function(val){
 		return (arr.indexOf(val) === arr.lastIndexOf(val));
 	}));

 }

console.log(Uni([11,22,11,4,11,22,4,,7]));
*/