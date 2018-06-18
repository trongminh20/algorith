function checkThreeAndTwo(array) {
   var newArr = array.sort();
   var afterSort = [];
   var afterSort2= [];
   newArr.forEach(function(i){
     if(i === i++){
       afterSort.push(i);
     }
     afterSort2.push(i);
   });
   
   //return afterSort;
   console.log(afterSort);
   console.log(array);
}

console.log(checkThreeAndTwo(['a','c','a','b']));