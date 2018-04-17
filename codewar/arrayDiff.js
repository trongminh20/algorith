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