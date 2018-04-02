function chunkArrayInGroups(arr, size) {
    var c = [];
    var i = 0;
  while(i < arr.length){
    c.push(arr.slice(i, i + size));
    i+=size;    
      }
  
    return c;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));