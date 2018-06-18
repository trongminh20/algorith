/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains more than 3 numbers.

The tests contain some very huge arrays, so think about performance.




*/

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