function destroyer(arr){
    //convert arguments into array
    
    var args = Array.from(arguments);
    
    //compare the indexes of array and arguments
    //delete if it's equal
    for(var i in arr){
        for(var j in args){
            if(arr[i] === args[j]){
                delete arr[i];
            }
        }
    }
    
    return arr.filter(arr => Boolean(arr));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
    