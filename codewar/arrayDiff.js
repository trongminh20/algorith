/*
Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b.

array_diff([1,2],[1]) == [2]
If a value is present in b, all of its occurrences must be removed from the other:

array_diff([1,2,2,2,3],[2]) == [1,3]
*/

/*
function array_diff(a, b) {
 var newArr = [];
 for(var i in a){
   if(b.length > 0){
     for(var j in b){
       if(a[i] !== b[j]){
          newArr.push(a[i]);
       }
     }
    }else {
      return a;
    }
    
 }
 return newArr;
}
*/


function array_diff(a, b) {
  
  return newArr = a.filter(i => b.length ? b.indexOf(i): a);
}

console.log(array_diff([], [4,5]));

console.log(array_diff([3,4], [3]));