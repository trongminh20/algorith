
function mutation(arr) {
 var b =[];
 for (var i in arr){
   b.push(arr[i].toLowerCase());
 } 
 //return b;
  for(var j = 0; j < b.length; j++){
    if(b.indexOf(b[j]) !== -1 ){
      return true;
    }
    return false;
  }
  
}

mutation(["hello", "hey"]);

